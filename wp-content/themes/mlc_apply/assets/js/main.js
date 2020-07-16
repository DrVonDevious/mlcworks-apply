import App from './react/App'

// React components do not render in Gutenberg Page Edit - Check if in Page Editing
if(typeof wp !== 'undefined' && typeof wp.blocks !== 'undefined') {
	// Hooks into ACF Append to Render App()
	acf.addAction('append', () => {
		App.update()
	})
}
