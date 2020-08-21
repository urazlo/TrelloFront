/* eslint-disable no-console */

import React from 'react';

import { connect } from 'react-redux';

import Column from 'ui/components/Column';
import { createColumn, getColumns, editColumnTitle } from 'api/columnApi';
import { updateColumns, addColumn, editColumn } from 'store/main/actions';
import StyledPage from 'pages/Board/components/StyledPage';

class Board extends React.Component {
  state = {
    title: '',
    showMenu: false,
  };

  async componentDidMount() {
    const columns = await getColumns(this.props.match.params.id);
    this.props.updateColumns(columns);
  }

  addColumn = async () => {
    try {
      const { title } = this.state;
      const boardId = this.props.match.params.id;
      const column = await createColumn({ title, boardId });

      this.props.addColumn(column);

      this.setState({ title: '' });
    } catch (err) {
      console.log(err.response.data);
    }
  }

  onChangeHandler = (e) => {
    this.setState({ title: e.target.value });
  }

  onInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.addColumn();
      this.setState({ showMenu: false });
    }

    if (e.key === 'Escape') {
      this.setState({ title: '', showMenu: false });
    }
  };

  editColumnTitle = async () => {
    try {
      const { title } = this.state;
      const boardId = this.props.match.params.id;
      const column = await editColumnTitle({ title, boardId });

      this.props.editColumn(column);

      this.setState({ title: '' });
    } catch (err) {
      console.log(err.response.data);
    }
  };

  onMenuClickHandler = () => {
    this.setState({ showMenu: true });
  }

  onAcceptClickHandler = () => {
    this.addColumn();
    this.setState({ showMenu: false });
  }

  onCancelClickHandler = () => {
    this.setState({ title: '', showMenu: false });
  }

  render() {
    const { title, showMenu } = this.state;
    return (
      <StyledPage>
        <div className="board">
          <div className="column-list-wrapper">
            {this.props.columns !== null && this.props.columns.map(({ id, title }) => (
              <Column
                key={id}
                columnId={id}
                columnTitle={title}
                editColumnTitle={this.editColumnTitle}
              />
            ))}

            <div className="column-add-menu column-wrapper">
              <button
                className="column-add-menu-open-button"
                onClick={this.onMenuClickHandler}
              >
                <span className="column-add-menu-open-placeholder">
                  + Add another column
                </span>
              </button>

              {showMenu && (
                <div className="column-add-menu-wrapper">
                  <input
                    className="column-add-input"
                    placeholder="Enter the column title"
                    value={title}
                    autoFocus
                    onKeyDown={this.onInputKeyDown}
                    onChange={this.onChangeHandler}
                  />

                  <div className="column-add">
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
    );
  }
}

const connectFunction = connect(
  ({ main }) => ({
    columns: main.columns,
  }),
  {
    updateColumns,
    addColumn,
    editColumn,
  },
);

export default connectFunction(Board);
