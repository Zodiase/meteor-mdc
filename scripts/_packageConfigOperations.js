const fs = require("fs"),
      path = require("path");

module.exports = {
  readPackageConfig: (dirname) => {
    return JSON.parse(fs.readFileSync(path.join(dirname, "package.json"), "utf8"));
  },
  writePackageConfig: (dirname, configObj) => {
    return fs.writeFileSync(path.join(dirname, "package.json"), JSON.stringify(configObj, null, 2), "utf8");
  },
};
