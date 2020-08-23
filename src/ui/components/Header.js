/* eslint-disable no-underscore-dangle */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CloseIcon from '@material-ui/icons/Close';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import unauthorizedLogoImage from 'ui/images/trello-logo-black.svg';
import authorizedLogoImage from 'ui/images/logo.png';
import defaultAvatar from 'ui/images/avatar.jpg';

import { updateUserAction } from 'store/main/actions';

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

  onLogoutHandler = () => {
    localStorage.removeItem('accessToken');
    this.props.updateUserAction(null);
    this.handleClose();
  }

  render() {
    const { value, anchorEl } = this.state;

    if (!this.props.user) {
      return (
        <UnauthorizedHeaderStyle>
          <Link to={`/${this.props.user?.id}`}>
            <img className="header-logo" src={unauthorizedLogoImage} alt="logo" />
          </Link>

          <div className="header-buttons">
            <Link to='/auth/sign-in'>
              <Button
                variant="contained"
                color="primary"
                className="header-buttons-sign-in header--button"
              >
                Log in
              </Button>
            </Link>

            <Link to='/auth/sign-up'>
              <Button
                variant="contained"
                color="primary"
                className="header-buttons-sign-up header--button"
              >
                Sign Up
              </Button>
            </Link>
          </div>
        </UnauthorizedHeaderStyle>
      );
    }
    return (
      <AuthorizedHeaderStyle>
        <div className="header-left-side">
          <Link className="header-button " to={`/${this.props.user?.id}`}>
            <HomeIcon className="header-button-icon" />
          </Link>

          <div className="header-button">
            <DashboardIcon className="header-button-icon" />
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
          </div>
        </div>

        <Link to={`/${this.props.user?.id}`}>
          <img className="header-logo" src={authorizedLogoImage} alt="logo" />
        </Link>

        <div className="header-right-side">
          <div className="header-button">
            <AddIcon className="header-button-icon" />
          </div>

          <img
            onClick={this.handleClick}
            className="account-icon"
            src={this.props.user?.avatar || defaultAvatar}
            alt="avatar"
          />

          <StyledMenu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
            marginThreshold={43}
          >
            <div className="header-menu">
              <div className="header-menu-title">Account</div>

              <CloseIcon className="header-menu-close-button" />
            </div>
            <ListItem
              className="hover-cancelator"
              divider={true}
            >
              <div className="header-menu-info">
                <img
                  src={this.props.user?.avatar || defaultAvatar}
                  alt="avatar"
                  className="header-menu-info-avatar"
                />

                <div>
                  <div className="header-menu-info-login">
                    {this.props.user?.login}
                  </div>

                  <div className="header-menu-info-email">
                    {this.props.user?.email}
                  </div>
                </div>
              </div>
            </ListItem>

            <Link to={`/${this.props.user?.id}/profile`}>
              <ListItem
                divider={true}
                className="header-menu-list"
                onClick={this.handleClose}
                selected={window.location.pathname.includes('/profile')}
              >
                <ListItemIcon>
                  <AccountBoxIcon color="primary" />
                </ListItemIcon>

                <ListItemText primary="Profile" />
              </ListItem>
            </Link>

            <Link to='/auth/sign-in'>
              <ListItem
                className="header-menu-list"
                onClick={this.onLogoutHandler}
              >
                <ListItemIcon>
                  <ExitToAppIcon color="primary" />
                </ListItemIcon>

                <ListItemText primary="Logout" />
              </ListItem>
            </Link>
          </StyledMenu>
        </div>
      </AuthorizedHeaderStyle>
    );
  }
}

const AuthorizedHeaderStyle = styled.div`
  background-color: #026aa7;
  box-sizing: border-box;
  display: flex;
  padding: 4px;
  max-height: 40px;
  width: 100%;
  overflow: hidden;

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
`;

const UnauthorizedHeaderStyle = styled.div`
  background-color: #F8F9F9;
  box-sizing: border-box;
  display: flex;
  overflow: hidden;
  padding: 4px;
  width: 100%;
  justify-content: space-between;

  .header-logo{
    background-repeat: no-repeat;
    cursor: pointer;
    height: 50px;
  }

  .header-buttons{
    display: flex;
    align-self: center;
  }

  .header-buttons-sign-in{
    background-color: #E2E4E6;
    color: hsl(0,0%,45%);
    box-shadow: 0 2px 0 #CDD2D4;

    &:hover{
      color: hsl(0,0%,30%);
      background-color: #D6DADC;
    }
  }

  .header-buttons-sign-up{
    background-color: #5AAC44;
    box-shadow: 0 2px 0 #3F6F21;

    &:hover{
      background-color: #5AAB44;
    }
  }

  .header--button{
    border-radius: 5px;
    text-decoration: none;
    padding: 11px;
    margin-right: 24px;
  }
`;

const StyledMenu = styled(Menu)`
  .header-menu{
    display: flex;
    position: relative;
    box-sizing: border-box;
    align-items: center;
    padding: 8px 0;
    color: #5e6c84;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);

    &:focus{
      outline: 0;
    }
  }

  .header-menu-title{
    margin: 0 auto;
    color: #000;
    font-size: 20px;
    font-weight: 500;
    color: #172b4d;
  }

  .header-menu-list{
    margin: 5px;
  }

  .header-menu-info{
    display: flex;
  }

  .header-menu-info-avatar{
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 100%;
    display: inline-flex;
    height: 40px;
    width: 40px;
    padding: 4px 8px 4px 12px;
  }

  .header-menu-info-email{
    font-size: 14px;
    color: #b3bac5;
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .header-menu-info-login{
    margin-top: 4px;
  }

  .header-menu-close-button{
    color: #6b778c;
    margin-right: 7px;

    &:hover{
      color: #000;
    }
  }

  .hover-cancelator{
    pointer-events: none;
  }
`;

const connectFunction = connect(
  ({ main }) => ({
    user: main.user,
  }),
  {
    updateUserAction,
  },
);
export default withRouter(connectFunction(Header));
