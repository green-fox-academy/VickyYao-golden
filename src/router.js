import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import SimpleGoldenAcornApp from './state/state';
import rootReducer from './reducers/index';
import AppRedux from './container/AppRedux';

const RouterGolden = () => (
  <Router>
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/simple/states">With State</NavLink>
        </li>
        <li>
          <NavLink to="/simple/redux">With Redux</NavLink>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/simple/states" component={WithState} />
      <Route path="/simple/redux" component={WithRedux} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>
      Golden Acorn is life!
      <span role="img" aria-label="Acorn">🌰</span>
    </h2>
  </div>
);

const WithState = () => (
  <div>
    <h2>
    GoldenAcornApp with states
    </h2>
    <SimpleGoldenAcornApp />
  </div>
);

const store = createStore(rootReducer);
const WithRedux = () => (
  <div>
    <h2>
    GoldenAcornApp with Redux
    </h2>
    <Provider store={store}>
      <AppRedux />
    </Provider>
  </div>
);

export default RouterGolden;
