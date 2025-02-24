import "./App.css";
import Grid from "@mui/material/Unstable_Grid2";
import { LoadingButton } from "@mui/lab";
import { basicLogger } from "launchdarkly-js-client-sdk";
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Switch from '@mui/material/Switch';

import React from "react";
import { createRoot } from "react-dom/client";
import { DataVisuallize } from "./DataGridTable";

import { defaultMultiUser } from "./data";


// Add this constant at the top of the file, outside the component
const STORAGE_KEYS = {
  SEND_EVENTS: 'ld_send_events'
};

export default function App() {
  const defaultGetFlagsEle = () => <span>Get Flags</span>;
  const defaultFlagKeyEvalEle = () => <span>Evaluate Flag Key</span>;

  const [loading, setLoading] = React.useState(false);
  const [enableSubmitButton, setEnableSubmitButton] = React.useState(true);
  const [enableApplyButton, setEnableApplyButton] = React.useState(false);
  const [contextFieldHelperText, setContextFieldHelperText] =
    React.useState("");
  const [contextFieldHasError, setContextFieldHasError] = React.useState(false);

  const [isFlagKeyEnabled, setIsFlagKeyEnabled] = React.useState(false);
  const [clientSideID, setClientSideID] = React.useState("");
  const [context, setContext] = React.useState(defaultMultiUser[0]);
  const [tableContainerRoot, setTableContainerRoot] = React.useState(null);
  const [singleContextEnable, setSingleContextEnable] = React.useState(true);
  const [loadingButtonChildNode, setLoadingButtonChildNode] =
    React.useState(defaultGetFlagsEle);
  const [flagKeyEval, setFlagKeyEval] = React.useState("");
  const [flagPurpose, setFlagPurpose] = React.useState("evaluation");
  const [sendEvents, setSendEvents] = React.useState(() => {
    const storedValue = localStorage.getItem(STORAGE_KEYS.SEND_EVENTS);
    return storedValue ? JSON.parse(storedValue) : false;
  });

  async function handleSubmit() {
    setLoading(true);
    const ctx = !singleContextEnable ? defaultMultiUser[0] : context;
    
    // Get the current sendEvents setting from localStorage
    const currentSendEvents = JSON.parse(
      localStorage.getItem(STORAGE_KEYS.SEND_EVENTS) || 'false'
    );

    let LDProvider = await asyncWithLDProvider({
      clientSideID,
      options: {
        logger: basicLogger({
          destination: (line) => alert(line),
          level: "error",
        }),
        bootstrap: "localStorage",
        streaming: true,
        sendEvents: currentSendEvents,
        evaluationReasons: true,
        sendEventsOnlyForVariation: false,
        fetchGoals: true,
        diagnosticOptOut: true,
        application: {
          version: "2.0.0",
          id: "btan-react-web-sandbox",
        },
      },
      context: ctx,
      reactOptions: { useCamelCaseFlagKeys: false },
    });

    let root = tableContainerRoot;
    if (!root) {
      const tableEle = document.getElementById("tablePlaceholder");
      root = createRoot(tableEle);
      setTableContainerRoot(root);
    }

    root.render(
      <LDProvider>
        <DataVisuallize
          singleContextEnable={singleContextEnable}
          flagPurpose={flagPurpose}
          userContexts={context}
          flagKeyFilter={flagKeyEval}
          loadingFn={setLoading}
        />
      </LDProvider>
    );
  }

  function setContextField() {
    try {
      setContextFieldHasError(false);
      setContextFieldHelperText("");
      let contextField = document.getElementById("contextField");
      const value = contextField.value;
      const json = typeof value === "string" ? JSON.parse(value) : value;

      setContext(json);
    } catch (e) {
      setContextFieldHasError(true);
      setContextFieldHelperText(e.message);
    }
  }
  function applyContext() {
    setContextFieldHasError(false);
    setContextFieldHelperText("");

    setContextField();
  }

  function flagkeyFieldUpdate(event) {
    const value = event.target.value;
    setEnableSubmitButton(value.length > 0);
    setFlagKeyEval(value);
  }

  function onClientSideIDChangeHandler(event) {
    let { value } = event.target;
    let status = value && value.length > 0;

    setEnableSubmitButton(status);
    if (status) {
      setClientSideID(value);
    }
  }

  const handleSendEventsToggle = (event) => {
    const newValue = event.target.checked;
    localStorage.setItem(STORAGE_KEYS.SEND_EVENTS, JSON.stringify(newValue));
    setSendEvents(newValue);
    // Reload the page to reinitialize the LD client with new settings
    window.location.reload();
  };

  return (
    <div className='container'>
      <Grid container rowSpacing={3} columnSpacing={3}>
        <Grid sx={{ mr: 6 }}>
          <Grid>
            <TextField
              autoFocus
              fullWidth
              required
              id='clientSideIDField'
              label='Required'
              variant='standard'
              size='small'
              value={clientSideID}
              onChange={onClientSideIDChangeHandler}
              placeholder='Client ID'
              helperText='Enter client-side SDK key'
            />
          </Grid>
          <Grid>
            <FormControlLabel
              control={
                <Switch
                  checked={sendEvents}
                  onChange={handleSendEventsToggle}
                  name="sendEvents"
                />
              }
              label="Send Events to LaunchDarkly"
            />
          </Grid>
          <Grid>
            <TextField
              autoFocus
              fullWidth
              required={isFlagKeyEnabled}
              label={isFlagKeyEnabled ? "Required" : ""}
              disabled={!isFlagKeyEnabled}
              id='flagKeyField'
              variant='standard'
              size='small'
              value={flagKeyEval}
              onChange={flagkeyFieldUpdate}
              placeholder='Flag Key'
              helperText='Enter flag key for evaluation, empty for All Flags'
            />
          </Grid>
          <Grid>
            <LoadingButton
              id='submitButton'
              size='medium'
              disabled={!enableSubmitButton}
              onClick={handleSubmit}
              loading={loading}
              loadingIndicator='Loading…'
              variant='contained'
              children={loadingButtonChildNode}
            />
          </Grid>
        </Grid>

        <Grid xs={8}>
          <ContextExampleRadioGroup
            singleContext={singleContextEnable}
            purpose={flagPurpose}
            changeHandler={(event) => {
              const isSingleUserFn = (val) => val === "single-user";
              const isMigrationFn = (val) => val === "migration";

              const choice = event.target.value;
              const isSingleUser = isSingleUserFn(choice);
              const isMigration = isMigrationFn(choice);

              const sample = isSingleUser
                ? defaultMultiUser[0]
                : defaultMultiUser;

              setContext(sample);
              if (isSingleUser) {
                setEnableSubmitButton(clientSideID.length > 0);
                setFlagKeyEval("");
              } else {
                setEnableSubmitButton(false);
              }

              const buttonTextEle = isSingleUser
                ? defaultGetFlagsEle
                : defaultFlagKeyEvalEle;
              setLoadingButtonChildNode(buttonTextEle);

              setSingleContextEnable(isSingleUser);
              setIsFlagKeyEnabled(!isSingleUser);
              setFlagPurpose(isMigration ? "migration" : "evaluation");
            }}
          />
          <TextField
            inputProps={{ style: { fontSize: 11, font: "0.9rem monospace" } }}
            id='contextField'
            label='Context'
            margin='dense'
            onChange={(event) => {
              if (!enableApplyButton) {
                setEnableApplyButton(true);
              }
              setContext(event.target.value);
            }}
            onBlur={(_) => {
              setContextField();
            }}
            fullWidth
            multiline
            rows={20}
            error={contextFieldHasError}
            helperText={contextFieldHelperText}
            value={
              typeof context === "string"
                ? context
                : JSON.stringify(context, null, 4)
            }
          />
          <Button
            id='applyContext'
            size='small'
            disabled={!enableApplyButton}
            onClick={applyContext}
            variant='contained'
          >
            <span>Apply Context</span>
          </Button>
        </Grid>
      </Grid>
      <Grid>
        <Box id='tablePlaceholder'></Box>
      </Grid>
    </div>
  );
}

function ContextExampleRadioGroup({ singleContext, changeHandler, purpose }) {
  const choice = singleContext
    ? "single-user"
    : purpose == "migration"
    ? "migration"
    : "multi-user";
  return (
    <FormControl>
      <FormLabel id='demo-row-radio-buttons-group-label'>
        Sample Context
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby='demo-row-radio-buttons-group-label'
        name='controlled-radio-buttons-group'
        value={choice}
        onChange={changeHandler}
      >
        <FormControlLabel
          value='single-user'
          control={<Radio />}
          label='Single Context Instance'
        />
        <FormControlLabel
          value='multi-user'
          control={<Radio />}
          label='Multiple Context Instance'
        />
        <FormControlLabel
          value='migration'
          control={<Radio />}
          label='Migration'
        />
      </RadioGroup>
    </FormControl>
  );
}
