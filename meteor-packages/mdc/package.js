//  Copyright 2017 Xingchen Hong
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.

var loadJSON = function (fs) {
  return function (uri) {
    return JSON.parse(fs.readFileSync(uri));
  };
}(Npm.require('fs'));

var config = loadJSON('./package.json');

Package.describe({
  name: config.meteorPackageName,
  version: config.version,
  // Brief, one-line summary of the package.
  summary: config.description,
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

  api.addAssets([
    'stylesheet.js'
  ], 'client');

  api.mainModule('main.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use(config.meteorPackageName);

  api.mainModule('main-tests.js', 'client');
});
