# Material Components for Meteor

This package provides the distribution js and css bundle files from MDC.

It is identical to using `zodiase:mdc-styleless` and `zodiase:mdc-styleonly` at the same time.

If you need to use your own styling, use `zodiase:mdc-styleless` only.

**This is still a work in progress (as the version indicates), so please stay tuned for updates.**

## Install

```Bash
$ meteor add zodiase:mdc
```

## Get Started

Importing the whole bundle:
```JavaScript
import mdc from 'meteor/zodiase:mdc';
```

Or importing individual components:
```JavaScript
import {checkbox as mdcCheckbox, ripple as mdcRipple} from 'meteor/zodiase:mdc';
```

Please check out [the MDC demo repo](https://github.com/Zodiase/Meteor-Tests/tree/mdc-demo) for examples.

Please see [the official Material Components repo](https://github.com/material-components/material-components-web) for more instructions on how to use the library.
