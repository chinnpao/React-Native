import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	state = { loggedIn: null }

	componentWillMount() {
		firebase.initializeApp({
	    apiKey: 'AIzaSyC6Rm5cGAe7fjlxNToJGZs550H9hPdVnIw',
	    authDomain: 'auth-b0443.firebaseapp.com',
	    databaseURL: 'https://auth-b0443.firebaseio.com',
	    projectId: 'auth-b0443',
	    storageBucket: 'auth-b0443.appspot.com',
	    messagingSenderId: '1027671401321'
	  });

	  firebase.auth().onAuthStateChanged(user => {
	  	user ? this.setState({loggedIn: true}) : this.setState({loggedIn: false});
	  });
	}

	renderContent() {
		switch(this.state.loggedIn) {
			case true:
				return <Button buttonText='Logout' onPress={() => firebase.auth().signOut()} />;
			case false:
				return <LoginForm />;
			default:
				<Spinner size='large' />;
		}
	}

	render() {
		return (
			<View>
				<Header headerText='Authentication' />
				{this.renderContent()}
			</View>
		);
	}
};

export default App;
