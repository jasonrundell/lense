'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src('src/**/*.scss')
    .pipe(prefix('last 2 versions'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist'));
});

gulp.task('sass:watch', function () {
  gulp.watch('src/**/*.scss', ['sass']);
});

gulp.task('default', function() {
  gulp.start('sass', 'sass:watch');
});
