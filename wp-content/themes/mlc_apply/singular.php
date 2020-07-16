<?php
/**
 * The template for displaying default pages.
 *
 * @package MLCworks
 */

get_header(); ?>

<main id="main" class="site-main">
	<?php 
		if(!is_front_page())
			get_template_part( 'template-parts/modules/content', 'title' );
	 ?>
	<div id="content">
		<div class="container">
			<?php
			while ( have_posts() ) : the_post();
				// Page content template
				get_template_part( 'template-parts/content/content', get_post_type() );
			endwhile; 
			?>
		</div>
	</div>

</main><!-- #main -->

<?php get_footer(); ?>
