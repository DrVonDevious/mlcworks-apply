<?php 

/**
 * Enqueue all Theme Scripts & Styles
 *
 * @package MLCworks
 */

defined( 'ABSPATH' ) or die();

add_action( 'wp_enqueue_scripts', 'theme_styles');

add_action( 'admin_enqueue_scripts', 'admin_styles', 10);

add_action( 'wp_enqueue_scripts', 'theme_scripts' );



/**
 * Register and/or Enqueue
 * Styles for the theme
 *
 * @since 1.0
 */
function theme_styles() {

	$theme_dir = get_template_directory_uri();

	wp_enqueue_style( 'main', "$theme_dir/inc/css/style.css", array(), '1.1.1' );

	// Dequeue Default Styles
	wp_dequeue_style( 'wp-block-library' );

	// Dequeue Yoast
	wp_dequeue_style('wp-components-css');
	wp_dequeue_style('wp-editor-font-css');
}

function admin_styles() {
	$theme_dir = get_template_directory_uri();
	wp_register_style( 'mlc-admin', "$theme_dir/inc/admin/style.min.css", false, '1.0.2' );
	wp_enqueue_style( 'mlc-admin' );
	wp_dequeue_style( 'wp-block-library' );

	// Include Bundle File
	wp_enqueue_script( 'mlc-admin', "$theme_dir/inc/js/bundle.js", false, '1.0.9', true );
}


/**
 * Register and/or Enqueue
 * Scripts for the theme
 *
 * @since 1.0
 */
function theme_scripts() {
	$theme_dir = get_template_directory_uri();
	// Include jQuery to prevent any breakage
	wp_enqueue_script( 'jquery-core' );
	// Include Bundle File
    wp_enqueue_script( 'mlc', "$theme_dir/inc/js/bundle.js", array(), '1.0.0', true );
}