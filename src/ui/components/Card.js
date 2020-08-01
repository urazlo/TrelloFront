import React from 'react';

import styled from 'styled-components';

class Card extends React.Component {
  state = {
    value: this.props.cardTitle,
    showInput: false,
  };

  onChangeCardTitleHandler = (e) => {
    this.setState({ value: e.target.value });
  }

  onCardTitleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.props.editCardTitle(this.props.cardId, this.state.value);
      this.setState({ showInput: false });
    }

    if (e.key === 'Escape') {
      this.setState({ value: this.props.cardTitle, showInput: false });
    }
  }

  onClickHandler = () => {
    this.setState({ showInput: true });
  }

  onBlurHandler = () => {
    this.setState({ showInput: false });
  }

  render() {
    const { value, showInput } = this.state;

    return (
      <StyledPage>

        <div className="card-details">

          <span className="card-details-title">{value}</span>

          {showInput && (
            <input
              className="card-details-edit"
              value={value}
              autoFocus
              onChange={this.onChangeCardTitleHandler}
              onKeyDown={this.onCardTitleInputKeyDown}
              onBlur={this.onBlurHandler}
            />
          )}

          <button
            onClick={this.onClickHandler}
            className="card-details-edit-button"
          >
            #
         </button>

        </div>

      </StyledPage>
    );
  }
}

const StyledPage = styled.div`
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 0 rgba(9,30,66,.25);
    cursor: pointer;
    display: block;
    margin-bottom: 8px;
    max-width: 300px;
    min-height: 20px;
    position: relative;
    text-decoration: none;

.card-details{
    background:#fff;
    border-radius: 3px;
    padding: 4px;
    position:relative;

    &:hover .card-details-edit-button{
      opacity: 1;
      color: black;
    }
  }

  .card-details-title{}

  .card-details-edit{
    position: absolute;
    top: 0;
    left: 0;
    width: 238px;
    height: 21px;
    padding: 3px;
    outline: none;
    border: 1px solid rgba(9,30,66,.45);
    border-radius: 3px;
    box-shadow: inherit;
    font-size: 24px;
    line-height: 20px;
    font-family: inherit;
  }

  .card-details-edit-button{
    opacity: 0;
    float: right;
    font-size: 18px;
    cursor: pointer;
  }
`;

export default Card;
