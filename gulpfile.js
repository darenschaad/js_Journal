var gulp = require('gulp');
var util = require('gulp-util');
var jshint = require('gulp-jshint');

//BASIC GULP TASK
gulp.task('myTask', function(){
		console.log('hello gulp');
});

gulp.task('jshint', function(){
	return gulp.src(['js/*.js'])
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});
