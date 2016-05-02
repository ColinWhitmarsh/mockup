const React = require('react');
const Thumbnail = require('./Thumbnail');

const propTypes = {
  media: React.PropTypes.array,
  mediaType: React.PropTypes.string,
  handleClick: React.PropTypes.func,
};

const Sidebar = (props) => (
  <div className="sidebar col s2 grey lighten-4 z-depth-1">
  {props.media.map((media, index) =>
    <Thumbnail
      media={media} key={index} handleClick={props.handleClick}
      mediaType={props.mediaType}
    />
  )}
  </div>
);


Sidebar.propTypes = propTypes;

module.exports = Sidebar;
