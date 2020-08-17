/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */

import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LockIcon from '@material-ui/icons/Lock';
import InfoIcon from '@material-ui/icons/Info';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StyledPage from 'pages/Profile/components/StyledPage';

import { updateUser } from 'store/main/actions';
import { editUser, uploadUserAvatar } from 'api/userApi';
import defaultAvatar from 'ui/images/avatar.jpg';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.imageInput = React.createRef();
    this.state = {
      open: false,
      login: this.props.user?.login,
      email: this.props.user?.email,
      avatar: this.props.user?.avatar,
      password: '',
      newPassword: '',
      confirmPassword: '',
      loginError: '',
      emailError: '',
      passwordError: '',
      newPasswordError: '',
      confirmPasswordError: '',
      avatarChangeError: '',
      showSuccessMessage: false,
    };
  }

  onAvatarChanger = async (ev) => {
    try {
      const avatar = ev.target.files[0];
      const user = await uploadUserAvatar(avatar);

      this.props.updateUser(user);

      this.setState({
        avatar: this.props.user?.avatar,
        showSuccessMessage: true,
      });

      this.imageInput.current.value = '';
      setTimeout(() => this.setState({ showSuccessMessage: false }), 2000);
    } catch (err) {
      this.setState({ avatarChangeError: 'Invalid File!' });
    }
  }

  onClickInput = () => {
    this.imageInput.current.click();
  }

  componentDidMount() {
    window.addEventListener('click', this.onWindowClickListener);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onWindowClickListener);
  }

  onWindowClickListener = () => {
    this.setState({ avatarChangeError: '' });
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
      const id = this.props.user?.id;
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
          !this.isPasswordValid(newPassword, 'newPasswordError')
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
        open: false,
        showSuccessMessage: true,
      });
      setTimeout(() => this.setState({ showSuccessMessage: false }), 2000);
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
      avatarChangeError,
      loginError,
      emailError,
      open,
      avatar,
      showSuccessMessage,
    } = this.state;
    return (
      <StyledPage>
        <div className="profile-header">
          <img
            className="profile-header-icon"
            src={avatar || defaultAvatar}
            alt="avatar"
          />

          <div className="text-wrapper">
            <div className="profile-header-login">{this.props.user?.login}</div>

            <div className="profile-header-user-id">@{this.props.user?.id}</div>
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
            >
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
                  error={Boolean(loginError)}
                  helperText={loginError}
                  className="profile-content-form-field"
                />

                <TextField
                  value={email}
                  label="Email"
                  name="email"
                  variant="outlined"
                  onChange={this.onInputChange}
                  error={Boolean(emailError)}
                  helperText={emailError}
                  className="profile-content-form-field"
                />

                <ListItem
                  className="change-password-menu"
                  onClick={this.handleClick}
                >
                  <ListItemIcon>
                    <LockIcon color="primary" />
                  </ListItemIcon>

                  <ListItemText primary="Change password" />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div">
                    <TextField
                      value={password}
                      label="Old Password"
                      name="password"
                      variant="outlined"
                      type="password"
                      required
                      className="profile-content-form-field"
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
                      margin='normal'
                      className="profile-content-form-field"
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
                      className="profile-content-form-field"
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
                  className="profile-content-form-submit-button"
                >
                  Save
                </Button>
              </form>
            </List>

            <div className="profile-content-avatar">
              <span className="profile-content-avatar-text">Avatar</span>

              <img
                className="profile-content-avatar-img"
                src={avatar || defaultAvatar}
                alt="avatar"
              />

              <button
                className="avatar-change-button"
                onClick={this.onClickInput}
              >
                Change
              </button>

              <span className="avatar-change-error">
                {avatarChangeError}
              </span>

              <input
                ref={this.imageInput}
                name="avatar"
                type="file"
                className="hidden"
                onChange={this.onAvatarChanger}
                accept="image/jpeg,image/png,image/jpg"
              />
            </div>
          </div>
          {showSuccessMessage && (<div className="success-operation-notification">
            Saved
          </div>)}
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
