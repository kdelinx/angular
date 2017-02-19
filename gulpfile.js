var gulp = require('gulp');
var concat = require('gulp-concat');
var prefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var copy = require('gulp-copy');
var rename = require('gulp-rename');
var watch = require('gulp-watch');

gulp.task('css:app', function () {
  return gulp.src(['assets/styles/*.css'])
    .pipe(prefixer({browsers: ['> 1%']}))
    .pipe(concat('redmine.min.css'))
    //.pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('css:lib', function () {
  return gulp.src([
      'assets/animate/animate.css'
      ])
    .pipe(concat('libs.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('js:app', function () {
  return gulp.src(['app/*.js','app/**/*.js'])
    .pipe(concat('redmine.min.js'))
    .pipe(ngAnnotate())
    //.pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('js:lib', function () {
  return gulp.src([
      'assets/libs/moment/min/moment.min.js',
      'assets/libs/moment/locale/ru.js',
      'assets/libs/angular/angular.min.js',
      'assets/libs/angular-animate/angular-animate.min.js',
      'assets/libs/angular-cookies/angular-cookies.min.js',
      'assets/libs/angular-local-storage/dist/angular-local-storage.min.js',
      'assets/libs/angular-moment/angular-moment.min.js',
      'assets/libs/angular-resource/angular-resource.min.js',
      'assets/libs/angular-sanitize/angular-sanitize.min.js',
      'assets/libs/angular-ui-router/release/angular-ui-router.min.js',
      'assets/libs/lodash/dist/lodash.min.js'
      ])
    .pipe(concat('libs.min.js'))
    .pipe(gulp.dest('dist/js'));
});

// gulp.task('html:views', function () {
//     return gulp.src(['app/ui/views/**/*.html'])
//         .pipe(rename({dirname: ''}))
//         .pipe(gulp.dest('../../web/checkout-dist'));
// });

// gulp.task('html:partials', function () {
//     return gulp.src(['app/ui/components/**/*.html'])
//         .pipe(rename({dirname: ''}))
//         .pipe(gulp.dest('../../web/checkout-dist/partials'));
// });

// gulp.task('fonts', function () {
//   return gulp.src('assets/fonts/*')
//     .pipe(gulp.dest('dist/fonts'));
// });

gulp.task('watcher',function(){
    gulp.watch(['assets/styles/*.css'], ['css:app']);
    gulp.watch(['app/*.js','app/**/*.js'], ['js:app']);
    // gulp.watch(['app/ui/views/**/*.html'], ['html:views']);
    // gulp.watch(['app/ui/components/**/*.html'], ['html:partials']);
});

gulp.task('default', ['css:app','js:app','watcher']);
gulp.task('libs', ['css:lib','js:lib']);
 