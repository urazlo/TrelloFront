import React from 'react';

import { Link } from 'react-router-dom';
import Router from 'routes';

class App extends React.Component {
  state = {
    test: 'test',
  }

  render() {
    return (
      <>

        <ul>
          <li>
            <Link to="/">{this.state.test}</Link>
          </li>

          <li>
            <Link to="/auth/sign-in">sign-in</Link>
          </li>
          <li>
            <Link to="/auth/sign-up">sign-up</Link>
          </li>
          <li>
            <Link to="/boarders-list">boarders-list</Link>
          </li>
        </ul>

        <Router />
      </>
    );
  }
}

export default App;
