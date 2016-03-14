var gulp = require('gulp');
var util = require('gulp-util');
var jshint = require('gulp-jshint');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

//BASIC GULP TASK
gulp.task('myTask', function(){
		console.log('hello gulp');
});

gulp.task('jshint', function(){
	return gulp.src(['js/*.js'])
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

gulp.task('concatInterface', function(){
  return gulp.src(['./js/*-interface.js'])
  .pipe(concat('allConcat.js'))
  .pipe(gulp.dest('./tmp'));
});

gulp.task('omg', ['concatInterface'], function(){
  return browserify({ entries: ['./tmp/allConcat.js']})
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./build/js'));
});

gulp.task('minify', ['omg'], function(){
  return gulp.src('./build/js/app.js')
  .pipe(uglify())
  .pipe(gulp.dest('./build/js'));
});
