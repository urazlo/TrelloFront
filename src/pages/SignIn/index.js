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
      email: '',
      error: false,
      helperText: 'Something went wrong',
    };
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

      const { email, password } = this.state;
      const user = await signIn({ email, password });
      if (user) {
        return updateUser(user);
      }
    } catch (err) {
      if (err.response.status === 404) {
        return this.setState({ helperText: 'There is not an account for this email' });
      }

      if (err.response.status === 400) {
        return this.setState({ helperText: 'Incorrect email address and / or password.' });
      }
    }
  }

  render() {
    const { autoFocus, error, helperText } = this.state;
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
            label="Email Address"
            name="email"
          />

          <TextField
            onChange={this.onPasswordChange}
            margin="normal"
            variant="outlined"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoFocus={autoFocus}
            helperText={helperText}
            error={error}
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
