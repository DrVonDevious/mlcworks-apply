import ReactHabitat 				from 'react-habitat'
import Header 						from './template/Header'
import Footer 						from './template/Footer'
import DogSlider 					from './components/DogSlider'
import MyNewBlock 					from './components/MyNewBlock'

class App extends ReactHabitat.Bootstrapper {
	constructor(){
		super()
		
		// Create a new container
		const containerBuilder = new ReactHabitat.ContainerBuilder()

		// Header
		containerBuilder.register(Header).as('Header')

		// Footer
		containerBuilder.register(Footer).as('Footer')

		// DogSlider
		containerBuilder.register(DogSlider).as('DogSlider')

		// MyNewBlock
		containerBuilder.register(MyNewBlock).as('MyNewBlock')

		// Set the DOM container
		this.setContainer(containerBuilder.build())
	}

	updateHabitat() {
		this.update()
	}
	
	reset() {
		this.dispose()
		this.setContainer(this.container)
	}
}

export default new App()