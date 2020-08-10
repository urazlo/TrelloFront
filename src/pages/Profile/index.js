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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import LockIcon from '@material-ui/icons/Lock';
import InfoIcon from '@material-ui/icons/Info';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

class Profile extends React.Component {
  state = {
    open: false,
    login: this.props.user?.login,
    email: this.props.user?.email,
    password: '',
    newPassword: '',
    confirmPassword: '',
    loginError: '',
    emailError: '',
    passwordError: '',
    newPasswordError: '',
    confirmPasswordError: '',
  }

  onInputChange = (ev) => {
    this.clearError();
    this.setState({ [ev.target.name]: ev.target.value });
  };

  handleClick = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  onSubmit = async (ev) => {
    try {
      ev.preventDefault();
      this.clearError();
      const {
        login,
        email,
        password,
        newPassword,
        confirmPassword,
      } = this.state;
      const id = this.props.user?._id;
      const loginPattern = /^\S*$/;
      const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

      if (login.toString().length < 3 || !loginPattern.test(login)) {
        return this.setState({ loginError: 'Invalid login' });
      }

      if (!emailPattern.test(email)) {
        return this.setState({ emailError: 'Invalid email' });
      }

      if (password || newPassword || confirmPassword) {
        if (!password) {
          return this.setState({
            passwordError: 'Please fill out this field',
            open: true,
          });
        }

        if (
          !this.isPasswordValid(password, 'passwordError') ||
          !this.isPasswordValid(newPassword, 'newPasswordError') ||
          !this.isPasswordValid(confirmPassword, 'confirmPasswordError')
        ) {
          return;
        }

        if (newPassword !== confirmPassword) {
          return this.setState({
            confirmPasswordError: 'Passwords must match',
            open: true,
          });
        }
      }

      const user = await editUser({ id, login, email, password, newPassword });
      this.props.updateUser(user);
      this.setState({
        login,
        email,
        password: '',
        newPassword: '',
        confirmPassword: '',
      });
    } catch (err) {
      if (err.response.data === 'Invalid password') {
        return this.setState({
          passwordError: 'The old password was incorrect',
          open: true,
        });
      }

      if (err.response.data === 'This login is already exists') {
        return this.setState({ loginError: err.response.data });
      }

      if (err.response.data === 'This email is already exists') {
        return this.setState({ emailError: err.response.data });
      }
    }
  }

  isPasswordValid = (password, error) => {
    const noWhiteSpacesPattern = /^\S*$/;

    if (password.toString().length < 6 || !noWhiteSpacesPattern.test(password)) {
      return this.setState({
        [error]: 'Invalid password',
        open: true,
      });
    }
    return true;
  }

  clearError = () => {
    this.setState({
      loginError: '',
      emailError: '',
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
      loginError,
      emailError,
      open,
    } = this.state;
    return (
      <StyledPage>
        <div className="profile-header">
          <img className="profile-header-icon" src={avatarImage} alt="avatar" />

          <div className="text-wrapper">
            <div className="profile-header-login">{this.props.user?.login}</div>

            <div className="profile-header-user-id">@{this.props.user?._id}</div>
          </div>
        </div>

        <div className="profile-content-wrapper">
          <ListItemIcon>
            <InfoIcon color="primary" />

            <span className="profile-content-title">About</span>
          </ListItemIcon>

          <div className="profile-content">
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              className="profile-content-form"
            >
              <form onSubmit={this.onSubmit}>
                <TextField
                  value={login}
                  label="Login"
                  name="login"
                  variant="outlined"
                  onChange={this.onInputChange}
                  error={Boolean(loginError)}
                  helperText={loginError}
                />

                <TextField
                  value={email}
                  label="Email"
                  name="email"
                  variant="outlined"
                  onChange={this.onInputChange}
                  error={Boolean(emailError)}
                  helperText={emailError}
                  margin={'normal'}
                />

                <ListItem button onClick={this.handleClick}>
                  <ListItemIcon>
                    <LockIcon color="primary" />
                  </ListItemIcon>

                  <ListItemText primary="Change password" />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
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
                      type="password"
                      required
                      helperText={confirmPasswordError}
                      error={Boolean(confirmPasswordError)}
                      onChange={this.onInputChange}
                    />
                  </List>
                </Collapse>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Save
                </Button>
              </form>
            </List>

            <div className="profile-content-avatar">
              <span className="profile-content-avatar-text">Avatar</span>

              <img className="profile-content-avatar-img" src={avatarImage} alt="avatar" />
            </div>
          </div>
        </div>
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
