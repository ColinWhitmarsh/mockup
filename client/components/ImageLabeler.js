const React = require('react');
const TaggingBox = require('./TaggingBox');

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
      tags: [{ top: '10px', left: '10px' }],
    };

    this.toggleFormEditable = this.toggleFormEditable.bind(this);
    this.handleFormInputs = this.handleFormInputs.bind(this);
    this.toggleTaggingMode = this.toggleTaggingMode.bind(this);
    this.positionTaggingBoxOnClick = this.positionTaggingBoxOnClick.bind(this);
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

  handleTaggingInput(value) {
    /*
    1. loops through tags array until value is null
    2. sets tag property to value
      if value is null
        pointer-events: none
        border is bright
      if value is NOT null
        pointer-events: all
        border is dull
    */

/*    let tag;
    for (const tg of this.state.tags) {
      if (tg.value === null) {
        tag = tg;
      }
    }*/
  }

  positionTaggingBoxOnClick(event) {
    // Get current tag or create new one if needed
/*    let tag;
    for (const tg of this.state.tags) {
      if (tg.value === null) {
        tag = tg;
      }
    }

    if (!tag) {
      tag = { style: { top: '', left: '', pointerEvents: 'none' }, value: '' };
    }*/

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

    // Replace current X,Y with new coordiantes
    const tag = this.state.tags[0];
    tag.left = relX;
    tag.top = relY;

    this.setState({
      tags: [tag],
    });
  }

  render() {
    return (
      <div className="imageLabeler no-bottom-margin col s10">
        <div className="image-frame no-bottom-margin valign-wrapper grey darken-4 z-depth-2">
          <div className="frame col s12 valign center-align">
            <div className="imageWrapper">
              {this.state.tags.map((tags, index) =>
                <TaggingBox key={index} style={tags} />
               )}
              <img
                onClick={this.positionTaggingBoxOnClick} alt="To be tagged" className="frame"
                src={this.props.image} style={this.state.tagging ? this.state.taggingMode : {}}
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
            </div>
          </form>
        </div>
      </div>
    );
  }
}

ImageLabeler.propTypes = propTypes;

module.exports = ImageLabeler;
