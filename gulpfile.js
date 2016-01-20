"use strict"
/**
 * Created by user on 10/9/15.
 */
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mochaPhantomJS = require('gulp-mocha-phantomjs');

gulp.task('frontEndTest', function () {
    return gulp
        .src('f2e/index.html')
        .pipe(mochaPhantomJS());
});

gulp.task('jshint', function(){
    gulp.src(['**/*.js',
        '!node_modules/**',
        '!f2e/chai.js',
        '!f2e/mocha.js',
        '!coverage/**'])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter());
});


gulp.task('default', function() {
    // 将你的默认的任务代码放在这
});
