var elixir = require('laravel-elixir');
var _ = require('underscore');

var config = elixir.config;

var $ = module.exports = {};

$.bower = function(files, root) {
	root = root || false;
	var folder = '';
	if ( ! root) folder = '../../';
	folder += 'bower_components/';
	// Relative to resources/js folder
	if (typeof files == "string")
		return folder + files;
	return files.map(function(file) {
		return file.charAt(0) == '!' ? '!' + folder + file.slice(1) : folder + file;
	});
};

$.jQuery = function(config, Bower) {
	return {
		scripts: function() {
			return ['jquery/dist/jquery.js'];
		}
	};
};

$.bootstrap = function(config, Bower) {
	return {
		scripts: function() {
			return [].concat(config).map(function(script) {
				return 'bootstrap/js/' + script + '.js';
			});
		}
	};
};

$.prism = function(options, Bower) {
	return {
		scripts: function() {
			var components = ['core']
				.concat(options.components)
				.map(function(component) {
					return 'prism/components/prism-' + component + '.js';
				})
				.concat(['!prism/components/*.min.js']);
			var plugins = []
				.concat(options.plugins)
				.map(function(plugin) {
					return 'prism/plugins/' + plugin + '/prism-' + plugin + '.js';
				})
				.concat(['!prism/plugins/**/*.min.js']);

			return [].concat(components).concat(plugins);
		}
	}
};

$.please = function(mix) {
	$.mix = mix;
	return $;
};

$.scripts = function(options, toPath) {
	var files = [];

	if (options.jQuery) files = files.concat($.jQuery(options.jQuery).scripts());
	if (options.bootstrap) files = files.concat($.bootstrap(options.bootstrap).scripts());
	if (options.prism) files = files.concat($.prism(options.prism).scripts());

	$.mix.scripts($.bower(files).concat(options.assets || []), toPath);
	return $;
};

$.copy = function(from, to) {
	$.mix.copy($.bower(from, true), to);
	return $;
};

$.browserSync = function(options) {
	var conf = _.extend(config.browserSync, {
			files: [
				config.appPath + '/**/*.php',
			    config.publicPath + '/*.html',
			    config.get('public.css.outputFolder') + '/**/*.css',
			    config.get('public.js.outputFolder') + '/**/*.js',
			    config.get('public.versioning.buildFolder') + '/rev-manifest.json'
			],
			watchOptions: {
			    usePolling: true
			}
		}, options);
    $.mix.browserSync(conf);
	return $;
};
