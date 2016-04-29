const React = require('react');
const MediaPreview = require('./MediaPreview');
const media = [
  { source: './../assets/socialmedia1.jpg'
  },
  { source: './../assets/socialmedia2.jpg'
  },
  { source: './../assets/socialmedia3.jpg'
  },
  { source: './../assets/security1.jpg'
  },
  { source: './../assets/security2.jpg'
  },
  { source: './../assets/security3.jpg'
  }
];

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar float-left col m3 grey lighten-4 height-90 z-depth-1">
      {media.map ((media, index) =>
        <MediaPreview media={media} key={index} />
      )}
      </div>
    );
  }
}

module.exports = Sidebar
