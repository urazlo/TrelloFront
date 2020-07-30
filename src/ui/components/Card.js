import React from 'react';

import styled from 'styled-components';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      cardTitle: '',
    };
  }

  onChangeHandler = (e) => {
    this.setState({ value: e.target.value });
  }

  handleEnter = (e) => {
    if (e.key === 'Enter') { this.addCard(); }
  };

  render() {
    const { value, cardTitle } = this.state;

    return (
      <StyledPage>

        <div className="list-card">

          <div className="card-details">

            <span className="card-details-title">{cardTitle}</span>

            <input
              className="card-details-edit"
              value={value}
              onChange={this.onChangeHandler}
            />

          </div>

        </div>

      </StyledPage>
    );
  }
}

const StyledPage = styled.div`

`;

export default Card;
