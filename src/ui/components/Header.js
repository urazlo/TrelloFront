import React from 'react';

import { Link } from 'react-router-dom';
import HeaderStyle from 'styles/HeaderStyles';

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

export default Header;
