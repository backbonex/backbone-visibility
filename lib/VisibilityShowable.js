define(['underscore', 'backbone'], function (_, Backbone) {
    "use strict";

    /**
     * @mixin VisibilityShowable
     * @extends Backbone.View
     */
    var VisibilityShowable = /** @lends VisibilityShowable */{

        /**
         * @see {@link Backbone.View._classes}
         * @protected
         * @returns {Object}
         */
        _classes: function () {
            return _.defaults({
                'hidden': 'hidden'
            }, this._super());
        },

        /**
         * @param {Boolean} [visibility]
         * @fires VisibilityShowable#change:visibility
         * @returns {Backbone.View}
         */
        toggleVisibility: function (visibility) {
            var currentVisibillity = this._isVisible();
            if (typeof visibility === 'undefined') {
                return this.toggleVisibility(!currentVisibillity);
            }
            
            if (visibility != currentVisibillity) {
                this._toggleVisibility(visibility);
                /**
                 * @event Backbone#change:visibility
                 * @param {Boolean} visibility
                 */
                Backbone.trigger('change:visibility', visibility);
            }

            return this;
        },

        /**
         * @returns {boolean}
         * @protected
         */
        _isVisible: function () {
            return !this.$el.hasClass(this._class('hidden'));
        },

        /**
         * @param {boolean} visibility
         * @protected
         */
        _toggleVisibility: function (visibility) {
            this.$el.toggleClass(this._class('hidden'), !visibility);
        },

        /**
         * @returns {Backbone.View}
         */
        show: function () {
            this.toggleVisibility(true);
            return this;
        },

        /**
         * @returns {Backbone.View}
         */
        hide: function () {
            this.toggleVisibility(false);
            return this;
        }
    };

    return VisibilityShowable;
});
