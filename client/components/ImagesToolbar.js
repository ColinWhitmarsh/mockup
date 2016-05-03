const React = require('react');
const Select = require('react-select');

const propTypes = {
  toggleFormEditable: React.PropTypes.func,
  handleFormInputs: React.PropTypes.func,
  title: React.PropTypes.string,
  description: React.PropTypes.string,
  dateAdded: React.PropTypes.string,
  toggleTaggingMode: React.PropTypes.func,
  taggingToggled: React.PropTypes.bool,
  handleRemoveTags: React.PropTypes.func,
  tags: React.PropTypes.array,
};

const ImagesToolbar = (props) => (
  <div className="image-toolbar row no-bottom-margin grey lighten-2 z-depth-2">
    <form className="col s12">
      <div className="row no-bottom-margin">
        <div className="input-field col s3">
          <input
            placeholder="Title" value={props.title} className="disabled"
            disabled={props.editFormDisabled}
            type="text" onChange={(event) => props.handleFormInputs(event, 'title')}
          />
        </div>
        <div className="input-field col s1">
          <input
            placeholder="Added" value={props.dateAdded} className="disabled"
            disabled={props.editFormDisabled}
            type="text" onChange={(event) => props.handleFormInputs(event, 'dateAdded')}
          />
        </div>
        <div className="col s1">
          <a onClick={props.toggleFormEditable} className="btn grey darken-2">
            <i className="material-icons white-text">edit</i>
          </a>
        </div>
        <div className="col s1">
          <a onClick={props.toggleTaggingMode} className="btn grey darken-2">
          {props.taggingToggled ? 'Done' : 'Tag'}</a>
        </div>
      </div>
      <div className="row no-bottom-margin">
        <div className="input-field col s5">
          <input
            placeholder="Description" value={props.description}
            className="disabled" type="text" disabled={props.editFormDisabled}
            onChange={(event) => props.handleFormInputs(event, 'description')}
          />
        </div>
        <div className="col s6">
          <Select
            name="form-field-name"
            multi
            value={props.tags}
            options={[]}
            placeholder="Tags..."
            onChange={props.handleRemoveTags}
            backspaceRemoves
            noResultsText={'Tag the image above'}
            menuBuffer={-20}
            clearable={false}
          />
        </div>
      </div>
    </form>
  </div>
);


ImagesToolbar.propTypes = propTypes;

module.exports = ImagesToolbar;
