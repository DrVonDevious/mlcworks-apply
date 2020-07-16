<?php 

	class MlcHeader {
		public function __construct() {

			$this->site_url = get_site_url();

			$this->site_name = mlc_entities(get_field('site_title', 'option'));
		}
	}
 ?>