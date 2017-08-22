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

describe('zodiase:mdc', () => {

  it('should have correct package name', () => {

    import { name } from "meteor/zodiase:mdc";

    expect(name).to.equal("zodiase:mdc");

  });

  it('should load both mdc-styleless and mdc-styleonly with matching MDC versions', () => {

    import {
      name as name_styleless,
      mdcVersion as mdcVersion_styleless
    } from "meteor/zodiase:mdc-styleless";
    import {
      name as name_styleonly,
      mdcVersion as mdcVersion_styleonly
    } from "meteor/zodiase:mdc-styleonly";

    expect(name_styleless).to.equal("zodiase:mdc-styleless");
    expect(name_styleonly).to.equal("zodiase:mdc-styleonly");
    expect(mdcVersion_styleless).to.equal(mdcVersion_styleonly);

  });

});
