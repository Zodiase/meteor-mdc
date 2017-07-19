# Material Components for Meteor

This repository contains multiple packages that serve differenct purposes:

- `meteor-packages/mdc-styleless` provides only the bundled JS file for all components.
- `meteor-packages/mdc-styleonly` provides only the bundled CSS file for all components.
- `meteor-packages/mdc` simply wraps `mdc-styleless` and `mdc-styleonly` together for a quick-start.
- (not working) `meteor-packages/mdc-sass` provides the source SASS files. You may use these to build your own theme.
- (not ready) `meteor-packages/mdc-auto` provides an auto-init helper that tries to automatically initialize components on the page whenever possible. You may use it for fast prototyping. Please carefully initialize components for production code.

They all use the same Material Components source code (pulled in with NPM).
