const React = require('react');
const ReactDOM = require('react-dom');
const { Router, Route, Link, IndexRoute, hashHistory, RouterContext } = require('react-router');

const App = require('./components/app');
const Images = require('./components/Images');
const Videos = require('./components/Videos');
const Dashboard = require('./components/Dashboard');

const wrapComponent = function(Component, props) {
  return React.createClass({
    render: function() {
      return React.createElement(Component, props);
    }
  });
};

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={wrapComponent(Images, {})} />
      <Route path='videos' component={Videos} />
      <Route path='dashboard' component={Dashboard} />
    </Route>
  </Router>
), document.getElementById('app'));
