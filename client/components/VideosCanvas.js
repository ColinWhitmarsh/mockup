const React = require('react');

const propTypes = {
  video: React.PropTypes.string,
};

class VideoLabeler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="row grey lighten-4">
        <div className="col s8 grey-lighten-2">
          <div className="frame grey-lighten-1 z-depth-1">
            <img className="image z-depth-2" alt="To be labeled" src={this.props.video} />
          </div>
        </div>
        <div className="col s4">
        </div>
      </div>
    );
  }
}

VideoLabeler.propTypes = propTypes;

module.exports = VideoLabeler;
