const path = require("path"),
      semver = require("semver");

const ROOT_DIR = require("./_rootDir"),
      MDC_WEB_DIR = path.join(ROOT_DIR, "node_modules/material-components-web");

try {
  const mdcWebPkgDoc = require(path.join(MDC_WEB_DIR, "package.json"));
  module.exports = mdcWebPkgDoc.version;
} catch (error) {
  console.error("Failed to read the version of the installed MDC. Are you sure it’s installed?");
  throw error;
}
