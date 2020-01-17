var gulp = require('gulp'),
    sass = require("gulp-sass"),
    rename = require('gulp-rename'),
    del = require('del');

var paths = {
    estilos: {
        src: "scss/wb.scss",
        dest: "css/"
    }
};

function clean() {
    return del(['css/']);
}

function estilo_desenvolvimento() {
    return gulp.src(paths.estilos.src)
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest(paths.estilos.dest));
}

function estilo_producao() {
    return gulp.src(paths.estilos.src)
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.estilos.dest));
}

function watch() {
    gulp.watch(paths.estilos.src, estilo_desenvolvimento);
    gulp.watch(paths.estilos.src, estilo_producao);
}

var build = gulp.series(clean, gulp.parallel(clean, estilo_producao, estilo_desenvolvimento, watch));

gulp.task(build);
gulp.task('default', build);