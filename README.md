# Eight Sleep App

### Preview
<div align="center">
  <video src="preview.mp4" width="400" />
</div>

### Tech Stack

- [Typescript Boilerplate](https://github.com/WrathChaos/react-native-typescript-boilerplate)
- Typescript
- React Native
- React Navigation
- [Victory Native](https://commerce.nearform.com/open-source/victory-native/)
- [Moment.js](https://momentjs.com/)
- [Detox](https://momentjs.com/)
- [Circular Progress Indicator](react-native-circular-progress-indicator)

### Features

- Great looking charts
- Dark / Light mode
- Responsive UI
- Localization
- E2E testing

### Decisions

1. Started with a react native boilerplate to save time and focus on the features. I used it before and I was familiar with it. It has a good structure and it's easy to add new features.
2. Used Victory Native for the charts. It has good documentation and it's easy to use. It has a lot of features, performant and easy to customize.
3. Used Moment.js for date formatting. It's the best library for date formatting.
4. Used Detox for E2E testing. It's a great library for E2E testing and it's easy to use.
5. Used Circular Progress Indicator to display the sleep score. Saw something similar on Eight Sleep and wanted to replicate it.

### Improvements

1. Fetch the data from an API.
2. Adding detailed tests for both the UI and the logic.

### Installation

1. Clone the repository `git clone https://github.com/hknakn/SleepApp.git`
2. Install the dependencies `npm install`
3. Install the pods `npx pod install`
4. Run the app `npx react-native run-ios`
