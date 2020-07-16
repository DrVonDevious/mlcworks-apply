<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package MLCworks
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<title><?php wp_title('|', true, 'right'); ?> <?php echo get_field('site_title', 'option'); ?></title>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
<?php 
	// WP Head
	wp_head();
?>
</head>
<body <?php body_class(); ?>>
<?php 
	wp_body_open();

	$data = new MlcHeader;
 ?>
 
<div id="site" class="hfeed site">
	<div data-component="Header" data-props='<?php echo json_encode($data); ?>'></div>