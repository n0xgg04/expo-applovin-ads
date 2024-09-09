# Applovin Ads For Expo

### I. Installation
```bash
npm install expo-applovin-ads
```

or Yarn:

```bash
yarn add expo-applovin-ads
```

### II. Add to ``app.json``
Add to your ``app.json``:
```json
  "plugins": [
    ...other plugins,
    [
        "expo-applovin-ads/expo",
        {
          "apiKey": "YOUR_API_KEY_HERE"
        }
    ]
]
```
### III. Add script to ``package.json``
```json
    "eas-build-post-install": "node ./node_modules/expo-applovin-ads/scripts/eas-build-post-install-script.js",
```
