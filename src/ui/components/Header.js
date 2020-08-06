import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { updateUser } from 'store/main/actions';

import logoImage from 'ui/images/logo.png';

class Header extends React.Component {
  state = {
    value: '',
  }

  onChangeHandler = (e) => {
    this.setState({ value: e.target.value });
  }

  onLogoutClickHandler = () => {
    localStorage.removeItem('accessToken');
    this.props.updateUser(null);
  }

  render() {
    return (
      <HeaderStyle>
        <div className="header-left-side">
          <div>
            <button className="header-button">
              <Link className="header-button-icon" to="/">
                H
              </Link>

            </button>
          </div>

          <div>
            <button className="header-button">
              <span className="header-button-icon">
                B
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
              value={this.state.value}
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
            <button className="header-button">
              <span
                onClick={this.onLogoutClickHandler}
                className="header-button-icon">
                Logout
              </span>
            </button>
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
`;

const connectFunction = connect(
  null,
  {
    updateUser,
  },
);
export default connectFunction(Header);
