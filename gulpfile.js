const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

gulp.task('sass', () => {
  return gulp.src([
    'node_modules/bootstrap/scss/bootstrap.scss',
    'node_modules/font-awesome/scss/font-awesome.scss',
    'node_modules/owl.carousel/src/scss/owl.theme.default.scss',
    'node_modules/owl.carousel/src/scss/owl.carousel.scss',
    
    'src/scss/*.scss'
  ])
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(concat('style.css'))
  .pipe(gulp.dest('src/assets/css'))
  .pipe(browserSync.stream());
});

gulp.task('js', () => {
  return gulp.src([
  'node_modules/jquery/dist/jquery.min.js',
  'node_modules/popper.js/dist/umd/popper.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/bootstrap-validator/dist/validator.js',
    'node_modules/owl.carousel/dist/owl.carousel.min.js',
    'node_modules/chosen-js/chosen.jquery.js',
    'node_modules/jquery-form-validator/form-validator/jquery.form-validator.js',
    

	'src/js/*.js'
  ])
  .pipe(concat('scripts.js'))
  .pipe(gulp.dest('src/assets/js'))
  .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], () => {
  browserSync.init({
    server: './src'
  });

  gulp.watch([
    'node_modules/bootstrap/scss/bootstrap.min.scss',
    'src/scss/*.scss'
  ], ['sass']);

  gulp.watch('src/*.html').on('change', browserSync.reload);

});

gulp.task('fonts', () => {
  return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('src/assets/fonts'));
});

gulp.task('default', ['js', 'serve', 'fonts'])
