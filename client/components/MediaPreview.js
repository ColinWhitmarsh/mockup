const React = require('react');

const NavEntry = (props) => (
  <img className="responsive-img z-depth-1" src={props.media.source}/>
);

module.exports = NavEntry;