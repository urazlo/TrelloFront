import React from 'react';

import Header from 'ui/components/Header';
import Column from 'ui/components/Column';

import StyledPage from 'pages/UserBoard/components/StyledPage';
import { columnsStorage, getColumnId } from 'utils';

class UserBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      columns: columnsStorage.get(),
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
    }

    if (e.key === 'Escape') {
      this.setState({ value: '' });
    }
  };

  editColumnTitle = (id, text) => {
    const { columns } = this.state;

    const index = columns.findIndex((column) => column.id === id);
    columns[index].title = text;

    this.setState({ columns }, this.updateLocalStorage);
  };

  render() {
    const { columns, value } = this.state;
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

              <div className="column-add-menu column-wrapper">

                <button className="column-add-menu-open-button">

                  <span className="column-add-menu-open-placeholder">
                    + Add another column
                </span>

                </button>

                <input
                  className="column-edit-title"
                  placeholder="Enter the column title"
                  value={value}
                  onKeyDown={this.onInputKeyDown}
                  onChange={this.onChangeHandler}
                />

                <div className="column-edit-menu">

                  <button className="column-edit-accept-button">
                    Add column
              </button>

                  <button className="column-edit-cancel-button">
                    X
              </button>

                </div>

              </div>

            </div>

          </div>

        </StyledPage>

      </>
    );
  }
}

export default UserBoard;
