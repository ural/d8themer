(function ($, Drupal) {
  'use strict';
  // Override the default implementation of Drupal.theme.placeholder with our
  // own custom one.
  Drupal.theme.placeholder = function(str) {
    return '<span class="friendly-placeholder">' + Drupal.checkPlain(str) + '</span>';
  };

  // If we have a nice user name, let's replace the
  // site name with a greeting.
  var siteLogo = $("#block-eg-branding");
  if (drupalSettings.friendly.name) {
    siteLogo.append('<h4 class="howdy">Howdy, ' + Drupal.theme('placeholder', drupalSettings.friendly.name) + '!</h4>');
  }
  siteLogo.append('<span> @ TZ  ' + Drupal.theme('placeholder', drupalSettings.user_tz) + '</span>');

})(jQuery, Drupal);
