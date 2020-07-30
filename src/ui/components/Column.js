import React from 'react';

import styled from 'styled-components';

import { cardsStorage, getCardId } from 'utils';

import Card from 'ui/components/Card';

class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      value: '',
      cards: cardsStorage.get(),
    };
  }

  updateLocalStorage = () => {
    cardsStorage.set(this.state.cards);
  }

  addCard = () => {
    const { cards, title } = this.state;

    if (title.trim()) {
      const card = {
        id: getCardId(),
        title: title.trim(),
      };

      this.setState({
        cards: [...cards, card],
        title: '',
      }, this.updateLocalStorage);
    }
  }

  onChangeHandler = (e) => {
    this.setState({ title: e.target.value });
  }

  handleEnter = (e) => {
    if (e.key === 'Enter') { this.addCard(); }
  };

  render() {
    const { cards, title, value } = this.state;

    return (
      <StyledPage>

        <div className="column-item-wrapper">

          <div className="column-item">

            <div className="column-item-header">

              <span className="column-item-header-title">{this.props.columnTitle}</span>

              <input
                className="column-item-header-title-edit"
                value={value}
                onChange={this.onChangeHandler}
              />

              <button
                className="column-item-header-menu"
              >
                ...
              </button>

            </div>

            <div className="list-cards">

              {cards.map(({ id, title }) => (
                <Card
                  key={id}
                  id={id}
                  cardTitle={title}
                />
              ))}

            </div>

            <div className="column-item-footer">

              <div className="add-list column-item-wrapper">

                <button className="open-add-list">

                  <span className="placeholder">
                    + Добавьте еще одну карточку
                  </span>

                </button>

                <input
                  className="list-name-input"
                  placeholder="Ввести заголовок карточки"
                  autoComplete="off"
                  dir="auto"
                  value={title}
                  onKeyPress={this.handleEnter}
                  onChange={this.onChangeHandler}
                />

                <div className="column-item-add-card">

                  <button className="add-card-button">
                    Добавить список
                  </button>

                  <button className="cancel-edit">
                    Х
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </StyledPage>
    );
  }
}

const StyledPage = styled.div`

.column-item{
background-color: #ebecf0;
border-radius: 5px;
box-sizing: border-box;
display: flex;
flex-direction: column;
max-height: 100%;
position: relative;
white-space: normal;
}

.column-item-header-menu{
float:right;
padding:4px;
}
`;

export default Column;
