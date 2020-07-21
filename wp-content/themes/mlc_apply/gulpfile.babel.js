/**
 * Gulpfile.
 *
 * Gulp with WordPress.
 *
 * Implements:
 *      1. Live reloads browser with BrowserSync.
 *      2. CSS: Sass to CSS conversion, error catching, Autoprefixing, Sourcemaps,
 *         CSS minification, and Merge Media Queries.
 *      3. JS: Concatenates & uglifies Vendor and Custom JS files.
 *      4. Images: Minifies PNG, JPEG, GIF and SVG images.
 *      5. Watches files for changes in CSS or JS.
 *      6. Watches files for changes in PHP.
 *      7. Corrects the line endings.
 *      8. InjectCSS instead of browser page reload.
 *      9. Generates .pot file for i18n and l10n.
 *
 * @tutorial https://github.com/ahmadawais/WPGulp
 * @author Ahmad Awais <https://twitter.com/MrAhmadAwais/>
 */

/**
 * Load WPGulp Configuration.
 *
 * TODO: Customize your project in the wpgulp.js file.
 */
const config = require( './wpgulp.config.js' );

/**
 * Load Plugins.
 *
 * Load gulp plugins and passing them semantic names.
 */
const gulp = require( 'gulp' ); // Gulp of-course.

// CSS related plugins.
const sass = require( 'gulp-sass' ); // Gulp plugin for Sass compilation.
const minifycss = require( 'gulp-uglifycss' ); // Minifies CSS files.
const autoprefixer = require( 'gulp-autoprefixer' ); // Autoprefixing magic.
const mmq = require( 'gulp-merge-media-queries' ); // Combine matching media queries into one.
const rtlcss = require( 'gulp-rtlcss' ); // Generates RTL stylesheet.

// JS related plugins.
const concat = require( 'gulp-concat' ); // Concatenates JS files.
const uglify = require( 'gulp-uglify' ); // Minifies JS files.
const babel = require( 'gulp-babel' ); // Compiles ESNext to browser compatible JS.

// Image related plugins.
const imagemin = require( 'gulp-imagemin' ); // Minify PNG, JPEG, GIF and SVG images with imagemin.

// Utility related plugins.
const rename = require( 'gulp-rename' ); // Renames files E.g. style.css -> style.min.css.
const lineec = require( 'gulp-line-ending-corrector' ); // Consistent Line Endings for non UNIX systems. Gulp Plugin for Line Ending Corrector (A utility that makes sure your files have consistent line endings).
const filter = require( 'gulp-filter' ); // Enables you to work on a subset of the original files by filtering them using a glob.
const sourcemaps = require( 'gulp-sourcemaps' ); // Maps code in a compressed file (E.g. style.css) back to it’s original position in a source file (E.g. structure.scss, which was later combined with other css files to generate style.css).
const notify = require( 'gulp-notify' ); // Sends message notification to you.
const browserSync = require( 'browser-sync' ).create(); // Reloads browser and injects CSS. Time-saving synchronized browser testing.
const sort = require( 'gulp-sort' ); // Recommended to prevent unnecessary changes in pot-file.
const cache = require( 'gulp-cache' ); // Cache files in stream for later use.
const remember = require( 'gulp-remember' ); //  Adds all the files it has ever seen back into the stream.
const plumber = require( 'gulp-plumber' ); // Prevent pipe breaking caused by errors from gulp plugins.
const beep = require( 'beepbeep' );

const svgstore = require( 'gulp-svgstore' );
const svgmin = require( 'gulp-svgmin' );

const browserify = require('gulp-browserify');

const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');

/**
 * Custom Error Handler.
 *
 * @param Mixed err
 */
const errorHandler = r => {
    notify.onError( '\n\n❌  ===> ERROR: <%= error.message %>\n' )( r );
    beep();
};

/**
 * Task: `browser-sync`.
 *
 * Live Reloads, CSS injections, Localhost tunneling.
 * @link http://www.browsersync.io/docs/options/
 *
 * @param {Mixed} done Done.
 */
const browsersync = done => {
    browserSync.init({
        proxy: config.projectURL,
        open: config.browserAutoOpen,
        injectChanges: config.injectChanges,
        watchEvents: [ 'change', 'add', 'unlink', 'addDir', 'unlinkDir' ]
    });
    done();
};

// Helper function to allow browser reload with Gulp 4.
const reload = done => {
    browserSync.reload();
    done();
};

/**
 * Task: `styles`.
 *
 * Compiles Sass, Autoprefixes it and Minifies CSS.
 *
 * This task does the following:
 *    1. Gets the source scss file
 *    2. Compiles Sass to CSS
 *    3. Writes Sourcemaps for it
 *    4. Autoprefixes it and generates style.css
 *    5. Renames the CSS file with suffix .min.css
 *    6. Minifies the CSS file and generates style.min.css
 *    7. Injects CSS or reloads the browser via browserSync
 */
gulp.task( 'styles', () => {
    return gulp
        .src( config.styleSRC, { allowEmpty: true })
        .pipe( plumber( errorHandler ) )
        .pipe( sourcemaps.init() )
        .pipe(
            sass({
                errLogToConsole: config.errLogToConsole,
                outputStyle: config.outputStyle,
                precision: config.precision
            })
        )
        .on( 'error', sass.logError )
        .pipe( sourcemaps.write({ includeContent: false }) )
        .pipe( sourcemaps.init({ loadMaps: true }) )
        .pipe( autoprefixer( config.BROWSERS_LIST ) )
        .pipe( sourcemaps.write( './' ) )
        .pipe( lineec() ) // Consistent Line Endings for non UNIX systems.
        .pipe( gulp.dest( config.styleDestination ) )
        .pipe( filter( '**/*.css' ) ) // Filtering stream to only css files.
        .pipe( mmq({ log: true }) ) // Merge Media Queries only for .min.css version.
        .pipe( browserSync.stream() ) // Reloads style.css if that is enqueued.
        .pipe( rename({ suffix: '.min' }) )
        .pipe( minifycss({ maxLineLen: 10 }) )
        .pipe( lineec() ) // Consistent Line Endings for non UNIX systems.
        .pipe( gulp.dest( config.styleDestination ) )
        .pipe( filter( '**/*.css' ) ) // Filtering stream to only css files.
        .pipe( browserSync.stream() ) // Reloads style.min.css if that is enqueued.
        .pipe( notify({ message: '\n\n✅  ===> STYLES — completed!\n', onLast: true }) );
});
gulp.task( 'adminStyles', () => {
    return gulp
        .src( config.adminStyleSRC, { allowEmpty: true })
        .pipe( plumber( errorHandler ) )
        .pipe( sourcemaps.init() )
        .pipe(
            sass({
                errLogToConsole: config.errLogToConsole,
                outputStyle: config.outputStyle,
                precision: config.precision
            })
        )
        .on( 'error', sass.logError )
        .pipe( sourcemaps.write({ includeContent: false }) )
        .pipe( sourcemaps.init({ loadMaps: true }) )
        .pipe( autoprefixer( config.BROWSERS_LIST ) )
        .pipe( sourcemaps.write( './' ) )
        .pipe( lineec() ) // Consistent Line Endings for non UNIX systems.
        .pipe( gulp.dest( config.adminStyleDestination ) )
        .pipe( filter( '**/*.css' ) ) // Filtering stream to only css files.
        .pipe( mmq({ log: true }) ) // Merge Media Queries only for .min.css version.
        .pipe( browserSync.stream() ) // Reloads style.css if that is enqueued.
        .pipe( rename({ suffix: '.min' }) )
        .pipe( minifycss({ maxLineLen: 10 }) )
        .pipe( lineec() ) // Consistent Line Endings for non UNIX systems.
        .pipe( gulp.dest( config.adminStyleDestination ) )
        .pipe( filter( '**/*.css' ) ) // Filtering stream to only css files.
        .pipe( browserSync.stream() ) // Reloads style.min.css if that is enqueued.
        .pipe( notify({ message: '\n\n✅  ===> ADMIN STYLES — completed!\n', onLast: true }) );
});
/**
 * Task: `stylesRTL`.
 *
 * Compiles Sass, Autoprefixes it, Generates RTL stylesheet, and Minifies CSS.
 *
 * This task does the following:
 *    1. Gets the source scss file
 *    2. Compiles Sass to CSS
 *    4. Autoprefixes it and generates style.css
 *    5. Renames the CSS file with suffix -rtl and generates style-rtl.css
 *    6. Writes Sourcemaps for style-rtl.css
 *    7. Renames the CSS files with suffix .min.css
 *    8. Minifies the CSS file and generates style-rtl.min.css
 *    9. Injects CSS or reloads the browser via browserSync
 */
gulp.task( 'stylesRTL', () => {
    return gulp
        .src( config.styleSRC, { allowEmpty: true })
        .pipe( plumber( errorHandler ) )
        .pipe( sourcemaps.init() )
        .pipe(
            sass({
                errLogToConsole: config.errLogToConsole,
                outputStyle: config.outputStyle,
                precision: config.precision
            })
        )
        .on( 'error', sass.logError )
        .pipe( sourcemaps.write({ includeContent: false }) )
        .pipe( sourcemaps.init({ loadMaps: true }) )
        .pipe( autoprefixer( config.BROWSERS_LIST ) )
        .pipe( lineec() ) // Consistent Line Endings for non UNIX systems.
        .pipe( rename({ suffix: '-rtl' }) ) // Append "-rtl" to the filename.
        .pipe( rtlcss() ) // Convert to RTL.
        .pipe( sourcemaps.write( './' ) ) // Output sourcemap for style-rtl.css.
        .pipe( gulp.dest( config.styleDestination ) )
        .pipe( filter( '**/*.css' ) ) // Filtering stream to only css files.
        .pipe( browserSync.stream() ) // Reloads style.css or style-rtl.css, if that is enqueued.
        .pipe( mmq({ log: true }) ) // Merge Media Queries only for .min.css version.
        .pipe( rename({ suffix: '.min' }) )
        .pipe( minifycss({ maxLineLen: 10 }) )
        .pipe( lineec() ) // Consistent Line Endings for non UNIX systems.
        .pipe( gulp.dest( config.styleDestination ) )
        .pipe( filter( '**/*.css' ) ) // Filtering stream to only css files.
        .pipe( browserSync.stream() ) // Reloads style.css or style-rtl.css, if that is enqueued.
        .pipe( notify({ message: '\n\n✅  ===> STYLES RTL — completed!\n', onLast: true }) );
});

/**
 * Task: `customJS`.
 *
 * Concatenate and uglify custom JS scripts.
 *
 * This task does the following:
 *     1. Gets the source folder for JS custom files
 *     2. Concatenates all the files and generates custom.js
 *     3. Renames the JS file with suffix .min.js
 *     4. Uglifes/Minifies the JS file and generates custom.min.js
 */
gulp.task( 'customJS', () => {
    return gulp
        .src( config.jsCustomSRC, { since: gulp.lastRun( 'customJS' ) }) // Only run on changed files.
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe( gulp.dest( config.jsCustomDestination ) )
        .pipe( notify({ message: '\n\n✅  ===> CUSTOM JS — completed!\n', onLast: true }) );
});

/**
 * Task: `svg`.
 *
 * Minifies combines all SVGs to template file
 *
 * This task does the following:
 *     1. Gets the source of SVGs raw folder
 *     2. Optimizes SVG files
 *     3. Combines all SVGs into inline file stored under /template-parts
 */
gulp.task( 'svg', () => {
    return gulp
        .src(config.svgSRC)
        .pipe(svgmin(function (file) {
            var prefix = 'svg';
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            }
        }))
        .pipe( rename( { prefix: 'icon-' } ) )
        .pipe(svgstore({inlineSvg: true}))
        .pipe( rename( 'svgs.php' ) )
        .pipe(gulp.dest('template-parts'))
        .pipe( notify({ message: '\n\n✅  ===> SVG — completed!\n', onLast: true }) );
});



/**
 * Watch Tasks.
 *
 * Watches for file changes and runs specific tasks.
 */
gulp.task(
    'default',
    gulp.parallel( 'styles', 'customJS', 'adminStyles', 'svg', browsersync, () => {
        gulp.watch( config.watchPhp, reload ); // Reload on PHP file changes.
        gulp.watch( config.watchStyles, gulp.parallel( 'styles' ) ); // Reload on SCSS file changes.
        gulp.watch( config.watchAdminStyles, gulp.parallel( 'adminStyles' ) ); // Reload on SCSS file changes.
        gulp.watch( config.watchJsCustom, gulp.series( 'customJS', reload ) ); // Reload on customJS file changes.
        gulp.watch( config.svgSRC, gulp.parallel( 'svg' ) ); // Reload on SVG file changes.
    })
);
