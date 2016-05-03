const React = require('react');
const Select = require('react-select');

const options = [
  { value: 'Coca-Cola', label: 'Coca-Cola' },
  { value: 'Red Bull', label: 'Red Bull' },
  { value: 'Nike', label: 'Nike' },
  { value: 'Weapon', label: 'Weapon' },
];

const propTypes = {
  tag: React.PropTypes.object,
  handleTaggingInput: React.PropTypes.func,
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
    this.props.handleTaggingInput(value, this.props.tag.tagID);
  }

  render() {
    let style = {};
    style.left = this.props.tag.tagBoxStyle.left;
    style.top = this.props.tag.tagBoxStyle.top;
    style.opacity = this.props.tag.tagBoxStyle.opacity;

    return (
      <div>
        <div className="tagBox" style={style}>
          <div
            style={{ position: 'relative', top: '100px', zIndex: '3',
            pointerEvents: 'all', width: '150px', left: '-25px' }}
          >
            <Select
              name="form-field-name"
              value={this.props.tag.value}
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
