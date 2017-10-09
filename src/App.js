import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		const config = {
	    apiKey: 'AIzaSyBTTnXkO9hB8puXAIVnF5WnYIYa7Mdh-1U',
	    authDomain: 'manager-623fa.firebaseapp.com',
	    databaseURL: 'https://manager-623fa.firebaseio.com',
	    projectId: 'manager-623fa',
	    storageBucket: 'manager-623fa.appspot.com',
	    messagingSenderId: '189250506490'
	  };

	  firebase.initializeApp(config);
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		
		return (
			<Provider store={store}>
				<LoginForm />
			</Provider>
		);
	}
};

export default App;
