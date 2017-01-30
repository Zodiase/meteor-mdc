var config = {
  "name": "zodiase:mdc-sass",
  "version": "0.0.0_3",
  "summary": "Material Components for Meteor (SASS only)",
  "git": "https://github.com/Zodiase/meteor-mdc.git",
  "meteorRelease": "1.4.2.3",
  "scssVersion": '3.13.0',
  "sassFiles": ["./bundle.scss","./animation/_functions.scss","./animation/_mixins.scss","./animation/_variables.scss","./animation/mdc-animation.scss","./button/mdc-button.scss","./card/mdc-card.scss","./checkbox/_keyframes.scss","./checkbox/_variables.scss","./checkbox/mdc-checkbox.scss","./drawer/_mixins.scss","./drawer/mdc-drawer.scss","./drawer/permanent/mdc-permanent-drawer.scss","./drawer/temporary/mdc-temporary-drawer.scss","./elevation/_mixins.scss","./elevation/_variables.scss","./elevation/mdc-elevation.scss","./fab/mdc-fab.scss","./form-field/mdc-form-field.scss","./icon-toggle/mdc-icon-toggle.scss","./list/mdc-list.scss","./menu/mdc-menu.scss","./menu/simple/mdc-simple-menu.scss","./radio/mdc-radio.scss","./ripple/_keyframes.scss","./ripple/_mixins.scss","./ripple/_variables.scss","./ripple/mdc-ripple.scss","./rtl/_mixins.scss","./select/mdc-select.scss","./snackbar/_variables.scss","./snackbar/mdc-snackbar.scss","./textfield/mdc-textfield.scss","./theme/_constants.scss","./theme/_functions.scss","./theme/_mixins.scss","./theme/_variables.scss","./theme/mdc-theme.scss","./typography/_mixins.scss","./typography/_variables.scss","./typography/mdc-typography.scss"] // Generated
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
  api.use('fourseven:scss@' + config.scssVersion);

  // Add sass files to be imported by users.
  // Has to be added to `client` platform or `fourseven:scss` won't see them.
  api.addFiles(config.sassFiles, 'client', {isImport: true});

  api.mainModule('main.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use(config.name);
  api.mainModule('main-tests.js', 'client');
});
