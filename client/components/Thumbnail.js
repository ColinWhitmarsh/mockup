const React = require('react');

class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.mediaType === 'image') {
      return (
        <div className="card media" onClick={() => this.props.handleClick(this.props.media.source)}>
          <div className="card-image">
            <img className="z-depth-1" src={this.props.media.source}/>
          </div>
        </div>
      );
    } else {
      return (
        <div class="video-container">
          <iframe src={this.props.media.source} frameborder="0" allowfullscreen></iframe>
        </div>
      );
    }
  }
};

module.exports = Thumbnail;