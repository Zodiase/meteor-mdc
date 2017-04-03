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

import {
  before,
  after,
  beforeEach,
  afterEach,
  describe,
  it
} from "meteor/practicalmeteor:mocha";
import {
  expect
} from "meteor/practicalmeteor:chai";

import mdcNpmPkgCfg from "./material-components-web.json";

describe('zodiase:mdc-styleless', () => {

  it('should have correct package name', () => {

    import { name } from "meteor/zodiase:mdc-styleless";

    expect(name).to.equal("zodiase:mdc-styleless");

  });

  it('should have correct MDC version', () => {

    import { mdcVersion } from "meteor/zodiase:mdc-styleless";

    expect(mdcVersion).to.equal(mdcNpmPkgCfg.version);

  });

  it('should export an object', () => {

    import mdc from "meteor/zodiase:mdc-styleless";

    expect(mdc).to.an('object');

  });

  describe('component:base', () => {

    import {
      base
    } from "meteor/zodiase:mdc-styleless";

    it('should be an object', () => {

      expect(base).to.an('object');

    });

  }); // component:base

  describe('component:checkbox', () => {

    import {
      checkbox
    } from "meteor/zodiase:mdc-styleless";

    it('should be an object', () => {

      expect(checkbox).to.an('object');

    });

  }); // component:checkbox

  describe('component:iconToggle', () => {

    import {
      iconToggle
    } from "meteor/zodiase:mdc-styleless";

    it('should be an object', () => {

      expect(iconToggle).to.an('object');

    });

  }); // component:iconToggle

  describe('component:radio', () => {

    import {
      radio
    } from "meteor/zodiase:mdc-styleless";

    it('should be an object', () => {

      expect(radio).to.an('object');

    });

  }); // component:radio

  describe('component:ripple', () => {

    import {
      ripple
    } from "meteor/zodiase:mdc-styleless";

    it('should be an object', () => {

      expect(ripple).to.an('object');

    });

  }); // component:ripple

  describe('component:snackbar', () => {

    import {
      snackbar
    } from "meteor/zodiase:mdc-styleless";

    it('should be an object', () => {

      expect(snackbar).to.an('object');

    });

  }); // component:snackbar

  describe('component:drawer', () => {

    import {
      drawer
    } from "meteor/zodiase:mdc-styleless";

    it('should be an object', () => {

      expect(drawer).to.an('object');

    });

  }); // component:drawer

  describe('component:textfield', () => {

    import {
      textfield
    } from "meteor/zodiase:mdc-styleless";

    it('should be an object', () => {

      expect(textfield).to.an('object');

    });

  }); // component:textfield

  describe('component:menu', () => {

    import {
      menu
    } from "meteor/zodiase:mdc-styleless";

    it('should be an object', () => {

      expect(menu).to.an('object');

    });

  }); // component:menu

  describe('component:select', () => {

    import {
      select
    } from "meteor/zodiase:mdc-styleless";

    it('should be an object', () => {

      expect(select).to.an('object');

    });

  }); // component:select

  describe('component:autoInit', () => {

    import {
      autoInit
    } from "meteor/zodiase:mdc-styleless";

    it('should be a function', () => {

      expect(autoInit).to.an('function');

    });

  }); // component:autoInit

});
