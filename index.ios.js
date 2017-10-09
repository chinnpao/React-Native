// Import some code that we need
var Moment = require('moment');
var React = require('react');
var {
  AppRegistry,
  View,
  Text,
  StyleSheet
} = require('react-native');
var DayItem = require('./src/day-item');

var Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Create a react component
var Weekdays = React.createClass({
  render: function() {
    return <View style={styles.container}>
      {this.days()}
    </View>
  },
  days: function() {
    var daysItems = [];
    for(var i=0; i<Days.length; i++) {
      var day = Moment().add(i, 'Days').format('dddd');
      daysItems.push(<DayItem day={day} daysUntil={i} />)
    }
    return daysItems;
  }
});

// Styles the React component
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Height: top-bottom
    alignItems: 'center' //Width: left-right
  }
});

// Show the react component on the screen
AppRegistry.registerComponent('weekdays', function() {
  return Weekdays
});