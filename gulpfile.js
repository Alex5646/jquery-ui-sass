var gulp         = require('gulp'),
    sourcemaps   = require('gulp-sourcemaps'),
    sass         = require('gulp-sass'),
    cssmin       = require('gulp-cssmin'),
    postcss      = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    plumber      = require('gulp-plumber'),
    jade         = require('gulp-jade');

gulp.task('jade', function () {
    gulp.src('./assets/jade/**/[^_]*.jade')
        .pipe(plumber())
        .pipe(jade())
        .pipe(gulp.dest('./'));
});

gulp.task('css', function() {
    gulp.src('./assets/sass/**/*.{sass,scss}')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([
            autoprefixer({browsers: ['last 2 versions', '> 1%']})
        ]))
        .pipe(cssmin())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('watch', function() {
    gulp.watch('./assets/sass/**/*.{sass,scss}', ['css']);
    gulp.watch('./assets/jade/**/*.jade', ['jade'])
});

gulp.task('default', ['watch', 'js', 'css', 'jade']);
