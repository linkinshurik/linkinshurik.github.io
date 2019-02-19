'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');

 
sass.compiler = require('node-sass');
 
gulp.task('html', function() {
    return gulp.src('src/index.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('sass', function () {
    return gulp.src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});
 
gulp.task('sass:watch', function () {
    gulp.watch('sass/*.scss', gulp.series('sass'));
});

gulp.task('html:watch', function () {
    gulp.watch('src/*.html', gulp.series('html'));
});

gulp.task('default', gulp.parallel('html:watch', 'sass:watch'));
