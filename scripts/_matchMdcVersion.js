const fs = require("fs"),
      path = require("path"),
      addToChangeLog = require("./_addToChangeLog");

const ROOT_DIR = require("./_rootDir"),
      ROOT_MDC_VERSION = require("./_rootMdcVersion");

module.exports = (pkgName) => {
  if (!ROOT_MDC_VERSION) {
    console.log("Unsupported version format in root package config.");
    return;
  }

  const meteorPackageDir = path.join(ROOT_DIR, "meteor-packages", pkgName),
        meteorPackageFile = path.join(meteorPackageDir, "package.json"),
        meteorPackageDoc = require(meteorPackageFile),
        meteorPackageMdcVersion = meteorPackageDoc.mdcVersion;

  console.log(`Root MDC version: ${ROOT_MDC_VERSION}`);
  console.log(`Package MDC version: ${meteorPackageMdcVersion}`);

  if (meteorPackageMdcVersion === ROOT_MDC_VERSION) {
    console.log("Identical version. No need to update.");
    return;
  }

  // Update MDC version.
  const newPackageDoc = {
    ...meteorPackageDoc,
    mdcVersion: ROOT_MDC_VERSION,
  };
  const newPackageDocJson = JSON.stringify(newPackageDoc, null, 2);
  fs.writeFileSync(meteorPackageFile, newPackageDocJson, "utf8");

  // Update Changelog file.
  const changelogFile = path.join(meteorPackageDir, "CHANGELOG.md");
  addToChangeLog(changelogFile, [
    `Update to MDC ${ROOT_MDC_VERSION}.`
  ]);

  console.log("MDC version updated.");
};