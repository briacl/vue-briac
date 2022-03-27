const gulp = require("gulp");
const gap = require("gulp-append-prepend");

gulp.task("licenses", async function () {
  // this is to add Creative Tim licenses in the production mode for the minified js
  gulp
    .src("dist/js/*.js", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* Briac L. Web site ©Briac Le Meillat 2022
* blemeill@briac.cf
=========================================================

* Some parts are © Vuejs / © Creative Tim / © TailWindCss

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add Creative Tim licenses in the production mode for the minified html
  gulp
    .src("dist/index.html", { base: "./" })
    .pipe(
      gap.prependText(`<!--

=========================================================
* Briac L. Web site ©Briac Le Meillat 2022
* blemeill@briac.cf
=========================================================

* Some parts are © Vuejs / © Creative Tim / © TailWindCss

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

-->`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add Creative Tim licenses in the production mode for the minified css
  gulp
    .src("dist/css/*.css", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* Briac L. Web site ©Briac Le Meillat 2022
* blemeill@briac.cf
=========================================================

* Some parts are © Vuejs / © Creative Tim / © TailWindCss
*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));
  return;
});
