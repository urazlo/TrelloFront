import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { updateUser } from 'store/main/actions';

import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import logoImage from 'ui/images/logo.png';

class Header extends React.Component {
  state = {
    value: '',
    showMenu: false,
  }

  onChangeHandler = (e) => {
    this.setState({ value: e.target.value });
  }

  onLogoutClickHandler = () => {
    this.setState({ showMenu: true });
    // localStorage.removeItem('accessToken');
    // this.props.updateUser(null);
  }

  render() {
    const { value, showMenu } = this.state;
    return (
      <HeaderStyle>
        <div className="header-left-side">
          <div>
            <button className="header-button">
              <Link className="header-button-icon" to="/">
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
              <span className="header-search-button-icon">
                S
              </span>
            </button>
          </div>
        </div>
        <Link to="/">
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
            <button>
              <span
                onClick={this.onLogoutClickHandler}
                className="account-icon">
              </span>

            </button>
          </div>
        </div>
        {showMenu && (
          <nav className="account-menu">
            <div className="account-menu-header">
              <div className="account-menu-header-title">Account</div>

              <div className="account-menu-header-close-button">
                X
              </div>
            </div>

            <div className="account-menu-user">
              <div className="account-menu-user-icon"></div>

              <div className="account-menu-user-info">
                <span className="account-menu-user-info-username">
                  username
                </span>

                <span className="account-menu-user-info-email">
                  email
                </span>
              </div>
            </div>

            <div className="account-menu-user-page">Profile</div>

            <div className="account-menu-logout">Log Out</div>
          </nav>
        )}
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
    background-image: url(https://trello-members.s3.amazonaws.com/5bfd30ebc8b1b8405ecfa81a/b5bcd7a0159b21e10680c583eb43322b/50.png);
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
  }

  .account-menu-header{
    color: #172b4d;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    border-bottom: 1px solid rgba(9,30,66,.13);
    color: #5e6c84;
    height: 40px;
    display: block;
    line-height: 40px;
    margin: 0;
    overflow: hidden;
    padding: 0 32px;
    position: relative;
  }

  .account-menu-header-title{}
  .account-menu-header-close-button{
    height: auto;
    width: 10px;
  }

  .account-menu-user{
    display: flex;
  }

  .account-menu-user-icon{
    align-items: center;
    background-color: #dfe1e6;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border: 0;
    border-radius: 100%;
    box-sizing: border-box;
    color: #172b4d;
    display: inline-flex;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;
    font-size: 12px;
    font-weight: 700;
    justify-content: center;
    line-height: 28px;
    opacity: 1;
    height: 28px;
    width: 28px;
    overflow: hidden;
    white-space: nowrap;
    background-image: url(https://trello-members.s3.amazonaws.com/5bfd30ebc8b1b8405ecfa81a/b5bcd7a0159b21e10680c583eb43322b/50.png);
    height: 40px;
    width: 40px;
    line-height: 40px;
  }

  .account-menu-user-info{

  }

  .account-menu-user-info-username{

  }

  .account-menu-user-info-email{

  }

  .account-menu-user-page{

  }
  .account-menu-logout{

  }
`;

const connectFunction = connect(
  null,
  {
    updateUser,
  },
);
export default connectFunction(Header);
