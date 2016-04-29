const React = require('react');
const Sidebar = require('./Sidebar');
const ImageLabeler = require('./ImageLabeler');

class Images extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      images: []
    };
  }
  
  render () {
    return (
      <div>
        <Sidebar />
        <ImageLabeler />
      </div>
    ); 
  }
}



module.exports = Images;