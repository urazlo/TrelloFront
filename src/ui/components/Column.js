import React from 'react';

import styled from 'styled-components';
// import { columnsStorage, getColumnId } from 'utils';

class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      // cards: cardsStorage.get(),
    };
  }

  // updateLocalStorage = () => {
  //   columnsStorage.set(this.state.columns);
  // }

  // addColumn = () => {
  //   const { columns, title } = this.state;

  //   if (title.trim()) {
  //     const column = {
  //       id: getColumnId(),
  //       title: title.trim(),
  //     };

  //     this.setState({
  //       columns: [...columns, column],
  //       title: '',
  //     }, this.updateLocalStorage);
  //   }
  // }

  // onChangeHandler = (e) => {
  //   this.setState({ title: e.target.title });
  // }

  // handleEnter = (e) => {
  //   if (e.key === 'Enter') { this.addColumn(); }
  // };

  render() {
    return (
      <StyledPage>

        <div className="column-item-wrapper">

          <div className="column-item">
            <div
              className="column-item-header"
            >
              <span className="column-item-header-title">{this.state.title}</span>

              <input
                className="column-item-header-title-edit hidden"
                value={this.state.changedTitle}
                onChange={this.onChangeColumnTitleHandler}
              />

              <button
                className="column-item-header-menu"
              >
                ...
</button>
            </div>
            <div className="list-cards">

              <div className="list card">

                <div className="card-details">

                  <span className="card-details-title">{this.state.cardTitle}</span>

                  <input
                    className="card-details-edit hidden"
                    value={this.state.cardTitle}
                    onChange={this.onChangeCardTitleHandler}
                  />
                </div>

              </div>
              <div className="column-item-footer">

                <div className="column-item-add-card">

                  <button
                    className="add-card-button"
                  >
                    +
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
