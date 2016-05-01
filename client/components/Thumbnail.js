const React = require('react');

class Thumbnail extends React.Component {


  renderImage(props) {
    return (
      <div className="card media" onClick={() => props.handleClick(props.media.source)}>
        <div className="card-image">
          <img className="z-depth-1" src={props.media.source} />
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

  render(props) {
    if (props.mediaType === 'image') {
      return this.renderImage(props);
    } else {
      return this.renderVideo(props);
    }
  }
}

module.exports = Thumbnail;
