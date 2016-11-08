import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { createStore } from 'redux';
import App from './App';
import './index.css';
import slidoApp from './reducers'
import Room from './Room';
import Questions from './Questions';

const store = createStore(slidoApp)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Room} />
        <Route path=":room" component={Questions}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
