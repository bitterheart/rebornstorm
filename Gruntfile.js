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
                target: ["Gruntfile.js"]
            },
            express:{
            },
            "protractor_webdriver": {
            }
        });
        grunt.loadNpmTasks("grunt-eslint");
        grunt.loadNpmTasks("grunt-express");
        grunt.loadNpmTasks("grunt-protractor-webdriver");
        grunt.registerTask("default", []);
    };
}());
