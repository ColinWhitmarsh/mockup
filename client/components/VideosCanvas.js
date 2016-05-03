const React = require('react');

const propTypes = {
  video: React.PropTypes.string,
};

const VideoLabeler = (props) => (
  <div className="imageLabeler no-bottom-margin col s10">
    <div className="image-frame no-bottom-margin valign-wrapper grey darken-4 z-depth-2">
      <div className="frame col s12 valign center-align">
        <div className="imageWrapper">
          <iframe
            src={props.video}
            frameBorder="0"
          />
        </div>
      </div>
    </div>
    <div className="image-toolbar row no-bottom-margin grey lighten-2 z-depth-2" />
  </div>
);

VideoLabeler.propTypes = propTypes;

module.exports = VideoLabeler;
