<?php

defined( 'ABSPATH' ) or die();
	/**
	 * Used to determine Title based off Post Type
	 * @param  
	 * @return HTML
	 */
	if ( ! function_exists( 'mlc_page_title' ) ) :
		function mlc_page_title() {

			if(is_archive() && !is_post_type_archive()){
				$title = get_the_title(get_option( 'page_for_posts' ));
			} elseif(is_home()){
				$title = get_the_title(get_option( 'page_for_posts' ));
			} elseif(is_404()){
				$page = get_field('404_page', 'option');
				$title = $page->post_title;
			} elseif(is_tag()){
				$title = single_tag_title("", false);
			} elseif(is_post_type_archive()){
				$obj = get_post_type_object( $post->post_type );
		    	$title = get_queried_object()->label;
			} elseif(is_single()){
				$title = get_the_title(get_option( 'page_for_posts' ));
			}else{
				$title = get_the_title();
			}

			if(is_page()){
				$title = get_the_title();
			}
			
			echo sprintf('<h1 class="page-title">%s</h1>', $title);
		}
	endif;