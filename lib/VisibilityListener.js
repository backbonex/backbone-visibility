define(['./Visibility'], function (Visibility) {
    "use strict";

    /**
     * @mixin VisibilityListener
     * @extends Backbone.View
     */
    var VisibilityListener = /** @lends VisibilityListener */{

        /**
         * @constructor
         * @protected
         */
        initialize: function () {
            this._super();

            if (!this.isVisible()) {
                Visibility.addInvisibleElement(this);
            }
        },

        /**
         * @returns {boolean}
         */
        isVisible: function () {
            return this.$el.is(':visible');
        },

        /**
         * @returns {Backbone.View}
         */
        update: function () {
            if (this.isVisible()) {
                this._update();
            } else {
                Visibility.addInvisibleElement(this);
            }
            return this;
        },

        /**
         * @protected
         */
        _update: function () {
        }
    };

    return VisibilityListener;
});
