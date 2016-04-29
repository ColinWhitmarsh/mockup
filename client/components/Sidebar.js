const React = require('react');
const Thumbnail = require('./Thumbnail');


class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar col s2 grey lighten-4 z-depth-1">
      {this.props.media.map ((media, index) =>
        <Thumbnail media={media} key={index} 
        handleClick={this.props.handleClick} mediaType={this.props.mediaType} />
      )}
      </div>
    );
  }
}

module.exports = Sidebar
