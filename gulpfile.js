var gulp = require('gulp');

var pkg = require('./package.json');

var qunit = require('gulp-qunit');
var bump = require('gulp-bump');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var size = require('gulp-size');

gulp.task('default', ['test']);

gulp.task('lint', function () {
  return gulp.src(['./*.js', './*.json'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('qunit', function () {
  return gulp.src('./test.html')
        .pipe(qunit());
});

gulp.task('bump', function () {
  var bumpType = process.env.BUMP || 'patch'; // major.minor.patch

  return gulp.src(['./package.json', './bower.json'])
    .pipe(bump({ type: bumpType }))
    .pipe(gulp.dest('./'));
});

gulp.task('size', function () {
  return gulp.src('./ghio.js')
    .pipe(size());
});

gulp.task('test', ['lint', 'qunit']);
