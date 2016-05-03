const NavbarEntry = require('./NavbarEntry');
const React = require('react');

const propTypes = {
  links: React.PropTypes.array,
};

const Navbar = class Navbar extends React.Component {
  componentDidMount() {
    $('.button-collapse').sideNav();
  }

  render() {
    return (
      <div className="navbar height-10">
        <nav className="white" role="navigation">
          <div className="nav-wrapper">
            <a id="logo-container" href="#" className="right grey-text darken-2 brand-logo">Company
            </a>
            <a href="#" data-activates="nav-mobile" className="button-collapse">
              <i className="nav-mobile-menu material-icons grey-text darken-2">menu</i>
            </a>
            <ul className="left hide-on-med-and-down">
              {this.props.links.map((link, index) =>
                <NavbarEntry data={link} key={index} />
              )}
            </ul>
            <ul id="nav-mobile" className="side-nav">
              {this.props.links.map((link, index) =>
                <NavbarEntry data={link} key={index} />
              )}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
};

Navbar.propTypes = propTypes;

module.exports = Navbar;
