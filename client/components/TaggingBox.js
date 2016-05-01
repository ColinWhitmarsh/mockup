const React = require('react');

class TaggingBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      style: {
        top: '0px',
        left: '0px',
      },
    };
  }

  componentDidMount() {
    const style = {};
    style.top = this.props.style.top;
    style.left = this.props.style.left;

    this.state.style = style;
  }

  render() {
    return (
      <div className="tagBox" style={this.state.style} />
    );
  }
}

module.exports = TaggingBox;
