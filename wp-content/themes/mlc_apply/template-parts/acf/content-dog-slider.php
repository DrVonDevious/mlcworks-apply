<?php 
	$data = array();

	$slide_count = get_field('slide_count');

	$data['slides'] = array();
	for($i = 0; $i < $slide_count; $i++) {
		$data['slides'][] = array(
			'img' => 'https://placedog.net/970/400',
			'alt' => 'Dog Image Number ' . ($i + 1),
		);
	}
 ?>

<div data-component="DogSlider" data-props='<?php echo json_encode($data); ?>'></div>
