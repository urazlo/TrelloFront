import React from 'react';
import styled from 'styled-components';

import Card from 'ui/components/Card';

import { cardsStorage, getCardId } from 'utils';

class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnInputValue: this.props.columnTitle,
      cards: cardsStorage.get(),
      cardInputValue: '',
      showInput: false,
      showMenu: false,
    };
  }

  updateLocalStorage = () => {
    cardsStorage.set(this.state.cards);
  }

  addCard = () => {
    const { cards, cardInputValue } = this.state;

    if (cardInputValue.trim()) {
      const card = {
        id: getCardId(),
        title: cardInputValue.trim(),
      };

      this.setState({
        cards: [...cards, card],
        cardInputValue: '',
      }, this.updateLocalStorage);
    }
  }

  onChangeCardTitleHandler = (e) => {
    this.setState({ cardInputValue: e.target.value });
  }

  onCardInputKeyDown = (e) => {
    if (e.key === 'Enter') { this.addCard(); }

    if (e.key === 'Escape') {
      this.setState({ cardInputValue: '' });
    }
  };

  editCardTitle = (id, text) => {
    const { cards } = this.state;

    const index = cards.findIndex((card) => card.id === id);
    cards[index].title = text;

    this.setState({ cards }, this.updateLocalStorage);
  };

  onChangeColumnTitleHandler = (e) => {
    this.setState({ columnInputValue: e.target.value });
  }

  onColumnTitleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.props.editColumnTitle(this.props.columnId, this.state.columnInputValue);
      this.setState({ showInput: false });
    }

    if (e.key === 'Escape') {
      this.setState({ columnInputValue: this.props.columnTitle, showInput: false });
    }
  }

  onHeaderClickHandler = () => {
    this.setState({ showInput: true });
  }

  onHeaderBlurHandler = () => {
    this.setState({ showInput: false });
  }

  onMenuClickHandler = () => {
    this.setState({ showMenu: true });
  }

  onAcceptClickHandler = () => {
    this.addCard();
    this.setState({ showMenu: false });
  }

  onCancelClickHandler = () => {
    this.setState({ cardInputValue: '', showMenu: false });
  }

  render() {
    const {
      cards,
      columnInputValue,
      cardInputValue,
      showInput,
      showMenu,
    } = this.state;

    return (
      <div className="column-wrapper">
        <StyledPage>
          <div
            onClick={this.onHeaderClickHandler}
            className="column-header"
          >
            {columnInputValue}

            {showInput && (
              <input
                autoFocus
                className="column-header-title-edit"
                value={columnInputValue}
                onChange={this.onChangeColumnTitleHandler}
                onKeyDown={this.onColumnTitleInputKeyDown}
                onBlur={this.onHeaderBlurHandler}
              />
            )}

            <button className="column-header-menu">
              ...
            </button>
          </div>

          <div className="cards-list">
            {cards.map(({ id, title }) => (
              <Card
                key={id}
                cardId={id}
                cardTitle={title}
                editCardTitle={this.editCardTitle}
              />
            ))}
          </div>

          <div className="column-footer">
            <div className="card-add-menu">
              <button
                className="card-add-menu-open-button"
                onClick={this.onMenuClickHandler}
              >
                <span className="card-add-menu-placeholder">
                  + Add another card
                </span>
              </button>

              {showMenu && (
                <div className="card-add-menu-wrapper">
                  <input
                    className="card-add-input"
                    placeholder="Enter the card title"
                    autoFocus
                    value={cardInputValue}
                    onKeyDown={this.onCardInputKeyDown}
                    onChange={this.onChangeCardTitleHandler}
                  />

                  <div className="card-add-menu">
                    <button
                      className="card-add-accept-button"
                      onClick={this.onAcceptClickHandler}
                    >
                      Add card
                    </button>

                    <button
                      className="card-add-cancel-button"
                      onClick={this.onCancelClickHandler}
                    >
                      Х
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </StyledPage>
      </div>
    );
  }
}

const StyledPage = styled.div`
  background-color: #ebecf0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  white-space: normal;
  margin: 10px 5px;
  border-radius: 3px;

  .column-header{
    padding: 10px 10px 5px 15px;
    position: relative;
    cursor: pointer;
  }

  .column-header-menu{
    float: right;
    padding: 4px;
  }

  .column-header-title{}

  .column-header-title-edit{
    position: absolute;
    top: 5px;
    left: 10px;
    width: 200px;
    height: 21px;
    padding: 4px;
    outline: none;
    border: 1px solid rgba(9,30,66,.45);
    border-radius: 3px;
    box-shadow: inherit;
    font-size: 24px;
    line-height: 20px;
    font-family: inherit;
  }

  .column-header-menu{
    font-size: 18px;
    cursor: pointer;
  }

  .cards-list{
    flex: 1 1 auto;
    margin-bottom: 0;
    overflow: hidden;
    margin: 0 4px;
    padding: 0 4px;
    min-height: 0;
  }

  .column-footer{
    position: relative;
  }

  .card-add-menu{
    margin: 0 4px;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    white-space: nowrap;
  }

  .card-add-menu-open-button{
    color: #5e6c84;
    display: block;
    flex: 1 0 auto;
    margin: 2px auto;
    padding: 4px 8px;
    position: relative;
    text-decoration: none;
    user-select: none;
    font-size: 18px;

    &:hover{
      background-color: rgba(9,30,66,.13);
    }
  }

  .card-add-menu-placeholder{}

  .card-add-input{
    background: #fff;
    display: block;
    margin: 0;
    padding: 5px;
    height: 30px;
    font-size: 18px;
    outline: none;
    border: 1px solid transparent;
    border-radius: 3px; 

    &:focus{
      outline: none;
      border: 1px solid rgba(251, 106, 3, 0.64);
      border-radius: 3px;
    }
  }

  .card-add-menu-wrapper{
    width: 252px;
    background-color: #ebecf0;
    min-height: 32px;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    padding: 5px;
  }

  .card-add-menu{}

  .card-add-accept-button{
    margin-top: 5px;
    background-color: #5aac44;
    box-shadow: none;
    border: none;
    color: #fff;
    float: left;
    min-height: 32px;
    height: 32px;
    padding: 4px 0;
    font-size: 18px;
    padding: 5px;
    cursor: pointer;

    &:hover{
    background-color: #6ad24f;
    }
  }

  .card-add-cancel-button{
    margin-top: 5px;
    float: right;
    font-size: 20px;
    padding: 5px;
    cursor: pointer;

    &:hover{
      background-color: rgba(9,30,66,.13);
    }
  }
`;

export default Column;
