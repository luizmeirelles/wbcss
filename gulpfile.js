var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename');;

var scssFiles = ['./scss/*.scss'] ;
var cssDest = './css/';

var sassDeveloperOptions = {
    outputStyle: 'expanded'
}

var sassProductionOptions = {
    outputStyle: 'compressed'
}

gulp.task('sassdev', function(){
    return gulp.src(scssFiles)
    .pipe(sass(sassDeveloperOptions).on('error', sass.logError))
    .pipe(gulp.dest(cssDest));
})

gulp.task('sassprod', function(){
    return gulp.src(scssFiles)
    .pipe(sass(sassProductionOptions).on('error', sass.logError))
    .pipe(rename('wooble_css.min.css'))
    .pipe(gulp.dest(cssDest));
});
    
gulp.task('scriptsdev', function(){
    return gulp.src(jsFiles)
     .pipe(jshint())
     .pipe(jshint.reporter('default'))
     .pipe(gulp.dest(jsDest));
 });
 
 gulp.task('scriptsprod', function(){
    return gulp.src(jsFiles)
     .pipe(jshint())
     .pipe(jshint.reporter('default'))
     .pipe(rename('main.min.js'))
     .pipe(gulp.dest(jsDest));
 });

gulp.task('watch', function(){
    gulp.watch('./assets/scss/estilo.scss', ['sass']);
})

gulp.task('watch', function(){
    gulp.watch(scssFiles, ['sassdev', 'sassprod']);
});

gulp.task('default', ['sassdev', 'sassprod', 'watch']); 
