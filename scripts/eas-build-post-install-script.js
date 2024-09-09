/* eslint-disable no-inner-declarations */
const path = require("path");
const fs = require("fs");
const { exec } = require("child_process");

const dir = path.join(__dirname, "../");
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
  const newPath = path.join(process.cwd(), "ios", scriptFileName);
  fs.copyFileSync(path.join(dir, sourcePath, scriptFileName), newPath);

  const exec = require("child_process").exec;

  const child = exec(`ruby ${newPath}`);

  child.stdout.pipe(process.stdout);
  child.stderr.pipe(process.stderr);

  function callback(e) {
    fs.unlinkSync(newPath);
    console.log("EXIT", e);
    process.exit();
  }

  child.on("exit", callback);
  child.on("close", callback);
  child.on("error", callback);
}
