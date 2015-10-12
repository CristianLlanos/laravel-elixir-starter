// process.env.DISABLE_NOTIFIER = true;
var $ = require('./app');
var elixir = require('laravel-elixir');

elixir(function(mix) {
	mix
		.less('app.less', 'public/css/app.min.css')
		.scripts($.scripts({
			jQuery: true,
			bootstrap: [
				'affix',
				'alert',
				'button',
				'carousel',
				'collapse',
				'dropdown',
				'modal',
				'tooltip',
				'popover',
				'scrollspy',
				'tab',
				'transition',
			],
			prism: {
				components: [
					'markup',
					'css',
					'clike',
					'javascript'
				],
				plugins: [
					'autoloader'
				]
			},
			assets: [
				'app.js'
			]
		}), 'public/js/app.min.js');
	mix.copy($.bower('bootstrap/fonts', true), 'public/fonts')
	mix.copy($.bower('font-awesome/fonts', true), 'public/fonts')
	// 	.browserSync()
});

