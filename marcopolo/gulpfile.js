//dependencies
const {parallel, dest, src, watch} 	= require('gulp');
const concat 						= require('gulp-concat');
const postcss 						= require('gulp-postcss');
const autoprefixer 					= require('autoprefixer');
const cssnano 						= require('cssnano'); /*cssnano is currently turned off*/
const sass 							= require('gulp-sass');
const browserSync					= require('browser-sync');
const uglify						= require('gulp-uglify');

function styles()
{
	return src('src/scss/style.scss')
	.pipe(sass())
    .on('error', sass.logError)
    .pipe(postcss([autoprefixer()/*, cssnano()*/]))
    .pipe(dest('public/css'))
	.pipe(browserSync.stream());
}


function watchAll()
{
	styles();

	browserSync.init
	(
		{
			server:
			{
				baseDir: './public'
			},
			browser: "google chrome"
		}
	);

	//watch filles for changes
	watch('src/scss/*.scss', styles);
}

//default task with task sequence
exports.default = parallel(styles);
exports.styles 	= styles;
exports.watch 	= watchAll;

