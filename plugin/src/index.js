const withApplovinProjectGradle = require("./withApplovinBuildGradle");
const withApplovinGradle = require("./withApplovinGradle");
const withApplovinManifest = require("./withApplovinManifest");
const withAppLovinPodfile = require("./withDangerousMod");

module.exports = function withApplovinPlugin(config, data) {
  return withApplovinProjectGradle(
    withAppLovinPodfile(withApplovinManifest(withApplovinGradle(config, data))),
  );
};
