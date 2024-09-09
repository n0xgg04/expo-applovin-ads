// update root level build.gradle file (module:project)
const { withProjectBuildGradle } = require('@expo/config-plugins');

module.exports = function withApplovinProjectGradle(config) {
  return withProjectBuildGradle(config, (config) => {
    config.modResults = addAppLovinMaven(config.modResults);
    config.modResults = addAppLovinClasspath(config.modResults);
    return config;
  });
};

function addAppLovinMaven(gradle) {
  const repositoriesPattern = /repositories\s*{([\s\S]*?)}/;
  const applovinRepository =
    "maven { url 'https://artifacts.applovin.com/android' }";

  if (gradle.contents.includes(applovinRepository)) {
    return gradle;
  }

  gradle.contents = gradle.contents.replace(
    repositoriesPattern,
    (match, group1) => {
      return match.replace(group1, group1 + `    ${applovinRepository}\n`);
    },
  );
  return gradle;
}

function addAppLovinClasspath(gradle) {
  const dependenciesPattern = /dependencies\s*{([\s\S]*?)}/;
  const appLovinClasspath = `classpath "com.applovin.quality:AppLovinQualityServiceGradlePlugin:+"`;

  if (gradle.contents.includes(appLovinClasspath)) {
    return gradle;
  }

  gradle.contents = gradle.contents.replace(
    dependenciesPattern,
    (match, group1) => {
      return match.replace(group1, group1 + `    ${appLovinClasspath}\n`);
    },
  );
  return gradle;
}
