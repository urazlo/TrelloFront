import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import StyledPage from 'pages/SignUp/components/StyledPage';

import { signUp } from '../../api/authApi';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      email: '',
      password: '',
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

  onSubmit = (ev) => {
    ev.preventDefault();
    const { login, email, password } = this.state;
    signUp({ login, email, password });
  }

  render() {
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
            id="login"
            label="login"
            autoFocus
          />

          <TextField
            onChange={this.onEmailChange}
            margin="normal"
            variant="outlined"
            required
            fullWidth
            id="email"
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
            id="password"
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

export default SignUp;
