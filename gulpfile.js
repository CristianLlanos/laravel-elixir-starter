var elixir = require('laravel-elixir');
var $ = require('./app').drink(elixir);

// Diable Elixir notifications
// process.env.DISABLE_NOTIFIER = true;

elixir(function(mix) {
	mix
		/*
		 |---------------------------------------------------------------------
		 | Less
		 |---------------------------------------------------------------------
		 | 
		 | Mixes given less files with a base path relative to the config
		 | [assetsPath.css.less.folder].
		 |
		 */
		.sass('app.scss')

		/*
		 |---------------------------------------------------------------------
		 | Scripts
		 |---------------------------------------------------------------------
		 | 
		 | Mixes given scripts with base path in [assetsPath.js.folder].
		 | 
		 */
		.scripts([

			/*
			 |-----------------------------------------------------------------
			 | jQuery
			 |-----------------------------------------------------------------
			 | 
			 | A handful of helpers and shortcuts for writing scripts
			 | compatible among various browsers.
			 | 
			 */
			'../bower/jquery/dist/jquery.js'

			/*
			 |-----------------------------------------------------------------
			 | Bootstrap
			 |-----------------------------------------------------------------
			 | 
			 | Bootstrap's plugins.
			 | 
			 */
			, '../bower/bootstrap/js/affix.js'
			, '../bower/bootstrap/js/alert.js'
			// , '../bower/bootstrap/js/button.js'
			// , '../bower/bootstrap/js/carousel.js'
			// , '../bower/bootstrap/js/collapse.js'
			// , '../bower/bootstrap/js/dropdown.js'
			// , '../bower/bootstrap/js/modal.js'
			// , '../bower/bootstrap/js/tooltip.js'
			// , '../bower/bootstrap/js/popover.js'
			// , '../bower/bootstrap/js/scrollspy.js'
			// , '../bower/bootstrap/js/tab.js'
			// , '../bower/bootstrap/js/transition.js'
			, 'app.js'
		]

		/*
		 |---------------------------------------------------------------------
		 | Output file
		 |---------------------------------------------------------------------
		 |
		 | File that will contain all previously specified scripts.
		 | When in production mode, the content will be minified
		 | for performance purposes.
		 |
		 */
		//, 'public/js/app.js'

		)

		/*
		 |---------------------------------------------------------------------
		 | Copy
		 |---------------------------------------------------------------------
		 |
		 | Copies files from the project root to a given path.
		 |
		 */
		.copy('resources/bower/bootstrap/fonts', 'public/fonts')
		.copy('resources/bower/font-awesome/fonts', 'public/fonts')

	/*
	 |-------------------------------------------------------------------------
	 | Custom middlewares
	 |-------------------------------------------------------------------------
	 | 
	 | Provides a handy way to override Elixir tasks' default
	 | configurations.
	 |
	 */
	$.also(mix)

		/*
		 |---------------------------------------------------------------------
		 | BrowserSync
		 |---------------------------------------------------------------------
		 | 
		 | Browsersync makes your browser testing workflow faster by
		 | synchronizing URLs, behavior, and code changes across
		 | multiple devices.
		 |
		 */
		.browserSync({ proxy: 'localhost:8000' })
});

