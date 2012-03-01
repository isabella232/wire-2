/** @license MIT License (c) copyright B Cavalier & J Hann */

/**
 * wire/jquery/dom plugin
 * jQuery-based dom! resolver
 *
 * wire is part of the cujo.js family of libraries (http://cujojs.com/)
 *
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 */

define(['../plugin-base/dom', 'jquery'], function(createDomPlugin, jquery) {

	return createDomPlugin({
		query: jquery,
		addClass: function(node, cls) {
			jquery(node).addClass(cls);
		},
		removeClass: function(node, cls) {
			jquery(node).removeClass(cls);
		}
	});

});