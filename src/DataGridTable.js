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

  const ldClient = useLDClient();
  ldClient.setStreaming(singleContextEnable);

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

function MultiUserDataGridTable({ userContexts, flagKeyFilter, loadingFn }) {
  const ldClient = useLDClient();
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

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
        }
      );
    };
    populateRowValues();
  }, [rows.length, flagKeyFilter, ldClient, loadingFn, userContexts]);

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
          height={250}
          width={450}
        />
        <FlagEvalHeatMap
          rows={rows}
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
  const { flagFilter, rows, height, width } = props;

  const falseSeries = rows.filter(({ flagValue }) => flagValue === false);
  const trueSeries = rows.filter(({ flagValue }) => flagValue === true);
  const hasBoolVal = trueSeries.length > 0 || falseSeries.length > 0;
  let options = {
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
      text: `Rollout: ${flagFilter}`,
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
    legend: {
      position: "top",
      horizontalAlign: "left",
      offsetX: 40,
      markers: {
        fillColors: ["#05a80a", "#fc4503"],
      },
    },
  };

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

  const tooltip = {
    enabled: true,
    y: {
      formatter: function (val) {
        return Math.floor((val / 100) * rows.length);
      },
    },
  };

  if (!hasBoolVal) {
    return <></>;
  }
  options = { ...options, tooltip };
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
  const { flagFilter, rows, height, width } = props;

  const falseSeries = rows.filter(({ flagValue }) => flagValue === false);

  const trueSeries = rows.filter(({ flagValue }) => flagValue === true);

  const hasBoolVal = trueSeries.length > 0 || falseSeries.length > 0;
  const options = {
    dataLabels: {
      enabled: false,
    },

    title: {
      text: `Rollout: ${flagFilter}`,
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
    chart: {
      events: {
        click: function (event, chartContext, config) {
          const { seriesIndex, dataPointIndex, config: _config } = config;
          const data = JSON.parse(
            _config.series[seriesIndex].data[dataPointIndex].split("|")[2]
          );
          alert(`${JSON.stringify(data, " ", 2)}`);
        },
      },
    }, // chart
    plotOptions: {
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
    }, //plotOptions
  }; //options

  // heatmap
  const generateSeriesData = (data, maxCol = 10) => {
    const dataTmp = data.map(({ contextName, flagValue, context }) => {
      let v = flagValue === true ? 10 : 5;
      // return `${v}|${contextName}|${JSON.stringify(context)}`;
      return `${v}|${contextName}|${context}`;
    });

    const arr = [];
    for (let i = 0; i < dataTmp.length; i += maxCol) {
      const tmp = dataTmp.slice(i, i + maxCol);
      arr.push({ name: ``, data: tmp });
    }
    return arr;
  };
  if (!hasBoolVal) {
    return <></>;
  }

  return (
    <Chart
      options={options}
      series={generateSeriesData(rows)}
      type='heatmap'
      height={height}
      width={width}
    />
  );
}
export { DataVisuallize, DataGridTable, MultiUserDataGridTable };
