var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename');;

var scssFiles = ['./scss/wooble_css.scss'] ;
var cssDest = './css/';

gulp.task('sassdev', function(){
    return gulp.src(scssFiles)
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest(cssDest));
})

gulp.task('sassprod', function(){
    return gulp.src(scssFiles)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename('wooble_css.min.css'))
    .pipe(gulp.dest(cssDest));
});

gulp.task('watch', function(){
    gulp.watch(scssFiles, ['sassdev', 'sassprod']);
});

gulp.task('default', ['sassdev', 'sassprod', 'watch']); 
