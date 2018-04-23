var gulp = require('gulp');
var server = require('gulp-webserver');
var url = require('url');
var data = require('./data.json');

gulp.task('server', function() {
    gulp.src('.')
        .pipe(server({
            port: 8080,
            open: true,
            livereload: true,
            middleware: function(req, res, next) {
                if (/\/login/g.test(req.url)) {
                    res.setHeader('Conent-Type','text/json;charset=utf-8')
                    res.end(JSON.stringify(data))
                }
                next();
            }
        }))
});