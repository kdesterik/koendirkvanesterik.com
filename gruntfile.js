/*global module:false*/
module.exports = function(grunt) {

	// load all grunt tasks
	require( 'load-grunt-tasks' )( grunt );

	// Project configuration.
	grunt.initConfig({

		config: grunt.file.readJSON( 'config.json' ),

		clean: {
			default: {
				src: [ 
					'<%= config.dist %>/**/*.*',
				]
			},
		},

		copy: {
			default: {
				expand: true,
				dest: '<%= config.dist %>/',
				cwd: '<%= config.src %>/',
				src: [
					'**',
					'!icons/**',
					'!scripts/**',
					'!styles/**',
				]
			},
		},

		jshint: {
			options: {
				jshintrc: '.jshintrc',
				reporter: require( 'jshint-stylish' )
			},
			default: [
				'gruntfile.js',
				'<%= config.src %>/scripts/**/*.js'
			]
		},

		concat: {
			libs: {
				src: [
					'./bower_components/jquery/dist/jquery.min.js',
					'./bower_components/pagePiling.js/jquery.pagepiling.min.js',
					'./bower_components/jquery-validation/dist/jquery.validate.min.js',
					'./bower_components/vide/dist/jquery.vide.min.js',
					'./bower_components/gemini-scrollbar/index.js',
				],
				dest: '<%= config.dist %>/js/libs.js'
			},
			scripts: {
				src: [
					'<%= config.src %>/scripts/**/*.js',
				],
				dest: '<%= config.dist %>/js/scripts.js'
			}
		},

		less: {
			development: {
				files: {
					'<%= config.dist %>/style.css': '<%= config.src %>/styles/style.less'
				}
			},
			acceptance: {
				options: {
					cleancss: true,
				},
				files: {
					'<%= config.dist %>/style.css': '<%= config.src %>/styles/style.less'
				}
			}
		},

		uglify: {
			development: {
				files: {
					'<%= config.dist %>/js/libs.js': '<%= config.dist %>/js/libs.js'
				}
			},
			acceptance: {
				files: {
					'<%= config.dist %>/js/libs.js': '<%= config.dist %>/js/libs.js',
					'<%= config.dist %>/js/scripts.js': '<%= config.dist %>/js/scripts.js'
				}
			},
		},

		autoprefixer: {
			options: {
				browsers: [
					'Android 2.3',
					'Android >= 4',
					'Chrome >= 20',
					'Firefox >= 24', // Firefox 24 is the latest ESR
					'Explorer >= 8',
					'iOS >= 6',
					'Opera >= 12',
					'Safari >= 6'
				]
			},
			development: {
				src: '<%= config.dist %>/style.css'
			},
			acceptance: {
				src: '<%= config.dist %>/style.css'
			},
		},

		watch: {
			development: {
				files: [
					'gruntfile.js',
					'<%= config.src %>/**/*.*',
				],
				tasks: [ 
					'prepare:development'
				],
				options: {
					livereload: true
				}
			}
		},

		open: {
			development: {
				path: '<%= config.local %>'
			}
		},

		'ftp-deploy': {
			acceptance: {
				auth: {
					host: '',
					port: 21,
					authKey: 'credentials',
				},
				src: '<%= config.dist %>',
				dest: '/public_html/acceptance/wp-content/themes/flipflopinteractive/',
				exclusions: [ './dist/**/.DS_Store' ],
				forceVerbose: true
			},
			// production: {
			// 	auth: {
			// 		host: 'butsu.oderland.com',
			// 		port: 21,
			// 		authKey: 'credentials',
			// 	},
			// 	src: '<%= config.dist %>',
			// 	dest: '/public_html/wp-content/themes/flipflopinteractive/',
			// 	exclusions: [ './dist/**/.DS_Store' ],
			// 	forceVerbose: true
			// },
		}
	});

	grunt.registerTask( 'default', [

		'clean:default',
		'copy:default',
		'jshint:default',
		'concat:libs',
		'concat:scripts',
	]);

	grunt.registerTask( 'prepare:development', [

		'default',
		'less:development',
		'autoprefixer:development',
		'uglify:development',
	]);

	grunt.registerTask( 'development', [

		'prepare:development',
		'open:development',
		'watch:development'
	]);

	grunt.registerTask( 'acceptance', [

		'default',
		'less:acceptance',
		'autoprefixer:acceptance',
		'uglify:acceptance',
		'ftp-deploy:acceptance',
	]);

	// grunt.registerTask( 'production', [

	// 	'default',
	// 	'less:acceptance',
	// 	'autoprefixer:acceptance',
	// 	'uglify:acceptance',
	// 	'ftp-deploy:production',
	// ]);
};