import axios from "axios";
import PromisePool from "es6-promise-pool";

async function customAllFlagEval({ contexts = [], clientSideID = "" }) {
  const axiosConfig = {
    baseURL: "https://clientsdk.launchdarkly.com/sdk/evalx/",
    params: {
      withReason: true,
    },
  };
  const fetchFlags = function* (pcontexts) {
    for (const context of pcontexts) {
      yield (async () => {
        const contextHash = btoa(JSON.stringify(context));
        const evalUrl = `/${clientSideID}/contexts/${contextHash}`;
        const response = await axios.get(evalUrl, axiosConfig);
        return Promise.resolve({ context, response });
      })(contexts);
    }
  };
  const results = [];

  const pool = new PromisePool(fetchFlags(contexts), 10);
  pool.addEventListener("fulfilled", (event) => {
    const { context, response } = event.data.result;
    if (response.status > 200) {
      console.error(
        `response=[${response.status}] context=${JSON.stringify(context)}`
      );
    }
    results.push({ context, flags: response.data });
  });

  return pool.start().then((_) => Promise.resolve(results));
}

async function customEvalContext(ldClient, userContexts, flagKeyFilter) {
  const fetchFlags = function* (pcontexts, pfilter) {
    for (const context of pcontexts) {
      yield (async () => {
        await ldClient.identify(context);
        const response = ldClient.variationDetail(pfilter.trim());
        return Promise.resolve({ context, response });
      })();
    }
  };
  const results = [];

  const pool = new PromisePool(fetchFlags(userContexts, flagKeyFilter), 10);
  pool.addEventListener("fulfilled", (event) => {
    const { context, response } = event.data.result;
    results.push({ context, response });
  });

  return pool.start().then(() => {
    return Promise.resolve(results);
  });
}

export { customAllFlagEval, customEvalContext };
