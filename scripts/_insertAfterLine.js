const fs = require("fs");

module.exports = (filename, insertBeacon, content) => {
  const fileStr = fs.readFileSync(filename, "utf8");
  const newFileStr = fileStr.replace(`${insertBeacon}
`, `${insertBeacon}
${content}
`);

  if (newFileStr.length > fileStr.length) {
    fs.writeFileSync(filename, newFileStr, "utf8");
  }
};