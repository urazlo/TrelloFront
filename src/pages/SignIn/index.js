/* eslint-disable no-underscore-dangle */
import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import StyledPage from 'pages/SignIn/components/StyledPage';

import { updateUser } from 'store/main/actions';
import { accessToken } from 'utils';
import { signIn } from '../../api/authApi';

class SignIn extends React.Component {
  state = {
    userName: '',
    userNameError: '',

    password: '',
    passwordError: '',
  };

  onSubmit = async (ev) => {
    try {
      ev.preventDefault();
      const { userName, password } = this.state;

      const { user, token } = await signIn({ userName, password });
      accessToken.set(token);

      this.props.updateUser(user);
      this.props.history.push(`/${user._id}`);
    } catch (err) {
      if (err.response.data === 'Not Found') {
        this.errorsClear();
        this.setState({ userNameError: 'There is not an account for this user.' });
      }

      if (err.response.data === 'Wrong password') {
        this.errorsClear();
        this.setState({ passwordError: err.response.data });
      }
    }
  }

  errorsClear = () => {
    this.setState({ userNameError: '', passwordError: '' });
  }

  onInputChange = (ev) => {
    this.errorsClear();
    this.setState({ [ev.target.name]: ev.target.value });
  };

  render() {
    const {
      userName,
      password,
      userNameError,
      passwordError,
    } = this.state;

    return (
      <StyledPage>
        <h1 className="sign-in-title">Sign In</h1>

        <form
          className="sign-in-form"
          onSubmit={this.onSubmit}
        >
          <TextField
            onChange={this.onInputChange}
            variant="outlined"
            required
            fullWidth
            name='userName'
            label="Email / login"
            value={userName}
            error={Boolean(userNameError)}
            helperText={userNameError}
            className="sign-in-form-field"
          />

          <TextField
            onChange={this.onInputChange}
            variant="outlined"
            required
            fullWidth
            name='password'
            label="Password"
            type="password"
            value={password}
            error={Boolean(passwordError)}
            helperText={passwordError}
            className="sign-in-form-field"
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

export default withRouter(connectFunction(SignIn));
