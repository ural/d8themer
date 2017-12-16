/*
**
* @file
* custom Javascript for ninesixtyrobots theme.
*/


(function ($) {

  Drupal.behaviors.testScript = {
    attach: function (context, settings) {

      $("#block-eg-main-menu > h2.removable-class", context).once('testScript', function () {
        $(document).keyup(function (e) {
          if (e.keyCode == 27) {
            $("#block-eg-main-menu > h2.removable-class", context).removeClass("visually-hidden");
          }
        });
      });

    }
  };

})(jQuery);
