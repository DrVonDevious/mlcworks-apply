<?php
/**
 * * @package MLCworks
 */
?>
<article id="post-<?php the_ID(); ?>" <?php post_class('page-content'); ?>>
	<?php
	// Get the content
	the_content();
	?>
</article><!-- #post-## -->
