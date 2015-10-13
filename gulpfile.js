// process.env.DISABLE_NOTIFIER = true;
var $ = require('./app');
var elixir = require('laravel-elixir');

elixir(function(mix) {
	mix.less('app.less', 'public/css/app.min.css')
	$.please(mix)
		.scripts({
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
					// 'autoloader'
				]
			},
			assets: [
				'app.js'
			]
		}, 'public/js/app.min.js')
		.copy('bootstrap/fonts', 'public/fonts')
		.copy('font-awesome/fonts', 'public/fonts')
		.browserSync({ proxy: 'localhost:8000' })
});
