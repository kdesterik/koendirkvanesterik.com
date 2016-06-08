var gulp         = require( 'gulp' ),
	less         = require( 'gulp-less' ),
	autoprefixer = require( 'gulp-autoprefixer' ),
	browserify 	 = require( 'browserify' ),
	tap 		 = require( 'gulp-tap' ),
	jshint 		 = require( 'gulp-jshint' ),
	uglify 		 = require( 'gulp-uglify' );
	concat       = require( 'gulp-concat' ),
	exec         = require( 'gulp-exec' ),
	watch        = require( 'gulp-watch' ),
	livereload   = require( 'gulp-livereload' ),
	lr           = require( 'tiny-lr' ),
	server       = lr(),
	fs 			 = require( 'fs' ),
	SSH 		 = require( 'gulp-ssh' );


gulp.task( 'template', function () {
	return gulp.src( '*.hbs' )
		.pipe( livereload( server ));
});


gulp.task( 'style', function(){
	return gulp.src( './source/styles/styles.less' )
		.pipe( less() )
		.pipe( autoprefixer({ 'browsers': [ '> 5%' ]}))
		.pipe( gulp.dest( 'assets/css' ))
		.pipe( livereload( server ));
});


gulp.task( 'libs', function () {
	return gulp.src([
			'./bower_components/modernizr/modernizr.js'
		])
		.pipe( concat( 'libs.js' ))
		.pipe( uglify() )
		.pipe( gulp.dest( './assets/js' ))
		.pipe( livereload( server ));
});


gulp.task( 'scripts', function(){
	return gulp.src( './source/scripts/*.js' )
		.pipe( jshint() )
  		.pipe( jshint.reporter( 'jshint-stylish' ))
		.pipe( tap( function( file ){
		  file.contents = browserify( file.path, { debug: false }).bundle();
		}))
		// .pipe( uglify() )
		.pipe( gulp.dest( './assets/js' ))
		.pipe( livereload( server ));
});


gulp.task( 'ghost', function(){
	gulp.src( '' )
		.pipe( exec( 'cd ../../../; npm start' ));
});


gulp.task( 'watch', function(){
	// Listen on port 35729
	server.listen( 35729, function( err ){
		if( err ){
			return console.log( err );
		};

		gulp.watch( './source/styles/**/*.less', [ 'style' ]);
		gulp.watch( './source/scripts/*.js', [ 'scripts' ]);
		gulp.watch( './*.hbs', [ 'template' ]);
	});
});


gulp.task( 'default', [ 'style', 'libs', 'scripts' ], function(){
	gulp.start( 'ghost', 'watch' );
});



var ssh = new SSH({
	'ignoreErrors': false,
	'sshConfig': {
		'host': '146.185.166.164',
		'port': 22,
		'username': 'root',
		'privateKey': fs.readFileSync( '/Users/kdesterik/.ssh/id_rsa' )
	}
});

gulp.task( 'deploy', function(){
	return gulp.src([
		'./**/*.*',
		'!**/bower_components/**',
		'!**/source/**',
		'!**/node_modules/**',
		'!./.editorconfig',
		'!./.gitignore',
		'!./.jshintrc',
		'!./bower.json',
		'!./gulpfile.js',
		'!./LICENSE',
		'!./README.md',
	])
    .pipe( ssh.dest( '/var/www/ghost/content/themes/drive/' ))
    .pipe( ssh.shell([ 'chown -R ghost:ghost /var/www/ghost/content/themes/drive/' ]));
});
