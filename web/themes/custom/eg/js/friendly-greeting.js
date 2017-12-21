(function ($, Drupal) {
  // Override the default implementation of Drupal.theme.placeholder with our
  // own custom one.
  Drupal.theme.placeholder = function(str) {
    return '<em class="friendly-placeholder">' + Drupal.checkPlain(str) + '</em>';
  }

  // If we have a nice user name, let's replace the
  // site name with a greeting.
  if (drupalSettings.friendly.name) {
    //var siteName = document.getElementsByClassName('site-name')[0];
    var siteLogo = $("#block-eg-branding");
    siteLogo.append('<h4 class="howdy">Howdy, ' + Drupal.theme('placeholder', drupalSettings.friendly.name) + '!</h4>');
    //siteName.getElementsByTagName('a')[0].innerHTML = '<h1>Howdy, ' + Drupal.theme('placeholder', drupalSettings.friendly.name) + '!</h1>';
  }

})(jQuery, Drupal);
