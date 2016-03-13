var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('server', function() {
    browserSync.init({
        server: "./",
    });
});

gulp.task('sass', function() {
    gulp.src('public/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function() {
    gulp.watch('public/scss/*.scss', ['sass'])
    gulp.watch(['*.html', 'views/*.html', 'public/css/*.css', 'public/js/*.js']).on('change', reload);
});

gulp.task('default', ['server', 'sass', 'watch']);