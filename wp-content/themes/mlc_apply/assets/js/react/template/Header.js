import React 					from 'react'
import {htmlDecode} 			from '../helpers/functions'
import {viewports} 				from '../helpers/viewports'
import MainLogo 				from '../../../../assets/svg/MlcLogo.svg'

class Header extends React.PureComponent {

	constructor(props) {
		super(props)

		this.state = {
			width: 0,
			fromTop: 0
		}

		this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
	}

	componentDidMount() {
		this.updateWindowDimensions()
		window.addEventListener('resize', this.updateWindowDimensions)
		window.addEventListener('scroll', this.updateWindowDimensions)
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions)
		window.removeEventListener('scroll', this.updateWindowDimensions)
	}

	updateWindowDimensions() {
		this.setState({ 
			width: window.innerWidth,
			fromTop: window.scrollY,
		})
	}

	render() {

		const {
			site_url,
			site_name,
		} = this.props

		const {
			width,
			fromTop,
		} = this.state

		return (
			<header id="header" className={fromTop > 300 ? `header sticky` : `header`}>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-sm-3">
							<a href={site_url} className={`header--logo`}>
								<MainLogo />
							</a>
						</div>
						<div className="col-sm-9">
							{
								site_name &&
								<h1 className={`header--title`} dangerouslySetInnerHTML={{ __html: htmlDecode(site_name) }} />
							}
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;