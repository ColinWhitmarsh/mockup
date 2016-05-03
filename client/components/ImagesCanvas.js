const React = require('react');
const Tagbox = require('./ImagesTagbox');
const ImagesToolbar = require('./ImagesToolbar');

const propTypes = {
  image: React.PropTypes.string,
};

class ImageLabeler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editFormDisabled: true,
      title: '',
      dateAdded: '',
      description: '',
      taggingToggled: false,
      tags: [],
      taggingMode: { cursor: 'crosshair' },
    };

    this.toggleFormEditable = this.toggleFormEditable.bind(this);
    this.handleFormInputs = this.handleFormInputs.bind(this);
    this.toggleTaggingMode = this.toggleTaggingMode.bind(this);
    this.positionTagboxOnClick = this.positionTagboxOnClick.bind(this);
    this.handleTaggingInput = this.handleTaggingInput.bind(this);
    this.handleRemoveTags = this.handleRemoveTags.bind(this);
  }

  componentWillReceiveProps() {
    // Reset tags when a new image is selected. Currently there's no data persistence
    const tags = [];
    this.setState({ tags });
  }

  toggleFormEditable() {
    this.setState({ editFormDisabled: !this.state.editFormDisabled });
  }

  handleFormInputs(event, fieldToUpdate) {
    this.setState({
      [fieldToUpdate]: event.target.value,
    });
  }

  toggleTaggingMode() {
    this.setState({
      taggingToggled: !this.state.taggingToggled,
    });
  }

  handleTaggingInput(tagInput, tagID) {
    // Loop through tags array until matching tagID is found
    const tags = this.state.tags;
    let tag;
    let i = 0;
    for (i; i < tags.length; i++) {
      if (tags[i].tagID === tagID) {
        tag = tags[i];
        break;
      }
    }

    // Set tag value/label and dim opacity
    if (tagInput) {
      tag.value = tagInput.value;
      tag.label = tagInput.label;
      tag.tagBoxStyle.opacity = 0.4;
    // tagInput is null, user has cleared current tag value, assign to empty string, reset opacity
    } else {
      tag.value = '';
      tag.label = '';
      tag.tagBoxStyle.opacity = 1.0;
    }

    // Replace old tag
    tags[i] = tag;
    this.setState({ tags });
  }

  positionTagboxOnClick(event) {
    // Loop through tags array until empty tag is found
    const tags = this.state.tags;
    let tag;
    let i = 0;
    for (i; i < tags.length; i++) {
      if (tags[i].value === '') {
        tag = tags[i];
        break;
      }
    }

    // If tags array is empty or no tag is found, create a new tag
    if (!tag) {
      tag = {
        tagBoxStyle: { top: '', left: '', opacity: 1.0 },
        value: '',
        label: '',
        tagID: '',
      };
    }

    // Calculate X,Y coordinates (upper left corner) to position tagBox based on user click
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

    // Replace previous X,Y with new coordiantes and assign tagID
    tag.tagBoxStyle.left = relX;
    tag.tagBoxStyle.top = relY;
    tag.tagID = relX + relY;

    // Replace old tag
    if (tags[i]) {
      tags[i] = tag;
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
                <Tagbox
                  key={index}
                  tag={tag}
                  handleTaggingInput={this.handleTaggingInput}
                />
               )}
              <img
                onClick={this.state.taggingToggled ? this.positionTagboxOnClick : () => (null)}
                src={this.props.image}
                alt="To be tagged"
                className="frame"
                style={this.state.taggingToggled ? this.state.taggingMode : {}}
              />
            </div>
          </div>
        </div>
        <ImagesToolbar
          toggleFormEditable={this.toggleFormEditable}
          editFormDisabled={this.state.editFormDisabled}
          handleFormInputs={this.handleFormInputs}
          title={this.state.tile}
          description={this.state.description}
          dateAdded={this.state.dateAdded}
          toggleTaggingMode={this.toggleTaggingMode}
          taggingToggled={this.state.taggingToggled}
          handleRemoveTags={this.handleRemoveTags}
          tags={this.state.tags}
        />
      </div>
    );
  }
}

ImageLabeler.propTypes = propTypes;

module.exports = ImageLabeler;
