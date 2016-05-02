const React = require('react');
const Navbar = require('./Navbar');

const linkslist = [
  {
    name: 'Images', url: '/',
  },
  {
    name: 'Videos', url: '/videos',
  },
  {
    name: 'Dashboard', url: '/dashboard',
  },
];

const propTypes = {
  children: React.PropTypes.node,
};

const App = class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: '/',
    };
  }

  render() {
    return (
      <div className="app-shell height-100">
        <Navbar links={linkslist} />
        <div className="row mainview height-90">
          <div>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
};

App.propTypes = propTypes;

module.exports = App;
