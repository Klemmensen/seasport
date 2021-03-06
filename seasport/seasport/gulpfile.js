// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint  = require('gulp-jshint');
var sass    = require('gulp-sass');
var concat  = require('gulp-concat');
var uglify  = require('gulp-uglify');
var rename  = require('gulp-rename');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('static/seasport/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('static/seasport/scss/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename('all.min.css'))
        .pipe(gulp.dest('static/seasport/dist'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('static/seasport/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('static/seasport/dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('static/seasport/dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('static/seasport/js/*.js', ['lint', 'scripts']);
    gulp.watch('static/seasport/scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);

// Live Server Task
gulp.task('live', ['sass', 'scripts']);