/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import StyledPage from 'pages/SignUp/components/StyledPage';

import { signUp } from 'api/authApi';
import { accessToken } from 'utils';
import { updateUser } from 'store/main/actions';

class SignUp extends React.Component {
  state = {
    login: '',
    loginError: '',

    email: '',
    emailError: '',

    password: '',
    passwordError: '',
  };

  onSubmit = async (ev) => {
    try {
      ev.preventDefault();

      const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      const noWhiteSpacesPattern = /^\S*$/;
      const { login, email, password } = this.state;

      if (login.toString().length < 3 || !noWhiteSpacesPattern.test(login)) {
        this.errorsClear();
        return this.setState({ loginError: 'Invalid login' });
      }

      if (!emailPattern.test(email)) {
        this.errorsClear();
        return this.setState({ emailError: 'Invalid email' });
      }

      if (password.toString().length < 6 || !noWhiteSpacesPattern.test(password)) {
        this.errorsClear();
        return this.setState({ passwordError: 'Invalid password' });
      }

      const { user, token } = await signUp({ login, email, password });
      accessToken.set(token);

      this.props.updateUser(user);
      this.props.history.push(`/${user._id}`);
    } catch (err) {
      if (err.response.data === 'This login is already exists') {
        this.errorsClear();
        return this.setState({ loginError: err.response.data });
      }

      if (err.response.data === 'This email is already exists') {
        this.errorsClear();
        return this.setState({ emailError: err.response.data });
      }
    }
  }

  errorsClear = () => {
    this.setState({
      loginError: '',
      emailError: '',
      passwordError: '',
    });
  }

  onInputChange = (ev) => {
    this.errorsClear();
    this.setState({ [ev.target.name]: ev.target.value });
  };

  render() {
    const {
      loginError,
      passwordError,
      emailError,
      login,
      password,
      email,
    } = this.state;

    return (
      <StyledPage>

        <h1>Sign Up</h1>

        <form
          className="sign-up-form"
          onSubmit={this.onSubmit}
        >

          <TextField
            onChange={this.onInputChange}
            name="login"
            margin="normal"
            variant="outlined"
            required
            fullWidth
            label="login"
            autoFocus
            value={login}
            error={Boolean(loginError)}
            helperText={loginError}
          />

          <TextField
            onChange={this.onInputChange}
            margin="normal"
            variant="outlined"
            required
            fullWidth
            name="email"
            label="Email Address"
            value={email}
            error={Boolean(emailError)}
            helperText={emailError}
          />

          <TextField
            onChange={this.onInputChange}
            margin="normal"
            variant="outlined"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            value={password}
            error={Boolean(passwordError)}
            helperText={passwordError}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button>

          <Link to="/auth/sign-in" className="sign-up-link">
            Already have an account? Sign in
          </Link>

        </form>

      </StyledPage>
    );
  }
}

const connectFunction = connect(
  null,
  {
    updateUser,
  },
);

export default withRouter(connectFunction(SignUp));
