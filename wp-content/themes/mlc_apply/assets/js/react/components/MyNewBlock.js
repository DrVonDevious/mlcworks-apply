import React 					from 'react'
import {htmlDecode} 			from '../helpers/functions'

class MyNewBlock extends React.PureComponent {
	render() {
		const {
			title,
			attributes
		} = this.props
		console.log(this.props)
		return (
			<div className="my-new-block">
				{
					title &&
					<h2>{title}</h2>
				}
				{
					attributes &&
					<div className="my-new-block__attributes">
						{
							attributes.map((attribute,key)=>(
								<div className="my-new-block__attributes--item" key={key}>
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


export default MyNewBlock;