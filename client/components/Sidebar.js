const React = require('react');
const MediaPreview = require('./MediaPreview');


class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.handleClick);
    return (
      <div className="sidebar float-left col s2 grey lighten-4 height-90 z-depth-1">
      {this.props.media.map ((media, index) =>
        <MediaPreview handleClick={this.props.handleClick} media={media} key={index} />
      )}
      </div>
    );
  }
}

module.exports = Sidebar
