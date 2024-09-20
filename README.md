# Applovin Ads For Expo

<img src="https://developers.applovin.com/og.jpg"/>

> Use Applovin Plugin for Expo (without prebuild)

> See example at [https://github.com/n0xgg04/expo-applovin-ads-example](https://github.com/n0xgg04/expo-applovin-ads-example)

### I. Installation
```bash
npm install expo-applovin-ads react-native-applovin-max
```

or Yarn:

```bash
yarn add expo-applovin-ads react-native-applovin-max
```

### II. Add to ``app.json`` 
Add to your ``app.json``:
```json
  "plugins": [
    ...other plugins,
    [
        "expo-applovin-ads/expo",
        {
          "apiKey": "YOUR_AD_REVIEW_KEY_HERE"
        }
    ]
]
```
Get keys on Applovin Account Tab. [Click here](https://dash.applovin.com/o/account?r=3#keys)
### III. Add script to ``package.json`` (Optional: Do this if you application supports iOS)
- Hook for EAS Build iOS
```json
    "eas-build-post-install": "node ./node_modules/expo-applovin-ads/scripts/eas-build-post-install-script.js",
```

Now, you have to build a development build and install it on a device before run dev client

```bash
eas build --platform android --clean
```

If you don't know how to use EAS? Read on Expo Docs

### IV. Integration
#### Add to root component:
```ts
import {AppLovinMAX, Configuration } from 'react-native-applovin-max';

AppLovinMAX.initialize("YOUR_SDK_KEY_HERE").then((conf: Configuration) => {
}).catch();
```


[See more](https://developers.applovin.com/en/max/react-native/overview/integration/)
