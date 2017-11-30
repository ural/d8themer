<?php
/**
 * @file
 * Contains \Drupal\rsvplist\Form\RSVPSettingsForm
 */

namespace Drupal\rsvplist\Form;

use Drupal\Core\Form\ConfigFormBase;
use Symfony\Component\HttpFoundation\Request;
use Drupal\Core\Form\FormStateInterface;

/**
 * Defines a form to configure RSVP LIst module settings
 */

class RSVPSettingsForm extends ConfigFormBase {
  /**
   * {@inheritcoc}
   */
  public function getFormId() {
    return 'rsvplist_admin_settings';
  }
  /**
   * {@inheritcoc}
   */
  protected function getEditableConfigNames() {
    return [
      'rsvplist.settings'
    ];
  }


}