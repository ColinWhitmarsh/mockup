const React = require('react');
const Sidebar = require('./Sidebar');
const ImageLabeler = require('./ImageLabeler');

const images = [
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



class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: './../assets/socialmedia1.jpg'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (image) {
    this.setState({
      selected: image
    });
  }
  
  render () {
    return (
      <div>
        <Sidebar handleClick={this.handleClick} media={images} mediaType={'image'}/>
        <ImageLabeler image={this.state.selected} />
      </div>
    ); 
  }
}



module.exports = Images;