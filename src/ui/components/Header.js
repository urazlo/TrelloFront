import React from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

class Header extends React.Component {
  state = {
    value: '',
  }

  onChangeHandler = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <HeaderStyle>

        <div className="header-left-side">

          <div>
            <button
              className="header-button"
            >
              <Link className="header-button-text" to="/">H</Link>
            </button>
          </div>

          <div>
            <button
              className="header-button"
            >
              <span className="header-button-text">B</span>
            </button>
          </div>

          <div className="header-search-field">
            <input
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              className="header-search-field"
              type="search"
              value={this.state.value}
              onChange={this.onChangeHandler}
            />
            <span className="">
              <label>
                <span className="   "
                  name="search"
                >
                </span>
              </label>
            </span>
          </div>

        </div>

        <Link className="header-logo" to="/"></Link>

        <div className="header-right-side">

          <div>
            <button
              className="header-button"
            >
              <span className="header-button-text">+</span>
            </button>
          </div>

          <div>
            <button
              className="header-button"
            >
              <span className="header-button-text">P</span>
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
    width:100%;

.header-left-side{
    display: flex;
    justify-content: flex-start;
    flex-grow: 1;
}

.header-button{
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;
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
    width: 32px;
    font-size:25px;
&:hover{
    background-color: hsla(0,0%,100%,.35);
}
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

.header-logo{
    background-image: url(https://seeklogo.com/images/T/trello-logo-45ABCC6452-seeklogo.com.png);
    background-repeat: no-repeat;
    background-size: 25%;
    max-width:22%;
    cursor: pointer;
    flex-grow: 1;
}

.header-right-side{
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
}

.header-button-text{
    margin:0 auto;
    color: #fff;
    text-decoration:none;
    }
`;

export default Header;
