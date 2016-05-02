const React = require('react');

const propTypes = {
  mediaType: React.PropTypes.string,
};

class Thumbnail extends React.Component {
  renderImage(props) {
    return (
      <div className="card media" onClick={() => props.handleClick(props.media.source)}>
        <div className="card-image">
          <img className="z-depth-1" alt="Thumbnail" src={props.media.source} />
        </div>
      </div>
    );
  }

  renderVideo(props) {
    return (
      <div className="video-container">
        <iframe src={props.media.source} frameborder="0" allowfullscreen></iframe>
      </div>
    );
  }

  render() {
    if (this.props.mediaType === 'image') {
      return this.renderImage(this.props);
    } else {
      return this.renderVideo(this.props);
    }
  }
}

Thumbnail.propTypes = propTypes;

module.exports = Thumbnail;
