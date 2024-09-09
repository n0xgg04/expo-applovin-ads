/* eslint-disable no-inner-declarations */
const path = require("path");
const fs = require("fs");

if (process.platform !== "darwin")
  console.log(
    "eas-build-post-install-script: no MAC",
    process.cwd(),
    process.platform,
  );
else {
  console.log("RUNNING eas-build-post-install-script!");

  const sourcePath = "./plugin/src";

  const scriptFileName = "AppLovinQualityServiceSetup-ios.rb";

  // We copy the file to the project root
  const newPath = path.join(process.cwd(), scriptFileName);
  fs.copyFileSync(
    path.join(process.cwd(), sourcePath, scriptFileName),
    newPath,
  );

  const exec = require("child_process").exec;

  const child = exec(`ruby ./${scriptFileName}`);

  child.stdout.pipe(process.stdout);

  function callback() {
    fs.unlinkSync(newPath); // We delete it at the end (unnecessary)
    process.exit();
  }

  child.on("exit", callback);
  child.on("close", callback);
  child.on("error", callback);
}
