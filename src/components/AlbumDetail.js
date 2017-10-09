import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
	const { title, artist, thumbnail_image, image, url } = album;
	const {
		thumbnail,
		headerContent,
		thumbnailContainer,
		headerText,
		imageStyle
	} = styles;

	return (
		<Card>
			<CardSection>
				<View style={thumbnailContainer}>
					<Image
						source={{ uri: thumbnail_image }}
						style={thumbnail}
					/>
				</View>
				<View style={headerContent}>
					<Text style={headerText}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>

			<CardSection>
				<Image
					source={{ uri: image }}
					style={imageStyle}
				/>
			</CardSection>

			<CardSection>
				<Button onPress={() => Linking.openURL(url)} textBuy='Buy Now!' />
			</CardSection>
		</Card>
	);
};

const styles = {
	headerContent: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerText: {
		fontSize: 18
	},
	thumbnail: {
		width: 50,
		height: 50
	},
	thumbnailContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 10,
		marginLeft: 10
	},
	imageStyle: {
		height: 300,
		width: null,
		flex: 1
	}
};

export default AlbumDetail;
