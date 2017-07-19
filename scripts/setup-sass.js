#!/usr/bin/env node

var fs = require("fs");
var path = require("path");
var _ = require("lodash");
var async = require("async");
var glob = require("glob");
var rimraf = require("rimraf");
var mkdirp = require("mkdirp");
var replaceStream = require('replacestream');

var ROOT_DIR = path.join(__dirname, ".."),
    MDC_COMPONENT_DIR = path.join(ROOT_DIR, "node_modules/@material"),
    MDC_WEB_DIR = path.join(ROOT_DIR, "node_modules/material-components-web"),
    MDC_METEOR_SASS_DIR = path.join(ROOT_DIR, "meteor-packages/mdc-sass"),
    MDC_METEOR_PKG_FILE = path.join(MDC_METEOR_SASS_DIR, "package.json"),
    MDC_METEOR_PKG_DOC = require(MDC_METEOR_PKG_FILE);

// Clean up the meteor package directory.
(function () {
  var packageFiles = MDC_METEOR_PKG_DOC._pkgfiles;

  glob.sync("*", {
    cwd: MDC_METEOR_SASS_DIR,
    root: ROOT_DIR
  })
  .filter(function (filename) {
    return packageFiles.indexOf(filename) === -1;
  })
  .forEach(function (filename) {
    var absUri = path.join(MDC_METEOR_SASS_DIR, filename);
    rimraf.sync(absUri, {
      glob: false
    });
  });
})();

// Prepare a list of transformation pairs (source to destination).
var files = glob.sync("**/*.scss", {
  cwd: MDC_COMPONENT_DIR,
  root: ROOT_DIR,
  ignore: [
    "**/node_modules/**"
  ]
})
.map(function (filename) {
  return [
    path.join(MDC_COMPONENT_DIR, filename),
    path.join(MDC_METEOR_SASS_DIR, filename)
  ];
})
.concat([
  [
    path.join(MDC_WEB_DIR, "material-components-web.scss"),
    path.join(MDC_METEOR_SASS_DIR, "bundle.scss")
  ]
]);

// Copy the source files over while performing transformations on them.
async.each(files, function (pair, next) {
  var src = pair[0],
      dest = pair[1];

  mkdirp.sync(path.dirname(dest));
  var writer = fs.createWriteStream(dest);
  writer.on('finish', next);

  fs.createReadStream(src)
  .pipe(replaceStream('@import "@material/', '@import "{zodiase:mdc-sass}/'))
  .pipe(writer);
}, function () {
  var finalFiles = files.map(function (pair) {
    var dest = pair[1];

    return path.relative(MDC_METEOR_SASS_DIR, dest);
  });

  var meteorPackageDocument = _.clone(MDC_METEOR_PKG_DOC);
  meteorPackageDocument._sassFiles = finalFiles;

  // Save the file list.
  var docString = JSON.stringify(meteorPackageDocument, null, 2);
  fs.writeFileSync(MDC_METEOR_PKG_FILE, docString, {
    encoding: 'utf8'
  });
});
