import React 								from 'react'
import {htmlDecode} 						from '../helpers/functions'
import MainLogo 							from '../../../../assets/svg/MlcLogo.svg'
import {viewports} 							from '../helpers/viewports'

class Footer extends React.PureComponent {

	render() {

		const {
			site_url
		} = this.props

		return (
			<footer id="footer" className="footer">
				<div className="container">
					<a href={site_url} className="footer--logo">
						<MainLogo />
					</a>
				</div>
			</footer>
		);
	}
}

export default Footer;