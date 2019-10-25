//dependencies
const {parallel, dest, src, watch} 	= require('gulp');
const concat 						= require('gulp-concat');
const postcss 						= require('gulp-postcss');
const autoprefixer 					= require('autoprefixer');
const cssnano 						= require('cssnano'); /*cssnano is currently turned off*/
const sass 							= require('gulp-sass');
const browserSync					= require('browser-sync');
const uglify						= require('gulp-uglify');


function markup()
{
	return src('src/*.html')
	.pipe(dest('public'));
}

function styles()
{
	return src('src/scss/*.scss')
	.pipe(sass())
    .on('error', sass.logError)
    .pipe(postcss([autoprefixer()/*, cssnano()*/]))
    .pipe(dest('public/css'))
	.pipe(browserSync.stream());
}

function js()
{
	return src('src/*.js')
	.pipe(uglify())
	.pipe(dest('public'));
}

function image()
{
	return src('src/images/**/*.jpg')
	.pipe(dest('public/images'));
}

function svg()
{
	return src('src/svg/*.svg')
	.pipe(dest('public/svg'));
}

function font()
{
	return src('src/fonts/*')
	.pipe(dest('public/fonts'));
}

function watchAll()
{
	styles();
	markup();
	//js();
	image();
	svg();
	font();

	browserSync.init
	(
		{
			server:
			{
				baseDir: './public/'
			},
			browser: "google chrome"
		}
	);

	//watch filles for changes
	watch('src/scss/*.scss', styles);
	//watch('src/*.html').on('change', function(){ markup(); browserSync.reload()});
	// watch('src/*.js').on('change', function(){ js(); browserSync.reload()});
	// watch('src/images/*.jpg').on('change', function(){ image(); browserSync.reload()});
	// watch('src/svg/*.svg').on('change', function(){ svg(); browserSync.reload()});
	// watch('src/fonts/*').on('change', function(){ font(); browserSync.reload()});
}

//default task with task sequence
exports.default = parallel(markup, styles, js, image);
exports.markup 	= markup;
exports.styles 	= styles;
//exports.js		= js;
exports.image 	= image;
exports.svg 	= svg;
exports.font 	= font;
exports.watch 	= watchAll;

