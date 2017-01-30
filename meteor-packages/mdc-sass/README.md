# Material Components for Meteor (SASS files only)

This package only contains the sass files.

## Install

```Bash
$ meteor add zodiase:mdc-sass
```

## Why need this package?

The Material Components (Web) package is using import paths that look like `@material/*.*` in SASS files. This causes problem when used in Meteor.

Suppose there is a file `/client/main.scss` that looks like:

```SASS
@import '{}/node_modules/material-components-web/material-components-web.scss';
```

Then the `material-components-web.scss` being imported needs to import `@material/animation/mdc-animation`, which gets resolved into `{}/node_modules/material-components-web/@material/animation/mdc-animation`, which is incorrect and does not exist.

So the workaround here is to replace all occurrences of `@material/` with `{zodiase:mdc-sass}/` so the importing can be done properly.
