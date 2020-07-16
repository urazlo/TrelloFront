import React from 'react';
import styled from 'styled-components';

import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import StyledPage from "pages/SignIn/components/StyledPage";

class SignIn extends React.Component {
  state = {
    test: 'test',
  }

  onSubmit = (ev) => {
    ev.preventDefault();

    try {
      alert('WoW!!! So coll request!!!');
      // Api request
    } catch (err) {
      // Errors handler
    }
  }

  render() {

    return (
      <StyledPage>

        <h1 className="sign-in-title">
          Sign in
        </h1>

        <form
          className="sign-in-form"
          onSubmit={this.onSubmit}
        >
          <TextField
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
            <Link to="/restorePass">Forgot password?</Link>

            <Link to="/sign-up">Don't have an account? Sign Up</Link>
          </div>
        </form>
      </StyledPage>
    );
  }
}

export default SignIn;
