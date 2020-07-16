<?php 
	// make sure this file is called by wp
	defined( 'ABSPATH' ) or die();
	/**
	 * Check if a post is a custom post type.
	 * @param  string - class name
	 * @return string
	 */
	if ( ! function_exists( 'mlc_svg_display' ) ) :
		function mlc_svg_display($className = 'logo') {
			return '<svg><use xlink:href="#icon-'.$className.'" /></svg>';
		}
	endif;

	/**
	 * Converts strings to React Component Name Convention
	 * @param  string
	 * @return string
	 */
	function mlc_react_case($str, $noStrip = []) {
		// non-alpha and non-numeric characters become spaces
		$str = preg_replace('/[^a-z0-9' . implode("", $noStrip) . ']+/i', ' ', $str);
		$str = trim($str);
		// uppercase the first character of each word
		$str = ucwords($str);
		$str = str_replace(" ", "", $str);
		$str = ucwords($str);

		return $str;
	}

	/**
	 * Converts strings special characters & entities, used to pass content to React
	 * @param  string
	 * @return string
	 */
	function mlc_entities($string) {
		return htmlspecialchars(htmlentities($string), ENT_QUOTES);
	}

	/**
	 * Converts strings to lower case and removes spaces
	 * @param  string
	 * @return string
	 */
	function mlc_clean($string) {
	   $string = strtolower(str_replace(' ', '_', $string)); // Replaces all spaces with hyphens.
	   return preg_replace('/[^A-Za-z0-9\-]/', '', $string); // Removes special chars.
	}
?>