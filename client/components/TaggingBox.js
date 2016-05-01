const React = require('react');

class TaggingBox extends React.Component {
  constructor(props) {
      super(props);
  } 

  render () {
    let style = {};
    style.top = this.props.style.top;
    style.left = this.props.style.left;
    
    return (
      <div className="tagBox" style={style}/>
    );
  }
}
  
module.exports = TaggingBox;