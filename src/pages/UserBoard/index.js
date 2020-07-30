import React from 'react';

import StyledPage from 'pages/UserBoard/components/StyledPage';
import { columnsStorage, getColumnId } from 'utils';

import Header from 'ui/components/Header';
import Column from 'ui/components/Column';

class UserBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      columns: columnsStorage.get(),
    };
  }

  updateLocalStorage = () => {
    columnsStorage.set(this.state.columns);
  }

  addColumn = () => {
    const { columns, title } = this.state;

    if (title.trim()) {
      const column = {
        id: getColumnId(),
        title: title.trim(),
      };

      this.setState({
        columns: [...columns, column],
        title: '',
      }, this.updateLocalStorage);
    }
  }

  onChangeHandler = (e) => {
    this.setState({ title: e.target.value });
  }

  handleEnter = (e) => {
    if (e.key === 'Enter') { this.addColumn(); }
  };

  render() {
    const { columns, title } = this.state;

    return (
      <>

        <Header />

        <StyledPage>

          <div className="column-item-wrapper">

            {columns.map(({ id, title }) => (
              <Column
                key={id}
                columnId={id}
                columnTitle={title}
              />
            ))}
          </div>

          <div className="add-list column-item-wrapper">

            <button className="open-add-list">

              <span className="placeholder">
                + Добавьте еще одну колонку
              </span>

            </button>

            <input
              className="list-name-input"
              placeholder="Ввести заголовок списка"
              autoComplete="off"
              dir="auto"
              value={title}
              onKeyPress={this.handleEnter}
              onChange={this.onChangeHandler}
            />

            <div className="list-add">

              <button className="list-add-button">
                Добавить список
              </button>

              <button className="cancel-edit">
                X
              </button>

            </div>

          </div>

        </StyledPage>

      </>
    );
  }
}

export default UserBoard;
