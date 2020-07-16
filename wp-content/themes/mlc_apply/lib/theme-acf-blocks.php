<?php 
/**
 * Define all theme ACF Custom Blocks
 *
 * @package MLCworks
 */

defined( 'ABSPATH' ) or die();

if( function_exists('acf_register_block') ) {
	// Contact Block
	add_action('acf/init', 'acf_mlc_blocks');
}

function acf_mlc_blocks() {
	// Hero Banner
	acf_register_block(array(
		'name'				=> 'dog-slider',
		'title'				=> __('Dog Slider'),
		'description'		=> __('Really just a dog slider'),
		'render_callback'	=> 'acf_block_render_callback',
		'category'			=> 'formatting',
		'icon'				=> 'admin-comments',
		'keywords'			=> array( 'dog', 'dog slider' , 'slider'),
	));
}

function acf_block_render_callback( $block ) {
	$slug = str_replace('acf/', '', $block['name']);
	
	// include a template part from within the "template-parts/block" folder
	if( file_exists( get_theme_file_path("/template-parts/acf/content-{$slug}.php") ) ) {
		include( get_theme_file_path("/template-parts/acf/content-{$slug}.php") );
	}
}