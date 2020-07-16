<?php 
/**
 * Customizer settings for this theme.
 *
 * @package MLCworks
 */
defined( 'ABSPATH' ) or die();

// Remome Media Upload to Year/Month folders
update_option( 'uploads_use_yearmonth_folders', 0 );

// Include SVG Template for Front End
add_action( 'wp_body_open', function() {
    get_template_part( 'template-parts/svgs' );
});

// Include SVG template for admin area
add_action( 'admin_head', function() {
    get_template_part( 'template-parts/svgs' );
});

/* =========================================
        HOOKED Functions
   ========================================= */

/**--- Actions ---**/

if( function_exists('acf_add_options_sub_page') ) {
    acf_add_options_sub_page(array(
        'title'         => 'Site Settings',
        'page_title'    => 'Site General Settings',
        'menu_title'    => 'Site Settings',
        'menu_slug'     => 'site-general-settings',
    ));
}



add_action( 'after_setup_theme',  'theme_setup' );

function theme_setup() {

    // Let wp know we want to use html5 for content
    add_theme_support( 'html5', array(
        'comment-list',
        'comment-form',
        'search-form',
        'gallery',
        'caption'
    ) );


    // Let wp know we want to use post thumbnails
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'align-wide' );

    // Define Image Sizes
    add_image_size( 'gallery-image', 1024);
    add_image_size( 'small-thumb', 840, 520, array('center', 'center'));
    add_image_size( 'image-block', 800, 600, array('center', 'center'));
    
    // Stop WP from printing emoji service on the front
    remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
    remove_action( 'wp_print_styles', 'print_emoji_styles' );
}


// Register Theme Menus
register_nav_menus( array(
    'primary' => __( 'Main Navigation', 'mlcworks' ),
) );


/**
 * Remove WYSWYG Editor From Types of Posts
 */
// add_action('init', 'remove_editor_from_post_type');
function remove_editor_from_post_type() {    
    remove_post_type_support( array(
        'attorneys', 'cases'
    ), 'editor' );
}

/**
 * Remove Pages from Admin Bar - Defaults Comments
 */
add_action('admin_menu', 'remove_admin_menu_pages');
function remove_admin_menu_pages(){
    // remove_menu_page('edit.php');
    remove_menu_page('edit-comments.php');
}

// Register Google Maps API Key for ACF
function acf_google_map_api_key(){
    if(get_field('google_maps_api_key','option')) {
        acf_update_setting('google_api_key', get_field('google_maps_api_key','option'));
    }
}

add_action('acf/init', 'acf_google_map_api_key');

/**
 * Fix Gravity Form Tabindex Conflicts
 * http://gravitywiz.com/fix-gravity-form-tabindex-conflicts/
 */

add_filter( 'gform_enable_field_label_visibility_settings', '__return_true' );

function gform_tabindexer( $tab_index, $form = false ) {
    $starting_index = 1000; // if you need a higher tabindex, update this number
    if( $form )
        add_filter( 'gform_tabindex_' . $form['id'], 'gform_tabindexer' );
    return GFCommon::$tab_index >= $starting_index ? GFCommon::$tab_index : $starting_index;
}


// Remove Gfrom Tab Indexer
add_filter( 'gform_tabindex', '__return_false' );

?>