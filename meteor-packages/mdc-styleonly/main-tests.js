// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

Tinytest.add('mdc - package name', function (test) {

  // Verify package name.
  import { name } from "meteor/zodiase:mdc-styleonly";

  test.equal(name, "zodiase:mdc-styleonly");

});
