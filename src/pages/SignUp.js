import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import SignIn from './SignIn';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test: 'test',
    };
  }

  render() {

    return (
      <StyledSignUp>
        <h1>Sign up</h1>

        <form className="sign-up-form">

          <TextField
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
            margin="normal"
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
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
            Sign Up
          </Button>

          <Link to="/sign-in" className="sign-up-link">
            Already have an account? Sign in
          </Link>
        </form>
      </StyledSignUp>
    );
  }
}

const StyledSignUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:400px;
  margin:0 auto;

.sign-up-form {
  width: 100%;
}

.sign-up-link{
  display:block;
  margin-top:10px;
  text-align:center;
}
`;

export default SignUp;
