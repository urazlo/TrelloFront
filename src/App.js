import React from 'react';

import { Link } from 'react-router-dom';
import Router from 'routes';

class App extends React.Component {
  state = {
    test: 'home',
  }

  render() {
    return (
      <div className="start-page">
        <ul>
          <li>
            <Link to="/auth/sign-in">sign-in</Link>
          </li>

          <li>
            <Link to="/auth/sign-up">sign-up</Link>
          </li>

          <li>
            <Link to="/">{this.state.test}</Link>
          </li>
        </ul>

        <Router />
      </div>
    );
  }
}

export default App;
