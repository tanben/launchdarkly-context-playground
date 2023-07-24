# LaunchDarkly Target and Percentage Rollout Playground

This is a sample LaunchDarkly application for demonstrating single and multiple Context targeting and percentage rollout.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Requirements
* [LaunchDarkly account](https://launchdarkly.com/start-trial/)
* [Client Side ID](https://docs.launchdarkly.com/home/organize/environments/?q=clientside+id#finding-and-resetting-an-environments-sdk-key-mobile-key-or-client-side-id)
* NodeJS >=16.x
  
## Features
* Display ALL client side enabled feature flag and values for a single [Context](https://docs.launchdarkly.com/home/contexts).
For details on [Targeting with flags](https://docs.launchdarkly.com/home/flags/targeting).



![Single Context Instance](img/singleContext.jpg)


* Evaluate a flag for multiple Context instances, returns flag value for individual Context and [percentage rollout](https://docs.launchdarkly.com/home/flags/rollouts).

![Multi Context Instance](img/multiContextInstance.jpg)
## Sample data
FakerJS was used to generate the sample data which can be found in `./src/data.js`.
You can find the template and data generator script in `generateData.js`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
