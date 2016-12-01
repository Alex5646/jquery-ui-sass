var gulp         = require('gulp'),
    sourcemaps   = require('gulp-sourcemaps'),
    sass         = require('gulp-sass'),
    cssmin       = require('gulp-cssmin'),
    postcss      = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    plumber      = require('gulp-plumber'),
    pug          = require('gulp-pug');

gulp.task('pug', function () {
    gulp.src('./assets/pug/**/[^_]*.pug')
        .pipe(plumber())
        .pipe(pug())
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
    gulp.watch('./assets/pug/**/*.pug', ['pug'])
});

gulp.task('default', ['watch', 'js', 'css', 'pug']);
gulp.task('build', ['css', 'pug']);
