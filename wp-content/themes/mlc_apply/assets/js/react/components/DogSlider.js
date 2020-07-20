import React 			from 'react'
import Slider 			from 'react-slick'

class DogSlider extends React.PureComponent {
	render() {
		const {
			slides
		} = this.props

		const slideSettings = {
			infinite: true,
			speed: 400,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 5000,
			dots: true,
		}
		
		return (
			<div className="dog-slider">
				{
					slides &&
					<Slider {...slideSettings}>
						{
							slides.map((slide, key) =>(
								<div key={key}>
									{
										slide.img &&
										<img src={slide.img} alt={slide.alt} />
									}
								</div>
							))
						}
					</Slider>
				}
			</div>
		);
	}
}


export default DogSlider;