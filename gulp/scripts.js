'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var babel = require('gulp-babel');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

gulp.task('scripts', function () {
  return gulp.src(path.join(conf.paths.src, '/app/**/*.js'))
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe(browserSync.reload({ stream: true }))
    .pipe($.size())
    .pipe(babel({
        presets: ['es2015']
    }))
    
});
