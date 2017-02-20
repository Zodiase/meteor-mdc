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

// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";
import mdcNpmPkgCfg from "./material-components-web.json";

Tinytest.add('zodiase:mdc-styleless - package name', function (test) {

  // Verify package name.
  import { name } from "meteor/zodiase:mdc-styleless";

  test.equal(name, "zodiase:mdc-styleless");

});

Tinytest.add('zodiase:mdc-styleless - material-components-web package version', function (test) {

  // The version of the `material-components-web` must match the intended mdc version.
  import { mdcVersion } from "meteor/zodiase:mdc-styleless";

  test.equal(mdcVersion, mdcNpmPkgCfg.version);

});

Tinytest.add('zodiase:mdc-styleless - bundle export', function (test) {

  // Verify package bundle.
  import mdc from "meteor/zodiase:mdc-styleless";

  test.equal(typeof mdc, "object");

});

Tinytest.add('zodiase:mdc-styleless - component export', function (test) {

  // Verify each component.
  import {
    base,
    checkbox,
    iconToggle,
    radio,
    ripple,
    snackbar,
    drawer,
    textfield,
    menu,
    select,
    autoInit
  } from "meteor/zodiase:mdc-styleless";

  test.equal(typeof base, "object");
  test.equal(typeof checkbox, "object");
  test.equal(typeof iconToggle, "object");
  test.equal(typeof radio, "object");
  test.equal(typeof ripple, "object");
  test.equal(typeof snackbar, "object");
  test.equal(typeof drawer, "object");
  test.equal(typeof textfield, "object");
  test.equal(typeof menu, "object");
  test.equal(typeof select, "object");
  test.equal(typeof autoInit, "function");

});
