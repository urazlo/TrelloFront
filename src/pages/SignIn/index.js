import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import StyledPage from 'pages/SignIn/components/StyledPage';

import { signIn } from '../../api/authApi';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      email: '',
    };
  }

  onEmailChange = (ev) => {
    this.setState({ email: ev.target.value });
  }

  onPasswordChange = (ev) => {
    this.setState({ password: ev.target.value });
  }

  onSubmit = (ev) => {
    ev.preventDefault();
    const { email, password } = this.state;
    signIn({ email, password });
  }

  render() {
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
            id="email"
            label="Email Address"
            name="email"
            autoFocus
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
            Sign In
          </Button>

          <div className="help-links">
            <Link to="/restore-pass">Forgot password?</Link>

            <Link to="/sign-up">Don't have an account? Sign Up</Link>
          </div>
        </form>
      </StyledPage>
    );
  }
}

export default SignIn;
