const React = require('react');
const Navbar = require('./Navbar');

const linkslist = [
  {
    name: 'Images', url: '/'
  },
  {
    name: 'Videos', url: '/videos'
  },
  {
    name: 'Dashboard', url: '/dashboard'
  }
];

const App = class App extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      route: '/'
    };
  }
  
  render () {
    return (
    <div className='app-shell'>
    <Navbar links={linkslist} />
    <div className="row height-100 no-bottom-margin">
      <div className="main col-sm-10 container">
        {this.props.children}
      </div>
    </div>
    </div>
    );
  }

};
module.exports = App;
