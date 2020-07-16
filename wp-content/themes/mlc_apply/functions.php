<?php
/**
 * Theme Functions &
 * Functionality
 *
 */

if(!class_exists('ACF') && !is_admin())
	die('Need to activate Advanced Custom Fields Plugin for theme to work');

/* =========================================
	Remove some actions from wp_head for theme optimization 
 ========================================= */

remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'start_post_rel_link');
remove_action('wp_head', 'index_rel_link');
remove_action('wp_head', 'adjacent_posts_rel_link');


require get_template_directory() . '/class/class-mlc-header.php';
require get_template_directory() . '/class/class-mlc-footer.php';

require get_template_directory() . '/lib/theme-enqueue.php';
require get_template_directory() . '/lib/theme-helpers.php';
require get_template_directory() . '/lib/theme-customizations.php';
require get_template_directory() . '/lib/theme-template-tags.php';
require get_template_directory() . '/lib/theme-acf-blocks.php';
