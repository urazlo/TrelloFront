/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */

import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import avatarImage from 'ui/images/avatar.png';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import StyledPage from 'pages/Profile/components/StyledPage';
import { editUser } from 'api/userApi';
import { updateUser } from 'store/main/actions';

class Profile extends React.Component {
  state = {
    login: this.props.user?.login,
    email: this.props.user?.email,
    password: '',
    newPassword: '',
    confirmPassword: '',
    passwordError: '',
    newPasswordError: '',
    confirmPasswordError: '',
  }

  onInputChange = (ev) => {
    this.errorsClear();
    this.setState({ [ev.target.name]: ev.target.value });
  };

  onSubmit = async (ev) => {
    try {
      ev.preventDefault();
      const { login, email } = this.state;
      const id = this.props.user?._id;

      const user = await editUser({ login, email, id });
      this.props.updateUser(user);
    } catch (err) {
      console.log(err);
    }
  }

  onSubmitPasswordChange = async (ev) => {
    try {
      ev.preventDefault();
      const { password, newPassword, confirmPassword } = this.state;
      const id = this.props.user?._id;
      const noWhiteSpacesPattern = /^\S*$/;

      if (newPassword !== confirmPassword) {
        this.errorsClear();
        return this.setState({
          confirmPasswordError: 'Passwords must match',
        });
      }

      if (newPassword.toString().length < 6 || !noWhiteSpacesPattern.test(newPassword)) {
        this.errorsClear();
        return this.setState({
          newPasswordError: 'Invalid password',
        });
      }

      if (confirmPassword.toString().length < 6 || !noWhiteSpacesPattern.test(confirmPassword)) {
        this.errorsClear();
        return this.setState({
          confirmPasswordError: 'Invalid password',
        });
      }
      const user = await editUser({ id, password, newPassword });
      this.props.updateUser(user);
      console.log('success');
    } catch (err) {
      if (err.response.data === 'Invalid password') {
        this.errorsClear();
        return this.setState({ passwordError: 'The old password was incorrect' });
      }
    }
  }

  errorsClear = () => {
    this.setState({
      passwordError: '',
      newPasswordError: '',
      confirmPasswordError: '',
    });
  }

  render() {
    const {
      email,
      login,
      password,
      newPassword,
      confirmPassword,
      passwordError,
      newPasswordError,
      confirmPasswordError,
    } = this.state;
    return (
      <StyledPage>
        <div className="profile-header">
          <img className="profile-header-icon" src={avatarImage} alt="avatar" />

          <div className="profile-header-login">{this.props.user?.login}</div>

          <div className="profile-header-user-id">@{this.props.user?._id}</div>
        </div>

        <span className="profile-content-title">About</span>

        <div className="profile-content">
          <form
            className="profile-content-form"
            onSubmit={this.onSubmit}
          >
            <TextField
              value={login}
              label="Login"
              name="login"
              variant="outlined"
              onChange={this.onInputChange}
            />

            <TextField
              value={email}
              label="Email"
              name="email"
              variant="outlined"
              margin="normal"
              onChange={this.onInputChange}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              Save
            </Button>
          </form>

          <div className="profile-content-avatar">
            <span className="profile-content-avatar-text">Avatar</span>

            <img className="profile-content-avatar-img" src={avatarImage} alt="avatar" />
          </div>
        </div>

        <div className="profile-content">
          <form
            className="profile-content-form"
            onSubmit={this.onSubmitPasswordChange}
          >
            <TextField
              value={password}
              label="Old Password"
              name="password"
              variant="outlined"
              type="password"
              required
              error={Boolean(passwordError)}
              helperText={passwordError}
              onChange={this.onInputChange}
            />

            <TextField
              value={newPassword}
              label="New Password"
              name="newPassword"
              variant="outlined"
              margin="normal"
              type="password"
              required
              error={Boolean(newPasswordError)}
              helperText={newPasswordError}
              onChange={this.onInputChange}
            />

            <TextField
              value={confirmPassword}
              label="New Password (again)"
              name="confirmPassword"
              variant="outlined"
              margin="normal"
              type="password"
              required
              helperText={confirmPasswordError}
              error={Boolean(confirmPasswordError)}
              onChange={this.onInputChange}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              Change password
            </Button>
          </form>
        </div>

        <Button
          variant="contained"
          color="primary"
        >
          Change password
            </Button>
      </StyledPage>
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

export default withRouter(connectFunction(Profile));
