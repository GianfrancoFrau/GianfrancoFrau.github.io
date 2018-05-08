var gulp = require('gulp')
	, server = require('gulp-server-livereload')
	, minifyCss = require('gulp-minify-css')
	, concat = require('gulp-concat')
	, rename = require('gulp-rename')
	, uglify = require('gulp-uglify')
	, clean = require('gulp-clean')
	, paths = {
			js: ['./src/js/**/*.js'],
			css: ['./src/**/*.css'],
			img: ['./src/img/**/*.png','./src/img/**/*.jpg']
		}
 
gulp.task('default', ['img', 'css', 'js', 'server', 'watch']);

gulp.task('server', function() {
  gulp.src('.')
    	.pipe(server({
	      livereload: true,
	      directoryListing: false,
	      path: 'index.html',
	      open: true
	    }));
});

gulp.task('watch', function() {
    gulp.watch(paths.css, ['css']);
    gulp.watch(paths.js, ['js']);
});

gulp.task('css', function(done) {
	gulp.src(paths.css)
			.pipe(minifyCss({
			  keepSpecialComments: 0
			}))
			.pipe(rename({ extname: '.min.css' }))
			.pipe(gulp.dest('app/'))
			.on('end', done);
});

gulp.task('js', function() {
	gulp.src(paths.js)
			.pipe(concat('app/app.js'))
			// .pipi(uglify())
			.pipe(gulp.dest('.'));
})

gulp.task('img', function(){
	gulp.src(paths.img)
			.pipe(gulp.dest('app/img/'));
})