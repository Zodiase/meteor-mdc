const fs = require("fs"),
      path = require("path"),
      addToChangeLog = require("./_addToChangeLog");

const ROOT_DIR = require("./_rootDir"),
      ROOT_MDC_VERSION = require("./_rootMdcVersion");

/**
 * Updates the MDC version of the specified package to match the one in root.
 * @param  {string} pkgName Name of the package.
 * @return {boolean}        Whether the update is performed.
 */
module.exports = (pkgName) => {
  if (!ROOT_MDC_VERSION) {
    throw new Error("Unable to get MDC version from root package config.");
  }

  const meteorPackageDir = path.join(ROOT_DIR, "meteor-packages", pkgName),
        meteorPackageFile = path.join(meteorPackageDir, "package.json"),
        meteorPackageDoc = require(meteorPackageFile),
        meteorPackageMdcVersion = meteorPackageDoc.mdcVersion;

  console.log(`Root MDC version: ${ROOT_MDC_VERSION}`);
  console.log(`Package MDC version: ${meteorPackageMdcVersion}`);

  if (meteorPackageMdcVersion === ROOT_MDC_VERSION) {
    console.log("Identical version. No need to update.");
    return false;
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

  console.log(`Package MDC version updated to ${ROOT_MDC_VERSION}.`);
  return true;
};