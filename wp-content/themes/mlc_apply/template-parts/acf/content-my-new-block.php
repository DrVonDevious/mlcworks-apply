<?php 
	$data = array();

	// Assign Title Field
	$data['title'] = mlc_entities(get_field('title'));

	// We will be assigning all Attributes to an array, so lets start with blank array
	$data['attributes'] = array();

	// Loop through all Attributes Fields
	while(have_rows('attributes')):the_row();
		// Assign Fields to our Attributes array
		$data['attributes'][] = array(
			'label' => mlc_entities(get_sub_field('label')),
			'content' => mlc_entities(get_sub_field('content')),
		);
	endwhile;
 ?>

<div data-component="MyNewBlock" data-props='<?php echo json_encode($data); ?>'></div>
