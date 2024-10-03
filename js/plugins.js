/* plugins.js */

/*!
 * Hammer.JS - v2.0.4 - 2014-09-28
 * http://hammerjs.github.io/
 * 
 * Copyright (c) 2014 Jorik Tangelder;
 * Licensed under the MIT license.
 */

(function(window, document, exportName, undefined) {
    'use strict';

    // Plugin code goes here

    var Hammer = window.Hammer || {};

    Hammer.VERSION = '2.0.4';

    // Check for touch support and other input methods
    var SUPPORT_TOUCH = 'ontouchstart' in window;
    var SUPPORT_POINTER_EVENTS = window.PointerEvent !== undefined;
    var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && !SUPPORT_POINTER_EVENTS;

    // Add event listeners for touch and mouse input
    function addEventListeners(target, types, handler) {
        types.split(' ').forEach(function(type) {
            target.addEventListener(type, handler, false);
        });
    }

    // Remove event listeners for touch and mouse input
    function removeEventListeners(target, types, handler) {
        types.split(' ').forEach(function(type) {
            target.removeEventListener(type, handler, false);
        });
    }

    // Export Hammer globally
    window[exportName] = Hammer;

})(window, document, 'Hammer');
