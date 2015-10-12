var App = module.exports = {};

App.bower = function(files, root) {
	root = root || false;
	var folder = 'bower_components/';
	if ( ! root) folder = '../../' + folder;
	// Relative to resources/js folder
	if (typeof files == "string")
		return folder + files;
	return files.map(function(file) {
		return file.charAt(0) == '!' ? '!' + folder + file.slice(1) : folder + file;
	});
};

App.jQuery = function(config, Bower) {
	return {
		scripts: function() {
			return ['jquery/dist/jquery.js'];
		}
	};
};

App.bootstrap = function(config, Bower) {
	return {
		scripts: function() {
			return [].concat(config).map(function(script) {
				return 'bootstrap/js/' + script + '.js';
			});
		}
	};
};

App.prism = function(options, Bower) {
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

App.scripts = function(options) {
	var files = [];

	if (options.jQuery) files = files.concat(App.jQuery(options.jQuery).scripts());
	if (options.bootstrap) files = files.concat(App.bootstrap(options.bootstrap).scripts());
	if (options.prism) files = files.concat(App.prism(options.prism).scripts());

	return App.bower(files).concat(options.assets || []);
};
