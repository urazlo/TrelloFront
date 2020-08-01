import React from 'react';

import Header from 'ui/components/Header';
import Column from 'ui/components/Column';

import StyledPage from 'pages/Board/components/StyledPage';
import { columnsStorage, getColumnId } from 'utils';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      columns: columnsStorage.get(),
      showMenu: false,
    };
  }

  updateLocalStorage = () => {
    columnsStorage.set(this.state.columns);
  }

  addColumn = () => {
    const { columns, value } = this.state;

    if (value.trim()) {
      const column = {
        id: getColumnId(),
        title: value.trim(),
      };

      this.setState({
        columns: [...columns, column],
        value: '',
      }, this.updateLocalStorage);
    }
  }

  onChangeHandler = (e) => {
    this.setState({ value: e.target.value });
  }

  onInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.addColumn();
      this.setState({ showMenu: false });
    }

    if (e.key === 'Escape') {
      this.setState({ value: '', showMenu: false });
    }
  };

  editColumnTitle = (id, text) => {
    const { columns } = this.state;

    const index = columns.findIndex((column) => column.id === id);
    columns[index].title = text;

    this.setState({ columns }, this.updateLocalStorage);
  };

  onMenuClickHandler = () => {
    this.setState({ showMenu: true });
  }

  onAcceptClickHandler = () => {
    this.addColumn();
    this.setState({ showMenu: false });
  }

  onCancelClickHandler = () => {
    this.setState({ value: '', showMenu: false });
  }

  render() {
    const { columns, value, showMenu } = this.state;
    return (
      <>

        <Header />

        <StyledPage>

          <div className="board">

            <div className="column-list-wrapper">

              {columns.map(({ id, title }) => (
                <Column
                  key={id}
                  columnId={id}
                  columnTitle={title}
                  editColumnTitle={this.editColumnTitle}
                />
              ))}

              <div
                className="column-add-menu column-wrapper"
              >

                <button
                  className="column-add-menu-open-button"
                  onClick={this.onMenuClickHandler}
                >

                  <span className="column-add-menu-open-placeholder">
                    + Add another column
                </span>

                </button>

                {showMenu && (
                  <div
                    className="column-add-menu-wrapper"
                  >

                    <input
                      className="column-add-input"
                      placeholder="Enter the column title"
                      value={value}
                      autoFocus
                      onKeyDown={this.onInputKeyDown}
                      onChange={this.onChangeHandler}
                    />

                    <div
                      className="column-add">

                      <button
                        className="column-add-accept-button"
                        onClick={this.onAcceptClickHandler}
                      >
                        Add column
                  </button>

                      <button
                        className="column-add-cancel-button"
                        onClick={this.onCancelClickHandler}
                      >
                        X
                  </button>

                    </div>

                  </div>
                )}

              </div>

            </div>

          </div>

        </StyledPage>

      </>
    );
  }
}

export default Board;
