/* eslint-disable no-underscore-dangle */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

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

    this.props.updateUser(user);
    this.setState({ isAuthenticated: true });

    if (!user) {
      this.props.history.push('/auth/sign-in');
    }

    if (this.props.location.pathname === '/auth/sign-in' && user) {
      this.props.history.push(`/${user?.id}`);
    }

    if (this.props.location.pathname === '/auth/sign-up' && user) {
      this.props.history.push(`/${user?.id}`);
    }
  }

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

export default withRouter(connectFunction(App));
