const React = require('react');

class ImageLabeler extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }
  
  render () {
    return (
      <div className="row grey lighten-4">
        <div className="col s8 grey-lighten-2">
          <div className="frame grey-lighten-1 z-depth-1">
            <img className="image z-depth-2" src={this.props.image}/>
          </div>
        </div>
        <div className="col s4">
        </div>
      </div>
    ); 
  }
}



module.exports = ImageLabeler;