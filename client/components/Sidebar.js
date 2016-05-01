const React = require('react');
const Thumbnail = require('./Thumbnail');

const Sidebar = (props) => (
  <div className="sidebar col s2 grey lighten-4 z-depth-1">
  {props.media.map ((media, index) =>
    <Thumbnail
      media={media} key={index} handleClick={props.handleClick}
      mediaType={props.mediaType}
    />
  )}
  </div>
);

module.exports = Sidebar;
