var gulp    = require("gulp"),
    watch   = require("gulp-watch"),
    browserSync = require("browser-sync").create();
    sass = require("gulp-sass");

//watch task
gulp.task("watch", function(){

    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });


    watch("./app/index.html", function(){
        browserSync.reload();
    });

    watch("./app/assets/styles/**/*.scss", function(){
        gulp.src("./app/assets/styles/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./app/assets/styles"));
        browserSync.reload();
    });
});