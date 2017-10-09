import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
	state = { albums: [] };

	async componentWillMount() {
		try {
			const url = 'https://rallycoding.herokuapp.com/api/music_albums';
			await axios.get(url).then(response => this.setState({ albums: response.data }));
		} catch (e) {}
	}

	renderAlbums() {
		return this.state.albums.map(album => 
			<AlbumDetail key={album.url} album={album} />
		);
	}

	render() {
		return (
			<ScrollView>
				{ this.renderAlbums() }
			</ScrollView>
		);
	}
}

export default AlbumList;
