var gulp         = require('gulp'),
    sourcemaps   = require('gulp-sourcemaps'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglify'),
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

gulp.task('js', function() {
    gulp
        .src([
            // JQuery UI Core
            './assets/js/ui/core.js',
            './assets/js/ui/form-reset-mixin.js',
            './assets/js/ui/position.js',
            './assets/js/ui/widget.js',

            // JQuery UI Mouse
            './assets/js/ui/mouse.js',
            './assets/js/ui/draggable.js',
            './assets/js/ui/droppable.js',
            './assets/js/ui/resizable.js',
            './assets/js/ui/selectable.js',
            './assets/js/ui/sortable.js',

            // JQuery UI Widgets
            './assets/js/ui/button.js',
            './assets/js/ui/accordion.js',
            './assets/js/ui/datepicker.js',
            './assets/js/ui/dialog.js',
            './assets/js/ui/menu.js',
            './assets/js/ui/autocomplete.js',
            './assets/js/ui/selectmenu.js',
            './assets/js/ui/progressbar.js',
            './assets/js/ui/slider.js',
            './assets/js/ui/spinner.js',
            './assets/js/ui/tabs.js',
            './assets/js/ui/tooltip.js',

            // JQuery UI Effexts
            './assets/js/ui/effect.js',
            './assets/js/ui/effect-blind.js',
            './assets/js/ui/effect-bounce.js',
            './assets/js/ui/effect-clip.js',
            './assets/js/ui/effect-drop.js',
            './assets/js/ui/effect-explode.js',
            './assets/js/ui/effect-fade.js',
            './assets/js/ui/effect-fold.js',
            './assets/js/ui/effect-highlight.js',
            './assets/js/ui/effect-pulsate.js',
            './assets/js/ui/effect-size.js',
            './assets/js/ui/effect-scale.js',
            './assets/js/ui/effect-puff.js',
            './assets/js/ui/effect-shake.js',
            './assets/js/ui/effect-slide.js',
            './assets/js/ui/effect-transfer.js'
        ])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('jquery-ui.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./assets/js'));
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