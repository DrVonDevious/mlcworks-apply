import React 					from 'react'
import {htmlDecode} 	from '../helpers/functions'

class GoodestBoiBlock extends React.PureComponent {
	render() {
		const {
			title,
			attributes
		} = this.props
		
		return (
			<div className="goodest-boi-block">
				{
					title &&
					<h2>{title}</h2>
				}

				{
					attributes &&
					<div className="goodest-boi-block__attributes">
						{
							attributes.map((attribute,key)=>(
								<div className="goodest-boi-block__attributes--item" key={key}>
									<h3 dangerouslySetInnerHTML={{ __html: htmlDecode(attribute.label) }}/>
									<div dangerouslySetInnerHTML={{ __html: htmlDecode(attribute.content) }}/>
								</div>
							))
						}
					</div>
				}
			</div>
		);
	}
}


export default GoodestBoiBlock;
