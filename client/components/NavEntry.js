const React = require('react');
const Link = require('react-router').Link;

const propTypes = {
  data: React.PropTypes.object,
};

const NavEntry = (props) => (
  <li>
    <Link className="grey-text darken-2" to={props.data.url}>{props.data.name}</Link>
  </li>
);

NavEntry.propTypes = propTypes;

module.exports = NavEntry;
