# LD-React

Simple app from `create-react-app` modified to showcase a red light / green light Feature Flag setup with LaunchDarkly. This can be further enhanced by leveraging [targeting](https://docs.launchdarkly.com/home/flags/targeting-users) and a more compelling feature to easily do A/B testing, send specific users through specific code paths, etc.

![red-light-green-light-example](https://user-images.githubusercontent.com/2894107/167528620-b0a1f997-6f8d-410f-a554-7825a215a4f0.gif)

## How to use

In order to test this repostiory out locally, you can follow the following steps. _Note: This guide assumes you have installed tooling such as `git`, `node`, and know how to clone a repository and make basic edits in code._

1. Clone the repository locally
2. Go to your [LaunchDarkly Feature Flag Dashboard](https://app.launchdarkly.com/default/production/features)
3. Create a new flag named `trafficLight` and enter the following information (see image below for reference)
    - `key`: `trafficLight`
    - Check the box for `SDKs using Client-side ID`
    - `Flag variations`: `Boolean`
    - Variation 1 - `value:` `true`, `Name`: `Green Light`
    - Variation 2 - `value:` `false`, `Name`: `Red Light`
    - Click `Save flag`

<img width="606" alt="create-flag" src="https://user-images.githubusercontent.com/2894107/167529749-0810279b-ccf8-4222-b1b0-91901dce0e46.png">

4. Within your local version of the repository, open the `src/App.js` file and edit the `clientSideID` value from `YOUR-CLIENT-SIDE-ID` to your actual client side SDK ID.
    - From your LaunchDarkly [Account Settings](https://app.launchdarkly.com/settings/projects) page, select the project you created the flag in, then copy the `Client-side ID` and replace the `YOUR-CLIENT-SIDE-ID` string accordingly.

<img width="1102" alt="client-side-id" src="https://user-images.githubusercontent.com/2894107/167530666-39634921-7b34-4644-8f2e-5beffe6dfe99.png">

_Note: The React SDK uses the `Client-side ID`, not the `SDK key` or the `Mobile key`._

5. Ensure your terminal is in the root directory of the project and run `npm install` to install the repository dependencies, including the `LaunchDarkly React SDK`.
6. Ensure your changes are saved, then run `npm start`
7. Open your browser to [localhost:3000](http://localhost:3000/)
8. You should notice the text stating "The flag is off" and a red circle below.
9. From your [LaunchDarkly Feature Flag Dashboard](https://app.launchdarkly.com/default/production/features) toggle the flag on and save your changes in the pop-up that appears. Note the app now has the text "The flag is on" and a green circle below.
