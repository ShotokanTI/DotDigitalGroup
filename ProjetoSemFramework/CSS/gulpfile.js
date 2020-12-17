const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglifycss = require('gulp-uglifycss')

function minCss(cb) {
    gulp.src('styles/**/*.css')
        .pipe(uglifycss({
            "uglyComments":true
        }))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('build'))
    return cb()
}

exports.default = series(minCss)