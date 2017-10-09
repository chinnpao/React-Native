// Import some code needed
var React = require('react');

var {
	View,
	Text
} = require('react-native');

// Create components
var DayItem = React.createClass({
	render: function() {
		return <Text style={this.style()}>
			{this.props.day}
		</Text>
	},
	style: function() {
		return {
			color: this.color(),
			fontWeight: this.fontWeight(),
			fontSize: this.fontSize(),
			lineHeight: this.lineHeight()
		}
	},
	color: function() {
		var opacity = 1 / this.props.daysUntil;
		return 'rgba(0, 0, 0, '+ opacity +')';
	},
	fontWeight: function() {
		return ((7 - this.props.daysUntil) * 100).toString();
	},
	fontSize: function() {
		return 60 - 6 * this.props.daysUntil;
	},
	lineHeight: function() {
		return 70 - 4 * this.props.daysUntil;
	}
});

// Codes available somewhere else
module.exports = DayItem;