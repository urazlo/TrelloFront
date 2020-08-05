/* eslint-disable react/no-unused-state */
import React from 'react';
import { connect } from 'react-redux';

import Header from 'ui/components/Header';
import Router from 'routes';
import { check } from 'api/authApi';
import { updateUser } from 'store/main/actions';

class App extends React.Component {
  state = {
    isAuthenticated: false,
  };

  async componentDidMount() {
    const user = await check().catch(() => null);

    this.setState({ isAuthenticated: true });

    updateUser(user);
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

const connectFunction = connect(
  ({ main }) => ({
    user: main.user,
  }),
  {
    updateUser,
  },
);

export default connectFunction(App);
