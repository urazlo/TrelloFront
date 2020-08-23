/* eslint-disable no-console */

import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { createCardRequest, editCardRequest } from 'api/cardApi';
import { updateCardsAction, addCardAction, editCardAction } from 'store/main/actions';
import Card from 'ui/components/Card';

class Column extends React.Component {
  state = {
    columnInputValue: this.props.columnTitle,
    cardInputValue: '',
    showInput: false,
    showMenu: false,
  };

  // async componentDidMount() {
  //   const cards = await getCards(this.props.columnId);
  //   this.props.updateCards(cards);
  //   // let cards = [
  //   //   { id: 4, columnId: 7, title: 2 },
  //   //   { id: 5, columnId: 8, title: 3 },
  //   //   { id: 6, columnId: 9, title: 34 },
  //   // ];
  //   // console.log(this.props.columnId);
  //   // cards.map(card => {
  //   //   if (card.columnId === this.props.columnId) {
  //   //     return console.log(card, '1');
  //   //   }
  //   // });
  // }

  addCard = async () => {
    try {
      const { cardInputValue } = this.state;
      const columnId = this.props.columnId;
      const card = await createCardRequest({ cardInputValue, columnId });

      this.props.addCardAction(card);

      this.setState({ cardInputValue: '' });
    } catch (err) {
      console.log(err.response.data);
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

  editCardTitle = async (cardId, title) => {
    try {
      const userId = this.props.user.id;
      const card = await editCardRequest({ userId, title, cardId });
      this.props.editCardAction(card);

      this.setState({ cardInputValue: '' });
    } catch (err) {
      console.log(err.response.data);
    }
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
      columnInputValue,
      cardInputValue,
      showInput,
      showMenu,
    } = this.state;

    return (
      <div className="column-wrapper">
        <StyledPage id={this.props.columnId}>
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
            {
              this.props.cards !== null && this.props.cards.map(card => {
                if (card.columnId === this.props.columnId) {
                  return (
                    <Card
                      key={card.id}
                      cardId={card.id}
                      cardTitle={card.title}
                      editCardTitle={this.editCardTitle}
                    />
                  );
                }
                return null;
              })
            }
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

const connectFunction = connect(
  ({ main }) => ({
    cards: main.cards,
    user: main.user,
  }),
  {
    updateCardsAction,
    addCardAction,
    editCardAction,
  },
);

export default connectFunction(Column);
