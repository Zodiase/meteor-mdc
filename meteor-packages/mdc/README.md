# Material Components for Meteor

This package provides the bundled JS and CSS files from MDC.

It is identical to using `zodiase:mdc-styleless` and `zodiase:mdc-styleonly` at the same time.

If you need to use your own styling, use `zodiase:mdc-styleless` only. You may also find useful resources in `zodiase:mdc-sass`.

**Requires Meteor@1.3.3+ (ecmascript@0.4.4+)**

## Install

```Bash
$ meteor add zodiase:mdc
```

## Get Started

Importing the entire JS bundle:

```JavaScript
import mdc from 'meteor/zodiase:mdc';
```

Or importing individual JS components:

```JavaScript
import {checkbox as mdcCheckbox, ripple as mdcRipple} from 'meteor/zodiase:mdc';
```

Importing the stylesheet in JavaScript:

```JavaScript
import 'meteor/zodiase:mdc/stylesheet';
```

Please check out [the MDC demo repo](https://github.com/Zodiase/Meteor-Tests/tree/mdc-demo) for examples.

Please see [the official Material Components repo](https://github.com/material-components/material-components-web) for more instructions on how to use the library.

## Version

The version of this package should and will match the corresponding NPM package it serves. But since now I'm still figuring things out, it will stay at `0.0.*`.

## License

Licensed under Apache-2.0. Copyright 2017 Xingchen Hong.
