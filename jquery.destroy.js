/**
 * @license MIT http://mu-lib.mit-license.org/
 */
define([ "jquery" ], function ($) {
	"use strict";

	/**
	 * Extends {@link jQuery} with:
	 *
	 *  - {@link $#event-destroy} event
	 *
	 * @class mu-lib.jquery.destroy
	 * @static
	 * @alias plugin.jquery
	 */

	var DESTROY = "destroy";

	/**
	 * @class $
	 */

	/**
	 * A special jQuery event whose handler will be called, only when this handler it's removed from the element.
	 * @event destroy
	 */
	$.event.special[DESTROY] = {
		"noBubble" : true,

		"trigger" : function () {
			return false;
		},

		"remove" : function onDestroyRemove(handleObj) {
			var me = this;

			if (handleObj) {
				handleObj.handler.call(me, $.Event(handleObj.type, {
					"data" : handleObj.data,
					"namespace" : handleObj.namespace,
					"target" : me
				}));
			}
		}
	};
});
