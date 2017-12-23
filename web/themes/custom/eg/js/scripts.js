/*
**
* @file
* custom Javascript for theme.
*/


(function ($) {
  'use strict';

  Drupal.behaviors.testScript = {
    attach: function (context, settings) {

      $(context).find('#block-eg-main-menu > h2.removable-class').once('testScript').each(function () {
        $(document).keyup(function (e) {
          if (e.keyCode == 27) {
            $("#block-eg-main-menu > h2.removable-class", context).removeClass("visually-hidden");
          }
        });
      });

    }
  };

  Drupal.behaviors.toggleShow = {
    attach: function (context, settings) {

      $(context).find(".view-display-id-block_1 h1").on("click", function () {

        var toggleP = $(this).find("p:nth-child(2)");
        toggleP.slideToggle("slow");
      });

    }
  }

})(jQuery);
