const path = require("path"),
      semver = require("semver");

const ROOT_DIR = require("./_rootDir"),
      // Read in the root package.json.
      ROOT_NPM_PKG_DOC = require(path.join(ROOT_DIR, "package.json")),
      ROOT_MDC_VERSION_RAW = ROOT_NPM_PKG_DOC.dependencies["material-components-web"],
      ROOT_MDC_VERSION = ((rawStr) => {
        var head = rawStr[0],
            tail = rawStr.substr(1);
        if (head === "^" && semver.valid(tail)) {
          // Valid caret syntax.
          return semver.clean(tail);
        } else {
          // Unsupported stuff.
          return null;
        }
      })(ROOT_MDC_VERSION_RAW);

module.exports = ROOT_MDC_VERSION;
