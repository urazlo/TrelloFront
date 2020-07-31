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

  onMenuBlurHandler = () => {
    this.setState({ showMenu: false });
  }

  render() {
    const { cards, columnInputValue, cardInputValue, showInput, showMenu } = this.state;

    return (
      <StyledPage>

        <div className="column-wrapper">

          <div className="column">

            <div
              onClick={this.onHeaderClickHandler}
              className="column-header"
            >

              <span className="column-header-title">
                {columnInputValue}
              </span>

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

              <button
                className="column-header-menu"
              >
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

            <div
              className="column-footer"
            >

              <div className="card-add-menu column-wrapper">

                <button
                  className="card-add-menu-open-button"
                  onClick={this.onMenuClickHandler}
                >

                  <span className="card-add-menu-placeholder">
                    + Add another card
                  </span>

                </button>

                {showMenu && (
                  <>

                    <input
                      className="card-add-input"
                      placeholder="Enter the card title"
                      autoFocus
                      value={cardInputValue}
                      onKeyDown={this.onCardInputKeyDown}
                      onChange={this.onChangeCardTitleHandler}
                      onBlur={this.onMenuBlurHandler}
                    />

                    <div className="card-edit-menu">

                      <button className="card-edit-accept-button">
                        Add card
                  </button>

                      <button className="card-edit-cancel-button">
                        Х
                  </button>

                    </div>

                  </>
                )}

              </div>

            </div>

          </div>

        </div>

      </StyledPage>
    );
  }
}

const StyledPage = styled.div`
    .column{
    background-color: #ebecf0;
    border-radius: 5px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    position: relative;
    white-space: normal;
    margin: 10px 5px;
}

    .column-header-menu{
    float:right;
    padding:4px;
}

    .column-header-title{

}

    .column-header-title-edit{
}

    .column-header-menu{

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

}

    .card-add-menu{
   
    }

    .card-add-menu-open-button{
    border-radius: 3px;
    color: #5e6c84;
    display: block;
    flex: 1 0 auto;
    margin: 2px auto;
    padding: 4px 8px;
    position: relative;
    text-decoration: none;
    user-select: none;
    font-size:18px;

    &:hover{
      background-color: rgba(9,30,66,.13);
    }
}

    .card-add-menu-placeholder{

    }

    .card-add-input{

    }

    .card-edit-menu{

    }

    .card-edit-accept-button{

    }

    .card-edit-cancel-button{

    }
`;

export default Column;
