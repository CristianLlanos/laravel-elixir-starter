var _ = require('underscore');

var app = {};

app.drink = function(elixir) {
	this.config = elixir.config;

	return this;
}

app.also = function(mix) {
	this.mix = mix;

	return this;
};

app.browserSync = function(options) {
	var overrides = _.extend({
			files: [
				this.config.appPath + '/**/*.php',
			    this.config.publicPath + '/*.html',
			    this.config.get('public.css.outputFolder') + '/**/*.css',
			    this.config.get('public.js.outputFolder') + '/**/*.js',
			    this.config.get('public.versioning.buildFolder') + '/rev-manifest.json'
			],
		}, options);

    this.mix.browserSync(overrides);

	return this;
};

module.exports = app;