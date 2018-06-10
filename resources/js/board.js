"use strict";

var Board = window.Board || {};

Board.Screen = (function($) {
  var Screen = function (className) {
    return $(className).attr("height");
  }
}) (jQuery);
