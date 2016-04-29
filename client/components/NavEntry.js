const React = require('react');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const Link = require('react-router').Link;

const NavEntry = (props) => (
  <li>
    <Link className="grey-text darken-2 thin" to={props.data.url}>{props.data.name}</Link>
  </li>
);

module.exports = NavEntry;