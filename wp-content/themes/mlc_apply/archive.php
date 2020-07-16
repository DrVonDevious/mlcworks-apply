<?php
/**
 * The template for displaying default pages.
 *
 * @package SproutPediatrics
 */

get_header(); ?>

<main id="main" class="site-main">
	<?php 
		if(!is_front_page())
			get_template_part( 'template-parts/modules/content', 'title' );
	 ?>
	<div class="container" id="content">
		<div class="row">
			<div class="col-sm-12">
				<?php
				get_template_part( 'template-parts/modules/blog', 'filter' );
				while ( have_posts() ) : the_post();
					// Page content template
					get_template_part( 'template-parts/content/content-excerpt' );
				endwhile; 
				the_posts_pagination();
				?>
			</div>
		</div>
	</div>

</main><!-- #main -->

<?php get_footer(); ?>
