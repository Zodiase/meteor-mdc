// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

Tinytest.add('mdc - package name', function (test) {

  // Verify package name.
  import { name } from "meteor/zodiase:mdc-sass";

  test.equal(name, "zodiase:mdc-sass");

});
