/* eslint-disable no-underscore-dangle */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import logoImage from 'ui/images/logo.png';
import avatarImage from 'ui/images/avatar.png';

import { updateUser } from 'store/main/actions';

class Header extends React.Component {
  state = {
    value: '',
    anchorEl: null,
  }

  handleClick = (ev) => {
    this.setState({ anchorEl: ev.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  onChangeHandler = (ev) => {
    this.setState({ value: ev.target.value });
  }

  onLogoutClickHandler = () => {
    localStorage.removeItem('accessToken');
    this.props.updateUser(null);
  }

  render() {
    const { value, anchorEl } = this.state;

    return (
      <HeaderStyle>
        <div className="header-left-side">
          <div>
            <button className="header-button">
              <Link className="header-button-icon" to={`/${this.props.user?._id}`}>
                <HomeIcon />
              </Link>
            </button>
          </div>

          <div>
            <button className="header-button">
              <span className="header-button-icon">
                <DashboardIcon />
              </span>
            </button>
          </div>

          <div className="header-search-field">
            <input
              className="header-search-field"
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              type="search"
              value={value}
              onChange={this.onChangeHandler}
            />

            <button className="header-search-button">
              S
            </button>
          </div>
        </div>

        <Link to={`/${this.props.user?._id}`}>
          <img className="header-logo" src={logoImage} alt="logo" />
        </Link>

        <div className="header-right-side">
          <div>
            <button className="header-button">
              <span className="header-button-icon">
                +
              </span>
            </button>
          </div>
          <div>
            <Button
              aria-controls="customized-menu"
              aria-haspopup="true"
              variant="contained"
              color="primary"
              onClick={this.handleClick}
            >
              <img className="account-icon" src={avatarImage} alt="avatar" />
            </Button>
            <Menu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <ListItemIcon>
                <AccountBoxIcon fontSize="small" />
              </ListItemIcon>

              <Link to={`/${this.props.user?._id}/profile`}>
                <ListItemText primary="Profile" />
              </Link>

              <ListItemIcon>
                <ExitToAppIcon fontSize="small" />
              </ListItemIcon>

              <Link to='/auth/sign-in'>
                <ListItemText onClick={this.onLogoutClickHandler} primary="Logout" />
              </Link>
            </Menu>
          </div>
        </div>
      </HeaderStyle>
    );
  }
}

const HeaderStyle = styled.div`
  background-color: #026aa7;
  box-sizing: border-box;
  display: flex;
  overflow: hidden;
  padding: 4px;
  max-height: 40px;
  width: 100%;

  .header-left-side{
    display: flex;
    justify-content: flex-start;
    flex-grow: 1;
  }

  .header-button{
    border: 0;
    border-radius: 3px;
    cursor: pointer;
    text-decoration: none;
    align-items: center;
    background-color: hsla(0,0%,100%,.3);
    box-shadow: none;
    color: #fff;
    display: flex;
    font-weight: 700;
    line-height: 32px;
    margin-right: 4px;
    padding: 0;
    font-size: 25px;
    width: 32px;

    &:hover{
      background-color: hsla(0,0%,100%,.4);
    }
  }

  .header-button-icon{
    margin: 0 auto;
    color: #fff;
    text-decoration: none;
  }

  .header-search-field{
    position: relative;
    background-color: hsla(0,0%,100%,.3);
    border-radius: 3px;
    border: none;
    box-shadow: none;
    box-sizing: border-box;
    color: hsla(0,0%,100%,.9);
    font-size: 15px;
    height: 32px;
    line-height: 19px;
    margin: 0;
    outline: none;
    width: 180px;
  }

  .header-search-button{}

  .header-search-button-icon{}

  .header-logo{
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
    width: 85px;
    position: absolute;
    left: calc(50% - 44.5px);
    height: 32px;
  }

  .header-right-side{
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
  }

  .account-icon{
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 100%;
    display: inline-flex;
    height: 32px;
    cursor: pointer;
    width: 32px;
  }

  .account-menu{
    display: flex;
    position: fixed; 
    width: 304px; 
    top: 45px; 
    right: 5px;
    color: #172b4d;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 8px 16px -4px rgba(9,30,66,.25), 0 0 0 1px rgba(9,30,66,.08);
    box-sizing: border-box;
    outline: 0;
    overflow: hidden;
    flex-direction: column;
  }

  .account-menu-header{
    color: #172b4d;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    color: #5e6c84;
    height: 40px;
    display: block;
    line-height: 40px;
    margin: 0;
    overflow: hidden;
    padding: 0 32px;
    position: relative;
  }

  .account-menu-header-title{
    text-align: center;
  }
  .account-menu-header-close-button{
    height: auto;
    width: 10px;
  }

  .account-menu-content{
    border-top: 1px solid rgba(9,30,66,.13);
    display: flex;
    padding: 10px;
    border-bottom: 1px solid rgba(9,30,66,.13);
  }

  .account-menu-content-icon{
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 100%;
    display: inline-flex;
    cursor: pointer;
    background-image: url(https://trello-members.s3.amazonaws.com/5bfd30ebc8b1b8405ecfa81a/b5bcd7a0159b21e10680c583eb43322b/50.png);
    height: 40px;
    width: 40px;
  }

  .account-menu-content-info{
    margin-left: 10px;
  }

  .account-menu-content-info-username{
    margin-top: 4px;
    max-width: 230px;
  }

  .account-menu-content-info-email{
    font-size: 9pt;
    color: #b3bac5;
    display: block;
    overflow: hidden;
    max-width: 230px;
  }

  .account-menu-user-page{

  }

  .account-menu-logout{

  }

  .account-menu-option{
    background-color: transparent;
    border: none;
    background: #fff;
    border-radius: 0;
    box-shadow: none;
    color: #172b4d;
    display: block;
    height: 100%;
    padding: 6px 12px;
    text-align: left;
    text-decoration: none;
    width: 100%;
    transition: none;
    margin: 0;
    outline: 0;

    &:hover{
      background-color: transparent;
      border: none;
      box-shadow: none;
      color: #172b4d;
      background: rgba(9,30,66,.04);
    }
  }
`;

const connectFunction = connect(
  ({ main }) => ({
    user: main.user,
  }),
  {
    updateUser,
  },
);
export default withRouter(connectFunction(Header));
