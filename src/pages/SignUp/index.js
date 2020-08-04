/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import StyledPage from 'pages/SignUp/components/StyledPage';

import { signUp } from 'api/authApi';
import { updateUser } from 'store/main/actions';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      loginHelperText: '',
      loginError: false,

      email: '',
      emailHelperText: '',
      emailError: false,

      password: '',
      passwordHelperText: '',
      passwordError: false,
    };
  }

  onLoginChange = (ev) => {
    this.setState({ login: ev.target.value });
  }

  onEmailChange = (ev) => {
    this.setState({ email: ev.target.value });
  }

  onPasswordChange = (ev) => {
    this.setState({ password: ev.target.value });
  }

  onSubmit = async (ev) => {
    try {
      ev.preventDefault();

      const { login, email, password } = this.state;

      const user = await signUp({ login, email, password });

      if (user) {
        updateUser(user);
        this.setState({
          login: '',
          loginHelperText: '',
          loginError: false,

          email: '',
          emailHelperText: '',
          emailError: false,

          password: '',
          passwordHelperText: '',
          passwordError: false,
        });
      }
    } catch (err) {
      if (err.response.data === 'Invalid login') {
        this.setState({
          loginHelperText: err.response.data,
          loginError: true,

          emailHelperText: '',
          emailError: false,

          passwordHelperText: '',
          passwordError: false,
        });
      }

      if (err.response.data === 'Invalid email') {
        this.setState({
          loginHelperText: '',
          loginError: false,

          emailHelperText: err.response.data,
          emailError: true,

          passwordHelperText: '',
          passwordError: false,
        });
      }

      if (err.response.data === 'Invalid password') {
        this.setState({
          loginHelperText: '',
          loginError: false,

          emailHelperText: '',
          emailError: false,

          passwordHelperText: err.response.data,
          passwordError: true,
        });
      }
    }
  }

  render() {
    const {
      loginError,
      passwordError,
      emailError,
      loginHelperText,
      passwordHelperText,
      emailHelperText,
    } = this.state;

    return (
      <StyledPage>

        <h1>Sign Up</h1>

        <form
          className="sign-up-form"
          onSubmit={this.onSubmit}
        >

          <TextField
            onChange={this.onLoginChange}
            name="login"
            margin="normal"
            variant="outlined"
            required
            fullWidth
            label="login"
            autoFocus
            error={loginError}
            helperText={loginHelperText}
          />

          <TextField
            onChange={this.onEmailChange}
            margin="normal"
            variant="outlined"
            required
            fullWidth
            label="Email Address"
            error={emailError}
            helperText={emailHelperText}
          />

          <TextField
            onChange={this.onPasswordChange}
            margin="normal"
            variant="outlined"
            required
            fullWidth
            label="Password"
            type="password"
            error={passwordError}
            helperText={passwordHelperText}
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

export default connectFunction(SignUp);
