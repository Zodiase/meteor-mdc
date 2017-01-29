// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

Tinytest.add('mdc - package name', function (test) {

  // Verify package name.
  import { name } from "meteor/zodiase:mdc-styleless";

  test.equal(name, "zodiase:mdc-styleless");

});

Tinytest.add('mdc - bundle export', function (test) {

  // Verify package bundle.
  import mdc from "meteor/zodiase:mdc-styleless";

  test.equal(typeof mdc, "object");

});

Tinytest.add('mdc - component export', function (test) {

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
