<?php
/**
 *
 * @package MLCworks
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(array('container', 'entry-wrapper')); ?>>
	<div class="row">
		<div class="col-sm-4">
			<?php the_post_thumbnail(); ?>
		</div>
		<div class="col-sm-8">
			<header class="entry-header">
				<?php
				the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' );
				the_modified_date('M d,Y', '<span class="entry-date"><strong>Posted:</strong> ', '</span>');

				mlc_entry_tags();
				?>
			</header><!-- .entry-header -->

			<div class="entry-content">
				<?php 
					the_excerpt(); 

					echo sprintf( '<a href="%s" rel="bookmark" class="btn">Read Post</a>', esc_url( get_permalink()));
				?>
			</div><!-- .entry-content -->
		</div>
	</div>
</article><!-- #post-${ID} -->
