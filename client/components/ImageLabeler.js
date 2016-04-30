const React = require('react');

class ImageLabeler extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }
  
  render () {
    return (
    <div className="imageLabeler no-bottom-margin col s10">
      <div className="image-frame no-bottom-margin valign-wrapper grey darken-4 z-depth-2">
        <div className="frame col s12">
          <div className="frame valign center-align">
            <img className="frame responsive-img z-depth-2" src={this.props.image}/>
          </div>
        </div>
      </div>
      <div className="image-toolbar row no-bottom-margin grey lighten-2 z-depth-2">
        <div className="col s12">
        </div>
      </div>
    </div>
    ); 
  }
}



module.exports = ImageLabeler;