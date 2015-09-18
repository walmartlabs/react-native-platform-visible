'use strict';

var React = require('react-native');
var {
  Platform
} = React;

var PlatformVisible = React.createClass({
  propTypes: {
    target: React.PropTypes.string.isRequired
  },
  render() {
    return (Platform.OS === this.props.target) ? this.props.children : null;
  }
});

PlatformVisible.iOS = React.createClass({
  render() {
    return (
      <PlatformVisible target="ios">
        {this.props.children}
      </PlatformVisible>
    );
  }
});

PlatformVisible.Android = React.createClass({
  render() {
    return (
      <PlatformVisible target="android">
        {this.props.children}
      </PlatformVisible>
    );
  }
});

module.exports = PlatformVisible;