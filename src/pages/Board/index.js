/* eslint-disable no-console */

import React from 'react';

import { connect } from 'react-redux';

import Column from 'ui/components/Column';
import { getColumnsRequest, editColumnRequest, createColumnRequest } from 'api/columnApi';
import { getCardsRequest } from 'api/cardApi';
import { updateColumnsAction, addColumnAction, updateCardsAction, editColumnAction } from 'store/main/actions';
import StyledPage from 'pages/Board/components/StyledPage';

class Board extends React.Component {
  state = {
    title: '',
    showMenu: false,
  };

  async componentDidMount() {
    const columns = await getColumnsRequest(this.props.match.params.id);
    this.props.updateColumnsAction(columns);
    const cards = await getCardsRequest();
    this.props.updateCardsAction(cards);
  }

  addColumn = async () => {
    try {
      const { title } = this.state;
      const boardId = this.props.match.params.id;
      const column = await createColumnRequest({ title, boardId });

      this.props.addColumnAction(column);

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

  editColumnTitle = async (columnId, title) => {
    try {
      const userId = this.props.user.id;
      const column = await editColumnRequest({ userId, title, columnId });
      this.props.editColumnAction(column);

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
    user: main.user,
    columns: main.columns,
  }),
  {
    updateColumnsAction,
    editColumnAction,
    updateCardsAction,
    addColumnAction,
  },
);

export default connectFunction(Board);
