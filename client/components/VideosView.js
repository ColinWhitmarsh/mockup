const React = require('react');
const Sidebar = require('./Sidebar');
const VideosCanvas = require('./VideosCanvas');

const videos = [
  { source: 'https://www.youtube.com/embed/gFKl6GvM27U',
  },
  { source: 'https://www.youtube.com/embed/gFKl6GvM27U',
  },
  { source: 'https://www.youtube.com/embed/gFKl6GvM27U',
  },
  { source: 'https://www.youtube.com/embed/gFKl6GvM27U',
  },
  { source: 'https://www.youtube.com/embed/gFKl6GvM27U',
  },
  { source: 'https://www.youtube.com/embed/gFKl6GvM27U',
  },
];


class Videos extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
    };
  }

  handleClick(video) {
    this.setState({
      selected: video,
    });
  }


  render() {
    return (
      <div>
        <Sidebar handleClick={this.handleClick} media={videos} mediaType={'video'} />
        <VideosCanvas video={this.state.selected} />
      </div>
    );
  }
}

module.exports = Videos;
