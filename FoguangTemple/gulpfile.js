var gulp = require('gulp');
var sass = require('gulp-sass');// Requires the gulp-sass plugin
var nano = require('gulp-cssnano');
var runSequence = require('run-sequence');
var minify = require('gulp-minify');
var concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
var sassGlob = require('gulp-sass-glob');

//js path
// var paths1 = {
    // using framework version of jquery
    // scripts: [
        // 'app/js/jquery.min.js',
        // 'app/js/bootstrap.min.js',
        // 'app/js/angular.min.js',
//         'app/js/app.js',
//         'app/js/chap1.js',
//         'lib/jquery.line.js'
//     ]
// };
var paths2 = {
    // using framework version of jquery
    scripts: [
        'app/js/animation.js',
        'app/js/carousel.js',
        'app/js/scene_image.js',
        'app/js/timelineJS.js',
        'app/js/chap2animation.js',
        'app/js/tab-navigation.js',
        // 'app/js/modal.js'
        //the animation for sunrise on intro 1 page is included in its page. not this one here
    ]
};

//globally import sass, then change sass to css
gulp.task('styles', function () {
    return gulp
        .src('app/scss/main.scss')
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(gulp.dest('app/css'));
});

// Concatenate js
// gulp.task('scripts1', function() {
//     return gulp.src(paths1.scripts)
//       .pipe(concat('all.js'))
//       .pipe(gulp.dest('dist/js'));
// });

gulp.task('scripts2', function() {
    return gulp.src(paths2.scripts)
      .pipe(concat('custom-jquery.js'))
      .pipe(gulp.dest('dist/js'));
});

//gulp compress js
gulp.task('compress', function() {
  gulp.src('dist/js/all.js')
    .pipe(minify({
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '.min.js']
    }))
    .pipe(gulp.dest('dist'))
});

//gulp compress css
gulp.task('nano', function() {
    return gulp.src('app/css/*.css')
        .pipe(nano())
        .pipe(gulp.dest('dist'));
});

//compress images
gulp.task('imagemin', () => {
	return gulp.src('img/scene/scene2/**/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('dist/img/scene/scene2'));
});

//gulp watch
gulp.task('watch', function() {
    gulp.watch('app/js/*.js', ['scripts2']);
    gulp.watch('app/scss/*.scss', ['styles']);
  });

//gulp default
gulp.task('default', function (callback) {
  runSequence(['styles', 'nano','scripts2','compress'],
    callback
  )
})
