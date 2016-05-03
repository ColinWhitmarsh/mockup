const React = require('react');
const TaggingBox = require('./TaggingBox');
const Select = require('react-select');

const propTypes = {
  image: React.PropTypes.string,
};

class ImageLabeler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: true,
      title: '',
      dateAdded: '',
      description: '',
      tagging: false,
      tags: [],
    };

    this.toggleFormEditable = this.toggleFormEditable.bind(this);
    this.handleFormInputs = this.handleFormInputs.bind(this);
    this.toggleTaggingMode = this.toggleTaggingMode.bind(this);
    this.positionTaggingBoxOnClick = this.positionTaggingBoxOnClick.bind(this);
    this.handleTaggingInput = this.handleTaggingInput.bind(this);
    this.handleRemoveTags = this.handleRemoveTags.bind(this);
  }

  componentDidMount() {
    const taggingMode = {
      cursor: 'crosshair',
    };
    this.state.taggingMode = taggingMode;

    $('select').material_select();
  }


  toggleFormEditable() {
    if (this.state.disabled) {
      this.state.disabled = !this.state.disabled;
      $('.disabled').removeAttr('disabled');
    } else {
      this.state.disabled = !this.state.disabled;
      $('.disabled').attr('disabled', true);
    }
  }

  handleFormInputs(event, fieldToUpdate) {
    this.setState({
      [fieldToUpdate]: event.target.value,
    });
  }

  toggleTaggingMode() {
    this.setState({
      tagging: !this.state.tagging,
    });
  }

  handleTaggingInput(tagInput, tagID) {
    // Loop through tags array until tag is found
    let tag;
    let tags = this.state.tags;
    let index;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].tagID === tagID) {
        tag = tags[i];
        index = i;
      }
    }

    // Set tag tagInput and label
    tag.value = tagInput.value;
    tag.label = tagInput.label;

    //   if value is NOT null, dull border and make tag inactive
/*    if (tag.tagInput !== null) {
      tag.style.pointerEvents = 'none';
      tag.style.border = '25%';
    } else {
      tag.style.pointerEvents = 'all';
      tag.style.border = '100%';
    }*/

    tags[index] = tag;

    this.setState({ tags });
  }

  positionTaggingBoxOnClick(event) {
    // Get current tag or create new one if needed
    let tag;
    let tags = this.state.tags;
    let index;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].value === '') {
        tag = tags[i];
        index = i;
      }
    }

    if (!tag) {
      tag = {
        style: { top: '', left: '' },
        value: '',
        label: '',
        tagID: '',
      };
    }

    // Calculate X,Y coordinates (upper left corner) of tags based on user click
    const $imageWrapper = $('.imageWrapper');
    const offset = $imageWrapper.offset();

    const maxX = $imageWrapper.width() - 100;
    const minX = 0;

    const maxY = $imageWrapper.height() - 106;
    const minY = 0;


    let relX = event.pageX - offset.left - 50;
    let relY = event.pageY - offset.top - 50;

    // Make sure X coordinate doesn't fall outside the image width
    if (relX > maxX) {
      relX = maxX;
    } else if (relX < minX) {
      relX = minX;
    }

    // Make sure Y coordinate doesn't fall outside the image height
    if (relY > maxY) {
      relY = maxY;
    } else if (relY < minY) {
      relY = minY;
    }

    // Replace previous X,Y with new coordiantes
    tag.style.left = relX;
    tag.style.top = relY;
    tag.tagID = relX + relY;
    if (tags[index]) {
      tags[index] = tag;
    } else {
      tags.push(tag);
    }

    this.setState({ tags });
  }

  handleRemoveTags(remainingTags) {
    this.setState({ tags: remainingTags });
  }

  render() {
    return (
      <div className="imageLabeler no-bottom-margin col s10">
        <div className="image-frame no-bottom-margin valign-wrapper grey darken-4 z-depth-2">
          <div className="frame col s12 valign center-align">
            <div className="imageWrapper">
              {this.state.tags.map((tag, index) =>
                <TaggingBox key={index} tag={tag} handleTaggingInput={this.handleTaggingInput} />
               )}
              <img
                onClick={this.state.tagging ? this.positionTaggingBoxOnClick : () => (null)}
                src={this.props.image} alt="To be tagged" className="frame"
                style={this.state.tagging ? this.state.taggingMode : {}}
              />
            </div>
          </div>
        </div>
        <div className="image-toolbar row no-bottom-margin grey lighten-2 z-depth-2">
          <form className="col s12">
            <div className="row no-bottom-margin">
              <div className="input-field col s3">
                <input
                  disabled placeholder="Title" value={this.state.title} className="disabled"
                  type="text" onChange={(event) => this.handleFormInputs(event, 'title')}
                />
              </div>
              <div className="input-field col s1">
                <input
                  disabled placeholder="Added" value={this.state.dateAdded} className="disabled"
                  type="text" onChange={(event) => this.handleFormInputs(event, 'dateAdded')}
                />
              </div>
              <div className="col s1">
                <a onClick={this.toggleFormEditable} className="btn grey darken-2">
                  <i className="material-icons white-text">edit</i>
                </a>
              </div>
              <div className="col s1">
                <a onClick={this.toggleTaggingMode} className="btn grey darken-2">
                {this.state.tagging ? 'Done' : 'Tag'}</a>
              </div>
            </div>
            <div className="row no-bottom-margin">
              <div className="input-field col s5">
                <input
                  disabled placeholder="Description" value={this.state.description}
                  className="disabled" type="text"
                  onChange={(event) => this.handleFormInputs(event, 'description')}
                />
              </div>
              <div className="col s6">
                <Select
                  name="form-field-name"
                  multi={true}
                  value={this.state.tags}
                  options={[]}
                  placeholder="Tags..."
                  onChange={this.handleRemoveTags}
                  backspaceRemoves={true}
                  noResultsText={'Tag the image above'}
                  menuBuffer={-20}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

ImageLabeler.propTypes = propTypes;

module.exports = ImageLabeler;
