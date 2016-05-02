const React = require('react');
const Select = require('react-select');

const options = [
  { value: 'Coca-Cola', label: 'Coca-Cola' },
  { value: 'Red Bull', label: 'Red Bull' },
  { value: 'Nike', label: 'Nike' },
  { value: 'Weapon', label: 'Weapon' },
];

const propTypes = {
  style: React.PropTypes.object,
};

class TaggingBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({ value });
    console.log('value', value);
  }

  render() {
    let style = {};
    style.top = this.props.style.top;
    style.left = this.props.style.left;

    return (
      <div>
        <div className="tagBox" style={style}>
          <div
            style={{ position: 'relative', top: '100px', zIndex: '3',
            pointerEvents: 'all', width: '150px', left: '-25px' }}
          >
            <Select
              name="form-field-name"
              value={this.state.value}
              options={options}
              placeholder="Select tag"
              onChange={this.onChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

TaggingBox.propTypes = propTypes;

module.exports = TaggingBox;
