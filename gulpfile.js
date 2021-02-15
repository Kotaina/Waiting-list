"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var less = require("gulp-less");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var webp = require("gulp-webp");
var rename = require("gulp-rename");
var svgstore = require("gulp-svgstore");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var del = require("del");
var csso = require("gulp-csso");

gulp.task("clean", function () {
    return del("build");
});

gulp.task("copy", function () {
    return gulp.src([
        "source/fonts/**/*.{ttf,woff,woff2}",
        "source/img/**",
        "source/js/**",
        "source/*.ico",
        "source/data/*"
    ], {
        base: "source"
    })
        .pipe(gulp.dest("build"));
});

gulp.task("delete-docs", function () {
    return del("docs");
});

gulp.task("fill-docs", function () {
    return gulp.src([
        "build/**"
    ], {
        base: "build"
    })
        .pipe(gulp.dest("docs"));
});


gulp.task("css", function () {
    return gulp.src("source/less/style.less")
        .pipe(plumber())
        .pipe(sourcemap.init())
        .pipe(less())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(csso())
        .pipe(gulp.dest("build/css"))
        .pipe(rename("style.min.css"))
        .pipe(sourcemap.write("."))
        .pipe(gulp.dest("build/css"))
        .pipe(server.stream());
});

gulp.task("js", function () {
    return gulp.src("source/js/**", { base: "source" })
        .pipe(gulp.dest("build"))
        .pipe(server.stream());
})

gulp.task("webp", function () {
    return gulp.src("source/img//*.{png,jpg}")
        .pipe(webp({ quality: 90 }))
        .pipe(gulp.dest("source/img"));
});

gulp.task("sprite", function () {
    return gulp.src("source/img/icon-*.svg")
        .pipe(svgstore({
            inlineSvg: true
        }))
        .pipe(rename("sprite.svg"))
        .pipe(gulp.dest("source/img"));
})

gulp.task("html", function () {
    return gulp.src("source/*.html")
        .pipe(posthtml([
            include()
        ]))
        .pipe(gulp.dest("build"));
})

gulp.task("server", function () {
    server.init({
        server: "build/",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });

    gulp.watch("source/less/**/*.less", gulp.series("css"));

    // not working script 
    gulp.watch("source/js/**/*.js", gulp.series("js"));

    gulp.watch("source/img/icon-*.svg", gulp.series("sprite", "html", "refresh"));
    gulp.watch("source/*.html").on("change", gulp.series("html", "refresh"));
});

gulp.task("refresh", function (done) {
    server.reload();
    done();
});

gulp.task("build", gulp.series("clean", "copy", "css", "sprite", "html"));
gulp.task("start", gulp.series("build", "server"));

gulp.task("publish", gulp.series("delete-docs", "fill-docs"));
