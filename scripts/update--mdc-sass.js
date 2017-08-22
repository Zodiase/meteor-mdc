#!/usr/bin/env ../node_modules/.bin/babel-node

const fs = require("fs"),
      path = require("path"),
      _ = require("lodash"),
      async = require("async"),
      glob = require("glob"),
      rimraf = require("rimraf"),
      mkdirp = require("mkdirp"),
      replaceStream = require("replacestream");

const ROOT_DIR = path.join(__dirname, ".."),
      MDC_COMPONENT_DIR = path.join(ROOT_DIR, "node_modules/@material"),
      MDC_WEB_DIR = path.join(ROOT_DIR, "node_modules/material-components-web"),
      MDC_METEOR_SASS_DIR = path.join(ROOT_DIR, "meteor-packages/mdc-sass"),
      MDC_METEOR_PKG_FILE = path.join(MDC_METEOR_SASS_DIR, "package.json"),
      MDC_METEOR_PKG_DOC = require(MDC_METEOR_PKG_FILE);

// Clean up the meteor package directory.
{
  let packageFiles = MDC_METEOR_PKG_DOC._pkgfiles;

  glob.sync("*", {
    cwd: MDC_METEOR_SASS_DIR,
    root: ROOT_DIR
  })
  .filter((filename) => packageFiles.indexOf(filename) === -1)
  .forEach((filename) => {
    const absUri = path.join(MDC_METEOR_SASS_DIR, filename);
    rimraf.sync(absUri, {
      glob: false
    });
  });
}

// Prepare a list of transformation pairs (source to destination).
const files = glob.sync("**/*.scss", {
  cwd: MDC_COMPONENT_DIR,
  root: ROOT_DIR,
  ignore: [
    "**/node_modules/**"
  ]
})
.map((filename) => [ path.join(MDC_COMPONENT_DIR, filename), path.join(MDC_METEOR_SASS_DIR, filename) ])
.concat([
  [ path.join(MDC_WEB_DIR, "material-components-web.scss"), path.join(MDC_METEOR_SASS_DIR, "bundle.scss") ],
]);

// Copy the source files over while performing transformations on them.
async.each(files, ([src, dest], next) => {
  mkdirp.sync(path.dirname(dest));
  const writer = fs.createWriteStream(dest);
  writer.on("finish", next);

  fs.createReadStream(src)
  .pipe(replaceStream("@import \"@material/", "@import \"{zodiase:mdc-sass}/"))
  .pipe(writer);
}, () => {
  const finalFiles = files.map(([src, dest]) => path.relative(MDC_METEOR_SASS_DIR, dest));
  const meteorPackageDocument = {
    ...MDC_METEOR_PKG_DOC,
    _sassFiles: finalFiles,
  };

  // Save the file list.
  const docString = JSON.stringify(meteorPackageDocument, null, 2);
  fs.writeFileSync(MDC_METEOR_PKG_FILE, docString, "utf8");
});
