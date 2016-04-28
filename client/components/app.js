const React = require('react');
const Navbar = require('./Navbar');

const linkslist = [
  {
    name: 'Images', url: '/images'
  },
  {
    videos: 'Videos', url: '/videos'
  },
  {
    dashboard: 'Dashboard', url: '/dashboard'
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
    <div className='app-shell grey lighten-2'>Hello World
    <Navbar links={linkslist} />
    </div>
    );
  }

};
module.exports = App;
