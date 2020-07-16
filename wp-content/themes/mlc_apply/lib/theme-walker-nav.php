<?php
/**
 * Walker Nav Menu extension
 * to support BEM class naming
 * conventions
 *
 * @author Max G J Panas <http://maxpanas.com>
 */


// make sure this file is called by wp
defined( 'ABSPATH' ) or die();



/**
 * Class MOZ_Walker_Nav_Menu
 *
 * Prints the Html for the multi tier navigation
 * menus
 *
 * @since 1.0
 *
 * @uses  Walker_Nav_Menu
 */
class MLC_Walker_Nav_Menu extends Walker_Nav_Menu {
	function start_lvl(&$output, $depth = 0, $args = array()) {
		$indent = str_repeat("\t", $depth);
		$output .= "\n$indent<div class=\"sub-menu-wrap\"><ul class=\"sub-menu\">\n";
	}
	function end_lvl(&$output, $depth = 0, $args = array()) {
		$indent = str_repeat("\t", $depth);
		$output .= "$indent</ul></div>\n";
	}
}