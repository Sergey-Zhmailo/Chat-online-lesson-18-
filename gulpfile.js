const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
// Add sass + autoprefixer
gulp.task('sass', function () {
    return gulp.src('source/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css'));
});
// Watch
gulp.task('watch', ['sass'], function () {
    gulp.watch('source/scss/**/*.scss', ['sass']);
});
// Default task
gulp.task('default', ['watch']);