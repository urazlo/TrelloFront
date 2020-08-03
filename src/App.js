/* eslint-disable react/no-unused-state */
import React from 'react';

import Header from 'ui/components/Header';
import Router from 'routes';
import { check } from 'api/authApi';

class App extends React.Component {
  state = {
    isAuthenticated: false,
    user: null,
  };

  async componentDidMount() {
    const user = await check().catch(() => null);
    this.setState({ isAuthenticated: true, user });
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    const { isAuthenticated } = this.state;
    if (!isAuthenticated) { return null; }

    return (
      <>
        <Header />
        <Router />
      </>
    );
  }
}

export default App;
