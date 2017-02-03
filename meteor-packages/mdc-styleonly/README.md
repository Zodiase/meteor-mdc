# Material Components for Meteor (stylesheet only)

This package provides the bundled stylesheet provided by the Material Components NPM package.

## Install

```Bash
$ meteor add zodiase:mdc-styleonly
```

## Get Started

In order to allow developer users to change themes with CSS Variables [as described here](https://github.com/material-components/material-components-web/blob/master/docs/getting-started.md#changing-the-theme), the stylesheet is not eagerly loaded.

To load the stylesheet in JavaScript:

```JavaScript
import 'meteor/zodiase:mdc-styleonly/bundle.css';
```

To load the stylesheet in HTML:

```HTML
<!-- Be aware of the absolute path if your app is running in a sub-directory. -->
<link href="/packages/zodiase_mdc-styleonly/bundle.css" rel="stylesheet">
```

## Version

The version of this package should and will match the corresponding NPM package it serves. But since now I'm still figuring things out, it will stay at `0.0.*`.

## Note

From my experience developing my `zodiase:mdl` package, I decided to serve only the minimal resources in this package.
I could have put all the individual component stylesheets in this package as well but that would bloat the built app bundle too much for users who don't need those files.
So my plan is to have individual packages for each component. This should happen later when the Material Components package reaches a stable version.

Or anyone could just work with the NPM packages directly. This package is only for those who enjoy the convenience provided by the Meteor package system.

## License

Licensed under Apache-2.0. Copyright 2017 Xingchen Hong.
