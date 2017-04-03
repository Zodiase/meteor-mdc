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

  it('should have correct MDC version', () => {

    import { mdcVersion } from "meteor/zodiase:mdc";

    expect(mdcVersion).to.equal(mdcNpmPkgCfg.version);

  });

});
