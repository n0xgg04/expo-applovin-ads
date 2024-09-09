const { withDangerousMod } = require('@expo/config-plugins')
const fs = require('fs')
const path = require('path')

module.exports = function withAppLovinPodfile(config) {
  return withDangerousMod(config, [
    'ios',
    async (config) => {
      const filePath = path.join(
        config.modRequest.platformProjectRoot,
        'Podfile',
      )

      let contents = fs.readFileSync(filePath, 'utf-8')

      // Add AppLovin SDK and mediation pods to the Podfile
      const appLovinPods = `
  pod 'AppLovinSDK'
end
  `

      // Replace the last 'end' in the Podfile with the AppLovin pods
      contents = contents.replace(/end[\n ]*?$/g, appLovinPods)

      fs.writeFileSync(filePath, contents)

      return config
    },
  ])
}
