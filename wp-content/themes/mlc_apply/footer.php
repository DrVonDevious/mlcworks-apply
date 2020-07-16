<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package MLCworks
 */
$data = new MlcFooter;
?>
	<div data-component="Footer" data-props='<?php echo json_encode($data); ?>'></div>
	<div id="portal"></div>
</div> <!-- #site -->

<?php
wp_footer(); 
?>
</body>
</html>
