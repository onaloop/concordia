/* eslint-env node */

let gulp = require('gulp');
let sass = require('gulp-sass');
let rename = require('gulp-rename');
let sourcemaps = require('gulp-sourcemaps');

let paths = {
    styles: ['*/static/scss/**/*.scss'],
    scripts: ['*/static/js/**/*.js']
};

function styles() {
    return gulp
        .src(paths.styles)
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(
            rename(function(path) {
                path.dirname = path.dirname.replace(
                    /^[^/]+[/]static[/]scss/,
                    'css'
                );
            })
        )
        .pipe(sourcemaps.write('sourcemaps/'))
        .pipe(gulp.dest('static/'));
}

function scripts() {
    return gulp
        .src(paths.scripts)
        .pipe(
            rename(function(path) {
                path.dirname = path.dirname.replace(/^[^/]+[/]static[/]/, '');
            })
        )
        .pipe(gulp.dest('static/'));
}

function watch() {
    gulp.watch(paths.scripts, scripts);
    gulp.watch(paths.styles, styles);
}

var build = gulp.parallel(styles, scripts);

exports.styles = styles;
exports.scripts = scripts;
exports.build = build;
exports.watch = watch;
exports.default = gulp.series(build, watch);
