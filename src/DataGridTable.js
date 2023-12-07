import * as React from "react";
import { useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { useFlags, useLDClient } from "launchdarkly-react-client-sdk";
import Chart from "react-apexcharts";

import { customEvalContext } from "./utils";

const BoxStyle = {
  height: "100%",
  width: "100%",
  pt: 4,
  "& .falseValue": {
    color: "red",
  },
  "& .trueValue": {
    color: "green",
  },
};

function handleCellClick(params) {
  // console.log(params);
  const { field, value } = params;
  if (field !== "reason" && field !== "flagValue" && field !== "context") {
    return;
  }

  const json = typeof value !== "object" ? JSON.parse(value) : value;
  alert(`Value\n${JSON.stringify(json, null, 2)}`);
}

function DataVisuallize(props) {
  const { singleContextEnable } = props;

  const Component = singleContextEnable
    ? DataGridTable
    : MultiUserDataGridTable;

  return <Component {...props} />;
}
function DataGridTable(props) {
  const columns = [
    {
      field: "id",
      headerName: "Flag Key",
      flex: true,
      headerClassName: "header",
    },
    {
      field: "flagValue",
      headerName: "Flag Value",
      valueFormatter: ({ value }) => {
        const val = typeof value === "object" ? JSON.stringify(value) : value;
        return `${val}`;
      },
      flex: true,
      headerClassName: "header",
    },
    {
      field: "reason",
      headerName: "Reason",
      flex: true,
      headerClassName: "header",
    },
  ];
  const { loadingFn } = props;

  const flags = useFlags();
  const ldClient = useLDClient();
  const rows = [];

  for (const [id, flagValue] of Object.entries(flags)) {
    let evalDetail = ldClient.variationDetail(id, flagValue);
    let reason = evalDetail.reason ? JSON.stringify(evalDetail.reason) : "";
    rows.push({ id, flagValue, reason });
  }
  loadingFn(false);

  return (
    <Box sx={{ ...BoxStyle }}>
      <DataGrid
        slots={{ toolbar: GridToolbar }}
        sx={{
          height: 300,
          width: "100%",
          "& .header": {
            backgroundColor: "rgba(0, 124, 255, 0.20)",
          },
        }}
        rows={rows}
        columns={columns}
        autoHeight
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
          sorting: {
            sortModel: [{ field: "id", sort: "asc" }],
          },
        }}
        density='compact'
        pageSizeOptions={[5, 10, 25, 45]}
        onCellClick={handleCellClick}
        getCellClassName={(params) => {
          if (params.field !== "flagValue") {
            return "";
          }
          if (
            typeof params.value === "object" ||
            typeof params.value === "string"
          ) {
            return;
          }
          return params.value === true ? "trueValue" : "falseValue";
        }}
      />
    </Box>
  );
}
function compareContextItems(a, b) {
  if (!a.hasOwnProperty("contextName") || !b.hasOwnProperty("contextName")) {
    return 0;
  }

  if (a.contextName.toLowerCase() < b.contextName.toLowerCase()) {
    return -1;
  }
  if (a.contextName.toLowerCase() > b.contextName.toLowerCase()) {
    return 1;
  }

  return 0;
}

function MultiUserDataGridTable({
  userContexts,
  flagKeyFilter,
  loadingFn,
  flagPurpose,
}) {
  const ldClient = useLDClient();
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [isRegistered, setIsRegistered] = React.useState(false);
  const columns = [
    {
      field: "id",
      headerName: "User Key",
      flex: true,
      headerClassName: "header",
    },
    {
      field: "contextName",
      headerName: "Name",
      flex: true,
      headerClassName: "header",
    },
    {
      field: "flagKey",
      headerName: "Flag Key",
      flex: true,
      headerClassName: "header",
    },
    {
      field: "flagValue",
      headerName: "Flag Value",
      flex: true,
      headerClassName: "header",
      valueFormatter: ({ value }) => {
        const val = typeof value === "object" ? JSON.stringify(value) : value;
        return `${val}`;
      },
    },
    {
      field: "reason",
      headerName: "Reason",
      flex: true,
      headerClassName: "header",
    },
    {
      field: "context",
      headerName: "Context",
      flex: true,
      headerClassName: "header",
    },
  ];

  useEffect(() => {
    const handler = function (oldVal, newVal) {
      setTimeout(() => {
        loadingFn(true);

        setLoading(true);
      }, 500);
      ldClient.off(`change:${flagKeyFilter.trim()}`, handler);
    };

    const populateRowValues = async () => {
      customEvalContext(ldClient, userContexts, flagKeyFilter).then(
        (result) => {
          const rows = result.reduce((acc, curr) => {
            const { context, response } = curr;
            const { key: id, name: contextName } = context.user;
            const { value, reason } = response;
            acc.push({
              id,
              contextName,
              flagKey: flagKeyFilter,
              flagValue: value,
              reason: JSON.stringify(reason),
              context: JSON.stringify(context),
            });
            return acc;
          }, []);
          rows.sort(compareContextItems);
          loadingFn(false);
          setLoading(false);
          setRows(rows);
          if (!isRegistered) {
            setIsRegistered(true);
            ldClient.on(`change:${flagKeyFilter.trim()}`, handler);
          }
        }
      );
    };

    if (!loading) {
      return;
    }

    populateRowValues();
    return (_) => {
      setLoading(false);
      setIsRegistered(false);
    };
  }, [rows.length, flagKeyFilter, ldClient, loadingFn, userContexts, loading]);

  return (
    <Box>
      <Box
        sx={{
          ...BoxStyle,
          mt: 3,
          display: "grid",
          gridTemplateColumns: "repeat(2, 10fr)",
        }}
      >
        <FlagEvalBarChart
          rows={rows}
          flagFilter={flagKeyFilter}
          flagPurpose={flagPurpose}
          height={250}
          width={450}
        />
        <FlagEvalHeatMap
          rows={rows}
          flagPurpose={flagPurpose}
          flagFilter={flagKeyFilter}
          height={245}
          width={480}
        />
      </Box>
      <Box
        sx={{
          ...BoxStyle,
        }}
      >
        <DataGrid
          loading={loading}
          slots={{ toolbar: GridToolbar }}
          sx={{
            height: 300,
            width: "100%",
            "& .header": {
              backgroundColor: "rgba(0, 124, 255, 0.20)",
            },
          }}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
            sorting: {
              sortModel: [{ field: "name", sort: "asc" }],
            },
            columns: {
              columnVisibilityModel: {
                id: true,
              },
            },
          }}
          density='compact'
          pageSizeOptions={[5, 10, 25, 45]}
          rows={rows}
          columns={columns}
          autoHeight
          onCellClick={handleCellClick}
          getCellClassName={(params) => {
            if (params.field !== "flagValue") {
              return "";
            }
            if (
              typeof params.value === "object" ||
              typeof params.value === "string"
            ) {
              return;
            }
            return params.value === true ? "trueValue" : "falseValue";
          }}
        />
      </Box>
    </Box>
  );
  /**/
} //func eof

function FlagEvalBarChart(props) {
  const { rows, height, width, flagPurpose } = props;

  const { series, hasBoolVal, seriesOptions } =
    flagPurpose === "evaluation"
      ? createBarChartBooleanDataSeries(props)
      : createBarChartMigrationDataSeries(props);

  if (!hasBoolVal && flagPurpose === "evaluation") {
    return <></>;
  }
  const options = { ...seriesOptions };
  return (
    <Chart
      options={options}
      series={series}
      type='bar'
      height={height}
      width={width}
    />
  );
}

function FlagEvalHeatMap(props) {
  let { flagFilter, rows, height, width, flagPurpose } = props;

  const migrationPlotOptions = {
    heatmap: {
      enableShades: false,
      colorScale: {
        ranges: [
          {
            from: 1,
            to: 1,
            color: "#FC4503",
            name: "off",
          },
          {
            from: 2,
            to: 2,
            color: "#C103FC",
            name: "dualwrite",
          },
          {
            from: 3,
            to: 3,
            color: "#BB8144",
            name: "shadow",
          },
          {
            from: 4,
            to: 4,
            color: "#033DFC",
            name: "live",
          },
          {
            from: 5,
            to: 5,
            color: "#03BAFC",
            name: "rampdown",
          },
          {
            from: 6,
            to: 6,
            color: "#05a80a",
            name: "complete",
          },
        ],
      },
    },
  };

  const defaultPlotOptions = {
    heatmap: {
      colorScale: {
        ranges: [
          {
            from: 0,
            to: 5,
            color: "#fc4503",
            name: "False",
          },
          {
            from: 6,
            to: 10,
            color: "#05a80a",
            name: "True",
          },
        ],
      },
    },
  };

  const plotOptions = defaultPlotOptions;

  const migrationStages = [
    "off",
    "dualwrite",
    "shadow",
    "live",
    "rampdown",
    "complete",
  ];
  const { hasBoolVal } = createBooleanDataSeries(rows);

  const options = {
    dataLabels: {
      enabled: false,
    },

    title: {
      text: `${flagPurpose.toUpperCase()} : ${flagFilter}`,
    },
    xaxis: {
      labels: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    legend: {
      show: true,
      inverseOrder: true,
    },

    tooltip: {
      enabled: true,

      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        const name =
          w.config.series[seriesIndex].data[dataPointIndex].split("|")[1];
        return name;
      },
    }, // tool-tip
    legend: {
      horizontalAlign: "left",
      inverseOrder: false,
    },
    chart: {
      events: {
        click: function (event, chartContext, config) {
          const { seriesIndex, dataPointIndex, config: _config } = config;
          if (seriesIndex < 0) {
            return;
          }
          const data = JSON.parse(
            _config.series[seriesIndex].data[dataPointIndex].split("|")[2]
          );
          alert(`${JSON.stringify(data, " ", 2)}`);
        },
      },
    }, // chart
    plotOptions,
  }; //options

  // heatmap
  const generateSeriesData = (data, maxCol = 10) => {
    let flagValues = [];
    const dataTmp = data.map(({ contextName, flagValue, context }) => {
      let v = 0;

      if (flagPurpose === "migration") {
        v = migrationStages.findIndex((val) => val === flagValue) + 1;
      } else {
        v = flagValue === true ? 10 : 5;
      }
      flagValues.push(flagValue);
      return `${v}|&nbsp;${contextName}<br>&nbsp;${flagValue}|${context}`;
    });

    const arr = [];
    for (let i = 0; i < dataTmp.length; i += maxCol) {
      const tmp = dataTmp.slice(i, i + maxCol);
      arr.push({ name: ``, data: tmp });
    }
    flagValues = [...new Set(flagValues)];
    return { data: arr, flagValues };
  };

  if (!hasBoolVal && flagPurpose === "evaluation") {
    return <></>;
  }

  const { data: seriesData, flagValues } = generateSeriesData(rows);

  if (flagPurpose === "migration") {
    // const ranges = migrationPlotOptions.heatmap.colorScale.ranges.filter(
    //   (range) => flagValues.includes(range.name)
    // );

    options.plotOptions = migrationPlotOptions;
    // hide
    // options.plotOptions.heatmap.colorScale.ranges = ranges;
  }

  return (
    <Chart
      options={options}
      series={seriesData}
      type='heatmap'
      height={height}
      width={width}
    />
  );
}

function createBooleanDataSeries(rows) {
  const falseSeries = rows.filter(({ flagValue }) => flagValue === false);
  const trueSeries = rows.filter(({ flagValue }) => flagValue === true);
  const hasBoolVal = trueSeries.length > 0 || falseSeries.length > 0;

  return { falseSeries, trueSeries, hasBoolVal };
}

function createBarChartBooleanDataSeries({ rows, flagPurpose, flagFilter }) {
  const { trueSeries, falseSeries, hasBoolVal } = createBooleanDataSeries(rows);
  const series = [
    {
      name: "True",
      data: [
        {
          x: "True",
          y: Math.ceil((trueSeries.length / rows.length) * 100),
          fillColor: "#05a80a",
        },
      ],
    },
    {
      name: "False",
      data: [
        {
          x: "False",
          y: Math.ceil((falseSeries.length / rows.length) * 100),
          fillColor: "#fc4503",
        },
      ],
    },
  ];
  const seriesOptions = {
    chart: {
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "85%",
        dataLabels: {
          total: {
            enabled: false,
          },
        },
      },
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    title: {
      text: `${flagPurpose.toUpperCase()}: ${flagFilter}`,
    },
    xaxis: {
      categories: ["Percentage"],
      max: 100,
      labels: {
        show: true,
        formatter: function (val) {
          return val + "%";
        },
      },
    },

    fill: {
      opacity: 1,
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: function (val) {
          return Math.floor((val / 100) * rows.length);
        },
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      offsetX: 40,
      markers: {
        fillColors: ["#05a80a", "#fc4503"],
      },
    },
  };

  return { series, trueSeries, falseSeries, hasBoolVal, seriesOptions };
}

function createBarChartMigrationDataSeries({ rows, flagPurpose, flagFilter }) {
  const offSeries = rows.filter(({ flagValue }) => flagValue === "off");
  const dualWriteSeries = rows.filter(
    ({ flagValue }) => flagValue === "dualwrite"
  );
  const shadowSeries = rows.filter(({ flagValue }) => flagValue === "shadow");
  const liveSeries = rows.filter(({ flagValue }) => flagValue === "live");
  const rampDownSeries = rows.filter(
    ({ flagValue }) => flagValue === "rampdown"
  );
  const completeSeries = rows.filter(
    ({ flagValue }) => flagValue === "complete"
  );

  const series = [
    {
      name: "off",
      data: [
        {
          x: "off",
          y: Math.ceil((offSeries.length / rows.length) * 100),
          fillColor: "#FC4503",
        },
      ],
    },
    {
      name: "dualwrite",
      data: [
        {
          x: "dualwrite",
          y: Math.ceil((dualWriteSeries.length / rows.length) * 100),
          fillColor: "#C103FC",
        },
      ],
    },
    {
      name: "shadow",
      data: [
        {
          x: "shadow",
          y: Math.ceil((shadowSeries.length / rows.length) * 100),
          fillColor: "#BB8144",
        },
      ],
    },
    {
      name: "live",
      data: [
        {
          x: "live",
          y: Math.ceil((liveSeries.length / rows.length) * 100),
          fillColor: "#033DFC",
        },
      ],
    },
    {
      name: "rampdown",
      data: [
        {
          x: "rampdown",
          y: Math.ceil((rampDownSeries.length / rows.length) * 100),
          fillColor: "#03BAFC",
        },
      ],
    },
    {
      name: "complete",
      data: [
        {
          x: "complete",
          y: Math.ceil((completeSeries.length / rows.length) * 100),
          fillColor: "#05a80a",
        },
      ],
    },
  ];

  let seriesOptions = {
    title: {
      text: `${flagPurpose.toUpperCase()}:  ${flagFilter} (Instance count)`,
      align: "middle",
    },
    chart: {
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        horizontal: true,
        barHeight: "100%",
        isFunnel: true,
      },
    },
    dataLabels: {
      enabled: true,
      dropShadow: {
        enabled: true,
      },
    },

    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
      y: {
        formatter: function (val, opt) {
          return val;
        },
      },
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
      offsetX: 40,
      markers: {
        fillColors: [
          "#FC4503",
          "#C103FC",
          "#BB8144",
          "#033DFC",
          "#03BAFC",
          "#05a80a",
        ],
      },
    },
  };
  return { series, seriesOptions, hasBoolVal: false };
}

export { DataVisuallize, DataGridTable, MultiUserDataGridTable };
