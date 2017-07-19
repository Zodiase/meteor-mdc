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

describe('zodiase:mdc-styleonly', () => {

  it('should have correct package name', () => {

    import { name } from "meteor/zodiase:mdc-styleonly";

    expect(name).to.equal("zodiase:mdc-styleonly");

  });

  it('should have correct MDC version', () => {

    import { mdcVersion } from "meteor/zodiase:mdc-styleonly";

    expect(mdcVersion).to.equal(mdcNpmPkgCfg.version);

  });

  describe('component styles', () => {

    let containerElement = document.createElement('div');

    before(() => {
      document.body.appendChild(containerElement);
    });
    after(() => {
      document.body.removeChild(containerElement);
    });

    beforeEach(() => {
      // Clean up the container.
      while (containerElement.lastChild) {
        containerElement.removeChild(containerElement.lastChild);
      }
    });

    it('should not have mdc-button before importing', () => {

      const buttonElement = document.createElement('button');
      buttonElement.className = 'mdc-button';
      containerElement.appendChild(buttonElement);

      const style = window.getComputedStyle(buttonElement);

      expect(style.getPropertyValue('text-transform')).to.not.equal('uppercase');

    });

    it('should have mdc-button after importing', () => {

      import "meteor/zodiase:mdc-styleonly/bundle.css";

      const buttonElement = document.createElement('button');
      buttonElement.className = 'mdc-button';
      containerElement.appendChild(buttonElement);

      const style = window.getComputedStyle(buttonElement);

      expect(style.getPropertyValue('text-transform')).to.equal('uppercase');

    });

  });

});
