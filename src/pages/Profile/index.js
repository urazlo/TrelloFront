/* eslint-disable no-underscore-dangle */
import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import avatarImage from 'ui/images/avatar.png';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import StyledPage from 'pages/Profile/components/StyledPage';

class Profile extends React.Component {
  state = {
    login: this.props.user.login,
    email: this.props.user.email,
  }

  onChangeHandler = (ev) => {
    // console.log(ev.target);
    this.setState({ login: ev.target.value });
  }

  onSubmit = (ev) => {
    ev.preventDefault();
  }

  render() {
    const { email, login } = this.state;
    return (
      <StyledPage>
        <div className="profile-header">
          <img className="profile-header-icon" src={avatarImage} alt="avatar" />

          <div className="profile-header-login">{this.props.user.login}</div>

          <div className="profile-header-user-id">@{this.props.user._id}</div>
        </div>

        <div className="profile-content">
          <form className="profile-content-form"
            onSubmit={this.onSubmit}>

            <div className="profile-content-login"></div>

            <TextField
              value={login}
              label='Login'
              variant="outlined"
              onChange={this.onChangeHandler}
            />

            <div className="profile-content-email"></div>

            <TextField
              value={email}
              label='Email'
              variant="outlined"
            />

            <Button variant="contained" color="primary">
              Save
            </Button>
          </form>

          <div className="profile-content-avatar">

            <span className="profile-content-avatar-text">Avatar</span>

            <img className="profile-content-avatar-img" src={avatarImage} alt="avatar" />
          </div>
        </div>

        <div>

        </div>
        <div></div>
      </StyledPage>
    );
  }
}

const connectFunction = connect(
  ({ main }) => ({
    user: main.user,
  }),
);

export default withRouter(connectFunction(Profile));
