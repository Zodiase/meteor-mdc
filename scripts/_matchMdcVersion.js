const fs = require("fs"),
      path = require("path"),
      semver = require('semver'),
      addToChangeLog = require("./_addToChangeLog");

const ROOT_DIR = require("./_rootDir"),
      ROOT_MDC_VERSION = require("./_rootMdcVersion"),
      INSTALLED_MDC_VERSION = require("./_installedMdcVersion");

/**
 * Updates the MDC version of the specified package to match the one in root.
 * @param  {string} pkgName Name of the package.
 * @return {boolean}        Whether the update is performed.
 */
module.exports = (pkgName) => {
  console.log(`Root MDC version:      ${ROOT_MDC_VERSION}`);

  if (semver.lt(INSTALLED_MDC_VERSION, ROOT_MDC_VERSION)) {
    console.error(`Installed MDC version: ${INSTALLED_MDC_VERSION} \u2717`);
    throw new Error("Please update the installed MDC.");
  } else if (!semver.eq(INSTALLED_MDC_VERSION, ROOT_MDC_VERSION)) {
    console.error(`Installed MDC version: ${INSTALLED_MDC_VERSION} \u2717`);
    throw new Error("Please match the version of the installed MDC to the one expected by root.");
  } else {
    console.log(`Installed MDC version: ${INSTALLED_MDC_VERSION} \u2713`);
  }

  const meteorPackageDir = path.join(ROOT_DIR, "meteor-packages", pkgName),
        meteorPackageFile = path.join(meteorPackageDir, "package.json"),
        meteorPackageDoc = require(meteorPackageFile),
        meteorPackageMdcVersion = meteorPackageDoc.mdcVersion;

  if (meteorPackageMdcVersion === ROOT_MDC_VERSION) {
    console.log(`Package MDC version:   ${meteorPackageMdcVersion} \u2713`);
    console.log("Identical version. No need to update.");
    return false;
  } else {
    console.log(`Package MDC version:   ${meteorPackageMdcVersion} \u2717`);
    console.log("Updating...");
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