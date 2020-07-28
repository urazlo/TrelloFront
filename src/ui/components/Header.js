import React from 'react';

import HeaderStyle from 'styles/HeaderStyle';

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

          <button className="header-home-button header--button"></button>

          <button className="header-border-list-button header--button"></button>

          <div className="header-search">

            <input
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              className="search-text-area"
              type="search"
              value={this.state.value}
              onChange={this.onChangeHandler}
            />

            <button className="header-search-button header--button"></button>
          </div>

        </div>

        <div className="header-logo"></div>

        <div className="header-right-side">

          <button className="header-create-board-button header--button"></button>

          <div className="user-profile-button header--button"> </div>

        </div>

      </HeaderStyle>
    );
  }
}

export default Header;
