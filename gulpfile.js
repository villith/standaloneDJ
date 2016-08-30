var gulp = require('gulp');
var runSequence = require('run-sequence');
var shell = require('gulp-shell');
var symdest = require('gulp-symdest');
var electron = require('gulp-electron');
var path = require('path');
var pkg = require('./src/package.json');

gulp.task('load', () => {
  return gulp.src("")
    .pipe(shell([
      'electron ./src/index.js'
    ]))
});
