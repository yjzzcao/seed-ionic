var gulp = require('gulp');
var gutil = require('gulp-util');
var templateCache = require('gulp-angular-templatecache');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');

var paths = {
  less: ['./less/**/**/*.less'],
  templates: ['./www/views/**/*.html'],
};

gulp.task('default', ['less', 'templates']);

gulp.task('watch', function() {
  gulp.watch(paths.less, ['less']);
  gulp.watch(paths.templates, ['templates']);
});

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('less', function() {
  return gulp.src('./less/style.less')
    .pipe(less({
      paths: [paths.less.join(__dirname, 'less', 'includes')]
    }))
    .pipe(gulp.dest('./www/css'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(gulp.dest('./www/css/'));
});

gulp.task('templates', function() {
  return gulp.src(paths.templates)
    .pipe(templateCache({standalone:true}))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('./www/js/'));
});
