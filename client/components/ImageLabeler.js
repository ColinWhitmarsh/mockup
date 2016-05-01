const React = require('react');
const TaggingBox = require('./TaggingBox');

class ImageLabeler extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      disabled: true,
      title: '',
      dateAdded: '',
      description: '',
      tagging: false,
      tagBox: [{ top: '10px', left: '10px' }]
    };

    this.toggleEditable = this.toggleEditable.bind(this);
    this.handleFormInputs = this.handleFormInputs.bind(this);
    this.toggleTaggingMode = this.toggleTaggingMode.bind(this);
    this.handleTagging = this.handleTagging.bind(this);
  }
  
  toggleEditable () {
    if (this.state.disabled) {
      this.state.disabled = !this.state.disabled;
      $('.disabled').removeAttr('disabled');
    } else {
      this.state.disabled = !this.state.disabled;
      $('.disabled').attr('disabled', true);
    }
  }

  handleFormInputs (event, fieldToUpdate) {
    this.setState({
      [fieldToUpdate]: event.target.value
    });
  }

  toggleTaggingMode () {
    this.setState({
      tagging: !this.state.tagging
    });
  }

  handleTagging (event) {
       var offset = $('.imageWrapper').offset();
       var relX = event.pageX - offset.left - 50;
       var relY = event.pageY - offset.top - 50;
       var tag = this.state.tagBox[0];
       
       tag.left = relX;
       tag.top = relY;
       
       this.setState({
        tagBox: [tag]
       });
  }

  render () {
    return (
    <div className="imageLabeler no-bottom-margin col s10">
      <div className="image-frame no-bottom-margin valign-wrapper grey darken-4 z-depth-2">
        <div className="frame col s12 valign center-align">
          <div className="imageWrapper">
            {this.state.tagBox.map((tagBox, index) =>
              <TaggingBox key={index} style={tagBox}>
              </TaggingBox>
             )}
            <img onClick={this.handleTagging} className="frame" src={this.props.image}
            style={this.state.tagging ? taggingMode : {}} />
          </div>
        </div>
      </div>
      <div className="image-toolbar row no-bottom-margin grey lighten-2 z-depth-2">
        <form className="col s12">
          <div className="row no-bottom-margin">
            <div className="input-field col s3">
              <input disabled placeholder="Title" value={this.state.title} className="disabled"
              type="text" onChange={(event) => this.handleFormInputs(event, 'title')}/>
            </div>
            <div className="input-field col s1">
              <input disabled placeholder="Added" value={this.state.dateAdded} className="disabled"
              type="text" onChange={(event) => this.handleFormInputs(event, 'dateAdded')}/>
            </div>
            <div className="col s1">
              <a onClick={this.toggleEditable} className="waves-effect btn-flat"><i className="material-icons">edit</i></a>
            </div>
            <div className="col s1">
              <a onClick={this.toggleTaggingMode} className="waves-effect btn blue grey darken-2">
              {this.state.tagging ? "Done" : "Tag"}</a>
            </div>
          </div>
          <div className="row no-bottom-margin">
            <div className="input-field col s5">
              <input disabled placeholder="Description" value={this.state.description} className="disabled"
              type="text" onChange={(event) => this.handleFormInputs(event, 'description')}/>
            </div>
          </div>
        </form>
      </div>
    </div>
    ); 
  }
}


var taggingMode = {
  cursor: 'crosshair'
}


module.exports = ImageLabeler;