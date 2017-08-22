const path = require("path"),
      semver = require("semver"),
      {
        readPackageConfig,
        writePackageConfig,
      } = require("./_packageConfigOperations");

module.exports = () => {
  const ROOT_DIR = path.join(__dirname, ".."),

        ROOT_NPM_PKG_DOC = readPackageConfig(ROOT_DIR),
        ROOT_MDC_VERSION_RAW = ROOT_NPM_PKG_DOC.dependencies["material-components-web"],
        ROOT_MDC_VERSION = ((rawStr) => {
          var head = rawStr[0],
              tail = rawStr.substr(1);
          if (head === "^" && semver.valid(tail)) {
            // Valid caret syntax.
            return semver.clean(tail);
          } else {
            // Unsupported stuff.
            throw new Error("Unable to parse the MDC version in the root package config.");
          }
        })(ROOT_MDC_VERSION_RAW),

        MDC_WEB_DIR = path.join(ROOT_DIR, "node_modules/material-components-web"),
        MDC_WEB_VERSION = (() => {
          try {
            const mdcWebPkgDoc = readPackageConfig(MDC_WEB_DIR);
            return mdcWebPkgDoc.version;
          } catch (error) {
            console.error("Failed to read the version of the installed MDC. Are you sure it’s installed?");
            return null;
          }
        })(),

        MDC_COMPONENT_DIR = path.join(ROOT_DIR, "node_modules/@material");

  return {
    ROOT_DIR,
    ROOT_MDC_VERSION,
    MDC_WEB_DIR,
    MDC_WEB_VERSION,
    MDC_COMPONENT_DIR,
  };
};
