const React = require('react');
const ReactDOM = require('react-dom');
const { Router, Route, Link, IndexRoute, hashHistory, RouterContext } = require('react-router');

const App = require('./components/app');
const ImagesView = require('./components/ImagesView');
const VideosView = require('./components/VideosView');
const Dashboard = require('./components/DashboardView');

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
      <IndexRoute component={wrapComponent(ImagesView, {})} />
      <Route path='videos' component={VideosView} />
      <Route path='dashboard' component={DashboardView} />
    </Route>
  </Router>
), document.getElementById('app'));
