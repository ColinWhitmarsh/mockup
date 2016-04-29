const NavEntry = require('./NavEntry');
const React = require('react');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const Link = require('react-router').Link;

const NavBar = class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {
    $('.button-collapse').sideNav();
  }

  render() {
    return (
      <div className="navbar-fixed">
        <nav className="white" role="navigation">
          <div className="nav-wrapper col s10"><a id="logo-container" href="#" className="right grey-text darken-2 thin brand-logo">Company</a>
            <ul className="left hide-on-med-and-down">
              {this.props.links.map ((link, index) =>
                <NavEntry data={link} key={index} />
              )}
            </ul>
            <ul id="nav-mobile" className="side-nav">
              {this.props.links.map ((link, index) =>
                <NavEntry data={link} key={index} />
              )}
            </ul>
            <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
          </div>
        </nav>
      </div>
    );
  }
};

module.exports = NavBar;