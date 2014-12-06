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
    module.exports = function(grunt) {
        grunt.initConfig({
            pkg: grunt.file.readJSON("package.json"),
            eslint: {
                target: ["Gruntfile.js", "protractor.local.conf.js"]
            },
            bowerInstall: {
                target: {
                    src: "client/index.html",
                    dependencies: true
                }
            },
            express: {
                local: {
                    options: {
                        port: 29101,
                        bases: "client",
                        server: "server/application.js"
                    }
                }
            },
            "protractor_webdriver": {
                local: {
                }
            },
            protractor: {
                local: {
                    options: {
                        configFile: "protractor.local.conf.js",
                        debug: true,
                        suite: "full"
                    }
                }
            }
        });
        grunt.loadNpmTasks("grunt-eslint");
        grunt.loadNpmTasks("grunt-bower-install");
        grunt.loadNpmTasks("grunt-express");
        grunt.loadNpmTasks("grunt-protractor-webdriver");
        grunt.loadNpmTasks("grunt-protractor-runner");
        grunt.registerTask("default", []);
        grunt.registerTask("e2e:local", ["express:local", "protractor_webdriver:local", "protractor:local"]);
    };
}());
