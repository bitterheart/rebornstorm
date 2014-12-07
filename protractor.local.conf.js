/*
  This file is part of rebornstorm.

  rebornstorm is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.
  rebornstorm is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with rebornstorm.  If not, see <http://www.gnu.org/licenses/>.
*/
/*eslint-env node*/
(function(){
    "use strict";
    exports.config = {
        seleniumAddress: "http://localhost:4444/wd/hub",
        suites: {
            full: "spec/*.js"
        },
        capabilities: {
            browserName: "chrome"
        },
        baseUrl: "http://localhost:29101",
        allScriptsTimeout: 11000,
        getPageTimeout: 10000,
        onPrepare: function(){
            /*global browser:false*/
            browser.get("client/index.html");
        },
        framework: "jasmine",
        jasmineNodeOpts: {
            isVerbose: false,
            showColors: true,
            includeStackTrace: true,
            defaultTimeoutInterval: 30000
        }
    };
}());
