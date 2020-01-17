var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename');;

var scssFiles = ['./scss/wb.scss'] ;
var cssDest = './css/';

gulp.task('sassdev', function(){
    return gulp.src(scssFiles)
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest(cssDest));
})

gulp.task('sassprod', function(){
    return gulp.src(scssFiles)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename('wb.min.css'))
    .pipe(gulp.dest(cssDest));
});

gulp.task('watch', function(){
    gulp.watch(scssFiles, ['sassdev', 'sassprod']);
});

gulp.task('default', ['sassdev', 'sassprod', 'watch']); 
