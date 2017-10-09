import React from 'React';
import MapView from 'react-native-maps';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet
} from 'react-native';

var Api = require('./src/api');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      pin: {
        latitude: 0,
        longitude: 0
      },
      city: '',
      temperature: '',
      description: ''
    };
  },
  render: function() {
    return  <View style={styles.container}>
              <MapView 
                annotations={[this.state.pin]}
                onRegionChangeComplete={this.onRegionChangeComplete}
                style={styles.map}
              >
              </MapView>
            </View>
  },
  onRegionChangeComplete: function(region) {
    this.setState({
      pin: {
        longitude: region.longitude,
        latitude: region.latitude
      }
    });

    Api(region.latitude, region.longitude)
      .then((data) => {
        console.log(data);
        this.setState(data);
      });

  }
});

var styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1
  }
});

AppRegistry.registerComponent('weather', () => Weather);