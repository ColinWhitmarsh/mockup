const React = require('react');

const MediaPreview = (props) => (
  <div className="card media" onClick={() => props.handleClick(props.media.source)}>
    <div className="card-image">
      <img className="z-depth-1" src={props.media.source}/>
    </div>
  </div>
);

module.exports = MediaPreview;