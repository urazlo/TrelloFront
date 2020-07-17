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
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/auth/sign-in">sign-in</Link>
          </li>
          {this.state.test}
          <li>
            <Link to="/auth/sign-up">sign-up</Link>
          </li>
        </ul>

        <Router />
      </>
    );
  }
}

export default App;
