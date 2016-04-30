const React = require('react');

class ImageLabeler extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      disabled: true,
      title: '',
      dateAdded: '',
      description: ''
    };

    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick () {
    if (this.state.disabled) {
      this.state.disabled = !this.state.disabled;
      $('.disabled').removeAttr('disabled');
    } else {
      this.state.disabled = !this.state.disabled;
      $('.disabled').attr('disabled', true);
    }
  }

  handleChange (event, fieldToUpdate) {
    this.setState({
      [fieldToUpdate]: event.target.value
    });
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
        <form className="col s12">
          <div className="row no-bottom-margin">
            <div className="input-field col s4">
              <input disabled placeholder="Title" value={this.state.title} className="disabled"
              type="text" onChange={(event) => this.handleChange(event, 'title')}/>
            </div>
            <div className="input-field col s1">
              <input disabled placeholder="Added" value={this.state.dateAdded} className="disabled"
              type="text" onChange={(event) => this.handleChange(event, 'dateAdded')}/>
            </div>
            <div className="col s1">
              <a onClick={this.handleClick} className="waves-effect waves-teal btn-flat"><i className="material-icons">edit</i></a>
            </div>
          </div>
          <div className="row no-bottom-margin">
            <div className="input-field col s6">
              <input disabled placeholder="Description" value={this.state.description} className="disabled"
              type="text" onChange={(event) => this.handleChange(event, 'description')}/>
            </div>
          </div>
        </form>
      </div>
    </div>
    ); 
  }
}



module.exports = ImageLabeler;