define(['backbone'], function (Backbone) {
    "use strict";

    var Visibility = {

        /**
         * @property
         * @type {Array}
         * @private
         */
        _invisibleElements: [],

        /**
         * @param {VisibilityListener} element
         */
        addInvisibleElement: function (element) {
            if (this._invisibleElements.indexOf(element) < 0) {
                this._invisibleElements.push(element);
            }
        },

        /**
         * @public
         */
        handleChanges: function () {
            this._invisibleElements = this._invisibleElements
                .filter(this._visibilityFilter, this);
        },

        /**
         * @param {VisibilityListener} element
         * @returns {boolean}
         * @private
         */
        _visibilityFilter: function (element) {
            var isVisible = element.isVisible();
            if (isVisible) {
                element.update();
            }
            return !isVisible;
        }
    };

    Backbone.on('change:visibility', Visibility.handleChanges, Visibility);

    return Visibility;
});
