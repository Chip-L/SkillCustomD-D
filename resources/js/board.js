"use strict";

var Board = window.Board || {};

Board.Screen = (function($) {
  var Screen = function () {

    this.init = function () {
      $header = $('.header');
      $footer = $('.footer');
      $mainBody = $('.main_body');

      $mainBody.attr('height', $header.attr('height') + $footer.attr('height'));
      $('#demo').text($mainBody.attr('height'));
    }

  }

  var setScreen = function (className) {
    return $(className).attr("height");
  }
}) (jQuery);
