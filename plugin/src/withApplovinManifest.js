const { withAndroidManifest } = require("@expo/config-plugins");

module.exports = function withApplovinManifest(config) {
  return withAndroidManifest(config, async (config) => {
    let androidManifest = config.modResults.manifest;

    androidManifest["uses-permission"] = [
      ...androidManifest["uses-permission"],
      {
        $: {
          "android:name": "com.google.android.gms.permission.AD_ID",
        },
      },
    ];

    return config;
  });
};
