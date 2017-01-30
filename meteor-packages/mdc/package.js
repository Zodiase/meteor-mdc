var config = {
  "name": "zodiase:mdc",
  "version": "0.0.1",
  "summary": "Material Components for Meteor",
  "git": "https://github.com/Zodiase/meteor-mdc.git",
  "jsVersion": "0.0.1",
  "cssVersion": "0.0.1",
  "meteorRelease": "1.4.2.3"
};

Package.describe({
  name: config.name,
  version: config.version,
  // Brief, one-line summary of the package.
  summary: config.summary,
  // URL to the Git repository containing the source code for this package.
  git: config.git,
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom(config.meteorRelease);
  api.use('ecmascript');
  api.use('zodiase:mdc-styleless@=' + config.jsVersion);
  api.use('zodiase:mdc-styleonly@=' + config.cssVersion);

  api.mainModule('main.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use(config.name);
  api.mainModule('main-tests.js', 'client');
});
