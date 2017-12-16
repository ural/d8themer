/*
**
* @file
* custom Javascript for ninesixtyrobots theme.
*/


(function ($) {

  Drupal.behaviors.testScript = {
    attach: function (context, settings) {

      $(context).find('#block-eg-main-menu > h2.removable-class').once('testScript').each(function () {
        $(document).keyup(function (e) {
          if (e.keyCode == 27) {
            $("#block-eg-main-menu > h2.removable-class", context).removeClass("visually-hidden");
          }
        });
      });

/*
      $("#block-eg-main-menu > h2.removable-class", context).once('testScript').each(function () {
        $(document).keyup(function (e) {
          if (e.keyCode == 27) {
            $("#block-eg-main-menu > h2.removable-class", context).removeClass("visually-hidden");
          }
        });
      });
*/

    }
  };

})(jQuery);
