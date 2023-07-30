# LaunchDarkly Context Playground

This application lets you test your 
This is a  LaunchDarkly application for demonstrating single and multiple Context targeting and percentage rollout.


## Requirements
* [LaunchDarkly account](https://launchdarkly.com/start-trial/)
* [Client Side ID](https://docs.launchdarkly.com/home/organize/environments/?q=clientside+id#finding-and-resetting-an-environments-sdk-key-mobile-key-or-client-side-id)
* NodeJS >=18.x
* React 18.x
* LaunchDarkly React Client SDK >= 3.x

## Instalation
1. Clone this repo.
2. Install dependencies with command:
    ```
    npm install
    ```


## Running the app
#### `IMPORTANT:`
> Use a sandbox Project and Environment before running this application to prevent mixing live data with test data. 


`npm start`\
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Sample data
Sample data was generated using *FakerJS* and can be found in `./src/data.js`.\

To generate sample data using a different/custom schema update and run the script `generateData.js`.

## Features

* Display ALL client side enabled feature flag and values for a [Context](https://docs.launchdarkly.com/home/contexts). To learn more read [Targeting with flags](https://docs.launchdarkly.com/home/flags/targeting) for details.
![Single Context Instance](img/singleContext.jpg)


* Evaluate a flag for multiple Context instances.
Return flag value for multiple contexts and validate rollout strategy](https://docs.launchdarkly.com/home/flags/rollouts).

![Multi Context Instance](img/multiContextInstance.jpg)
