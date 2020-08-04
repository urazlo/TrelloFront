/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import StyledPage from 'pages/SignIn/components/StyledPage';

import { updateUser } from 'store/main/actions';
import { signIn } from '../../api/authApi';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      passwordHelperText: '',
      passwordError: false,

      email: '',
      emailHelperText: '',
      emailError: false,
    };
  }

  onEmailChange = (ev) => {
    this.setState({ email: ev.target.value });
  }

  onPasswordChange = (ev) => {
    this.setState({ password: ev.target.value });
  }

  onSubmit = async (ev) => {
    const { email, password } = this.state;
    try {
      ev.preventDefault();

      const user = await signIn({ email, password });

      if (user) {
        updateUser(user);

        this.setState({
          password: '',
          passwordHelperText: '',
          passwordError: false,

          email: '',
          emailHelperText: '',
          emailError: false,
        });
      }
    } catch (err) {
      if (err.response.status === 404) {
        // input[email].focus();

        this.setState({
          emailHelperText: 'There is not an account for this email.',
          emailError: true,
          passwordError: false,
          passwordHelperText: '',
        });
      }

      if (err.response.status === 400) {
        // input[password].focus();

        this.setState({
          passwordHelperText: 'Incorrect email address and / or password.',
          passwordError: true,
          emailError: false,
          emailHelperText: '',
        });
      }
    }
  }

  render() {
    const {
      passwordError,
      emailError,
      passwordHelperText,
      emailHelperText,
    } = this.state;

    return (
      <StyledPage>

        <h1 className="sign-in-title">Sign In</h1>

        <form
          className="sign-in-form"
          onSubmit={this.onSubmit}
        >

          <TextField
            onChange={this.onEmailChange}
            margin="normal"
            variant="outlined"
            required
            fullWidth
            name='email'
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
            name='password'
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
            Sign In
          </Button>

          <div className="help-links">

            <Link to="/restore-pass">Forgot password?</Link>

            <Link to="/auth/sign-up">Don't have an account? Sign Up</Link>

          </div>

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

export default connectFunction(SignIn);
