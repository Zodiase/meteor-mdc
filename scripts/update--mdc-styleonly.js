#!/usr/bin/env node

const fs = require("fs"),
      path = require("path"),
      addToChangeLog = require("./_addToChangeLog");

const ROOT_DIR = require("./_rootDir"),
      ROOT_MDC_VERSION = require("./_rootMdcVersion"),

      MDC_METEOR_CSS_DIR = path.join(ROOT_DIR, "meteor-packages/mdc-styleonly"),
      MDC_METEOR_PKG_FILE = path.join(MDC_METEOR_CSS_DIR, "package.json"),
      MDC_METEOR_PKG_DOC = require(MDC_METEOR_PKG_FILE),
      METEOR_PKG_MDC_VERSION = MDC_METEOR_PKG_DOC.mdcVersion;

if (!ROOT_MDC_VERSION) {
  console.log("Unsupported version format in root package config.");
  return;
}

console.log(`Root MDC version: ${ROOT_MDC_VERSION}`);
console.log(`Package MDC version: ${METEOR_PKG_MDC_VERSION}`);

if (METEOR_PKG_MDC_VERSION === ROOT_MDC_VERSION) {
  console.log("Identical version. No need to update.");
  return;
}

// Update MDC version.
const newPackageDoc = {
  ...MDC_METEOR_PKG_DOC,
  mdcVersion: ROOT_MDC_VERSION,
};
const newPackageDocJson = JSON.stringify(newPackageDoc, null, 2);
fs.writeFileSync(MDC_METEOR_PKG_FILE, newPackageDocJson, "utf8");

// Update Changelog file.
const changelogFile = path.join(MDC_METEOR_CSS_DIR, "CHANGELOG.md");
addToChangeLog(changelogFile, [
  `Update to MDC ${ROOT_MDC_VERSION}.`
]);

console.log("MDC version updated.");
