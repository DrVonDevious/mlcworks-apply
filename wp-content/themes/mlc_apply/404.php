<?php
/**
 * The template for displaying 404 pages (Not Found).
 *
 * * @package SproutPediatrics
 */

get_header(); ?>

	<main id="main" class="site-main">

		<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
			<?php 
				if(!is_front_page()){
					get_template_part( 'template-parts/content', 'title' );
				}
			 ?>
			<div class="post-content <?php echo get_field('page_banner') ? 'post-content-banner' : ''; ?>">
				<div class="container entry-content">
					<?php
					// Get the content
					$page = get_field('404_page', 'option');
					$content = apply_filters('the_content', get_post_field('post_content', $page->ID));

					echo $content;
					// Post pagination links
					wp_link_pages( array(
						'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'pe_contractors' ),
						'after'  => '</div>',
					) );?>
				</div><!-- .entry-content -->
			</div><!-- .post-content-->
			<?php get_template_part( 'template-parts/content-footer', 'contact' ); ?>
		</article><!-- #post-## -->

	</main><!-- #main -->
<?php get_footer(); ?>
