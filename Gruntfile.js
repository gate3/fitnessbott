module.exports = function( grunt ) {

	// Grunt configuration ------------------------------------------------
	// Time how long tasks take.
    require( 'time-grunt' )( grunt );

	grunt.initConfig({
		pkg: grunt.file.readJSON( 'package.json' ),

		// configure jshint to validate js files -----------------------------------
		jshint: {
			options: {
				// use jshint-stylish to make errors look and read good
				reporter: require('jshint-stylish')
			},
			build: ['Gruntfile.js', 'states/**/*.js']
		},

		// Empty folders to start fresh -----------------------------------
		clean: {
			dist: {
				files: [{
					dot: true,
					src: [
						'.tmp',
						'dist/css/*',
						'dist/fonts/*',
						'dist/images/*',
						'dist/js/*',
						'dist/js_components/**/*',
						'dist/states/**/*',
					]
				}]
			},
		},

		// configure concat  ------------------------------------
		concat: {
			dist: {}
		},


		// Copy the html files of each state  ------------------------------------
		copy: {
			main: {
				files: [
					{
						expand: true,
						cwd: '',
						src: 'states/**/*.html',
						dest: 'dist',
					},
				],
			},
			assets: {
				files: [
					{
						expand: true,
						cwd: '',
						src: 'fonts/*',
						dest: 'dist',
					},
					{
						expand: true,
						cwd: '',
						src: 'images/*.ico',
						dest: 'dist',
					},
					{
						expand: true,
						cwd: '',
						src: 'resources/**/*',
						dest: 'dist',
					},
					{
						expand: true,
						cwd: '',
						src: 'js_components/directives/**/*.html',
						dest: 'dist',
					},
				]
			},
		},

		// configure uglify to minify js files -------------------------------------
//		uglify: {
//			options: {
//				banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
//			},
//			build: {
//				files: {
//					'dist/js/app.js': 'states/**/*.js',
//				}
//			}
//		},

		// configure cssmin to minify css files ------------------------------------
//		cssmin: {
//			options: {
//				banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
//			},
//			build: {
//				files: {
//					'dist/css/style.css': 'assets/css/style.css',
//					'dist/css/normalize.css': 'assets/css/normalize.css'
//				}
//			}
//		},

		/*
		// configure wiredep to inject bower dependencies ------------------------------------
		wiredep: {
			task: {
				src: ['index.html']
			}
		},
		*/

		// Renames files for caching purposes ------------------------------------
		filerev: {
			dist: {
				src: [
					'dist/js/*.js',
					'dist/css/*.css'
				]
			}
		},


		// Reads HTML for usemin blocks to enable smart builds that automatically concat, minify and revision files.
		// Creates configurations in memory so additional tasks can operate on them.
		// configure usemin to enable builds ------------------------------------
		useminPrepare: {
			html: 'index.html',
			options: {
				dest: 'dist',
				flow: {
					html: {
						steps: {
							js: ['concat', 'uglify'],
							css: ['cssmin']
						},
						post: {}
					}
				}
			}
		},

		// Performs rewrites based on the useminPrepare configuration ------------------------------------
		usemin: {
			html: [ 'dist/index.html' ] ,
			//css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
			js: [ 'dist/js/*.js'],
			options: {
				assetsDirs: [
					'dist',
					//'<%= yeoman.dist %>/images',
					//'<%= yeoman.dist %>/styles'
				],
				patterns: {
					js: [[/(images\/[^''""]*\.(png|jpg|jpeg|gif|webp|svg))/g, 'Replacing references to images']]
				}
			}
		},

		// Minifies images located in the assets folder ------------------------------------
		imagemin: {
			dist: {
				files: [{
					expand: true,
					cwd: 'images',
					src: '{,*/}*.{png,jpg,jpeg,gif}',
					dest: 'dist/images'
				}]
			}
		},

		// Minifies svg files located in the assets folder ------------------------------------
		svgmin: {
			dist: {
				files: [{
					expand: true,
					cwd: 'images',
					src: '{,*/}*.svg',
					dest: 'dist/images'
				}]
			}
		},

	});

	// Load the plugins.
	grunt.loadNpmTasks( 'grunt-contrib-clean' );
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-concat' );
	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks( 'grunt-filerev' );
	grunt.loadNpmTasks( 'grunt-contrib-imagemin' );
	grunt.loadNpmTasks( 'grunt-usemin' );
	grunt.loadNpmTasks( 'grunt-svgmin' );

	// Default task(s).
	grunt.registerTask( 'restart', [ 'clean' ]);
	grunt.registerTask( 'copy-states', [ 'copy' ]);
	grunt.registerTask( 'copy-assets', [ 'copy:assets' ]);
	grunt.registerTask( 'minify-images', [ 'imagemin', 'svgmin' ]);
	grunt.registerTask( 'verify-js', [ 'jshint' ]);
	grunt.registerTask( 'build', [
		'restart',
		'copy-states',
		'copy-assets',
		//'jshint',
		'minify-images',
		'useminPrepare',
		'concat',
		'cssmin',
		'uglify',
		'filerev',
		'usemin'
	] );
};
