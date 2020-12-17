const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function minJs(cb) {
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ["env"],

        }))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build'))
    return cb()
}

exports.default = series(minJs)