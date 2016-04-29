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
    $(".button-collapse").sideNav();
  }

  render() {
    return (
      <div className="navbar height-10">
        <nav className="white" role="navigation">
          <div className="nav-wrapper"><a id="logo-container" href="#" className="right grey-text darken-2 brand-logo">Company</a>
          <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="nav-mobile-menu material-icons grey-text darken-2">menu</i></a>
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
          </div>
        </nav>
      </div>
    );
  }
};

module.exports = NavBar;