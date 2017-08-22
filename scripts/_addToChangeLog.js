const insertAfterLine = require("./_insertAfterLine");

module.exports = (filename, lines) => {
  const actualLines = lines.map((s) => `    * ${s}`);

  insertAfterLine(filename, "* vNEXT", actualLines.join("\n"));
};
