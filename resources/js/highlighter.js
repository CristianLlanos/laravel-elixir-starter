+function (document, $, Prism) {
	"use strict";

	$(document).ready(function () {
		// Codes
		var $codeAreas = $('.code-area');
		var updateCode = function($codeArea) {
			var $textarea = $('<textarea>').html($codeArea.html().trim());
			var $code = $('<code>');
			$code.text($textarea.val() || '');
			$codeArea.append($('<pre class="language-markup">').append($code));
			Prism.highlightElement($code[0]);
		};
		$codeAreas.each(function(i) {
			updateCode($(this));
		});
	});

}(document, jQuery, Prism);