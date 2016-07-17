import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import App from './containers/App';
// import configureStore from './stores/configureStore';
// const store = configureStore();
class Home extends React.Component {
	render () {
		return(
			<div><h2>hello world</h2></div>
		)
	}
}
render(<Home />, document.getElementById('app'));