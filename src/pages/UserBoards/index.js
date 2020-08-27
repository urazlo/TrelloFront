/* eslint-disable no-console */

import React from 'react';

import { connect } from 'react-redux';

import BoardPreview from 'ui/components/BoardPreview';
import { createBoardRequest, getBoardsRequest } from 'api/boardApi';
import { updateBoardsAction, addBoardAction } from 'store/main/actions';

import StyledPage from 'pages/UserBoards/components/StyledPage';

class BorderList extends React.Component {
  state = {
    title: '',
  };

  async componentDidMount() {
    const boards = await getBoardsRequest();
    this.props.updateBoardsAction(boards);
  }

  addBoard = async () => {
    try {
      const { title } = this.state;

      const board = await createBoardRequest(title);

      this.props.addBoardAction(board);

      this.setState({ title: '' });
    } catch (err) {
      console.log(err.response.data);
    }
  }

  onChangeHandler = (ev) => {
    this.setState({ title: ev.target.value });
  }

  onInputKeyDown = (ev) => {
    if (ev.key === 'Enter') { this.addBoard(); }

    if (ev.key === 'Escape') { this.setState({ title: '' }); }
  }

  render() {
    const { title } = this.state;

    return (
      <StyledPage>
        <div className="boards-wrapper">
          <div className="boards-section-header">
            Personal boards
          </div>

          <ul className="boards-section-list">
              {this.props.boards !== null && this.props.boards.map(({ id, title }) => (
                <BoardPreview
                  key={id}
                  boardId={id}
                  boardTitle={title}
                />
              ))}

            <li className="boards-section-add-board">
              <input
                className="add-board-input"
                placeholder="Create board"
                autoFocus
                value={title}
                onKeyDown={this.onInputKeyDown}
                onChange={this.onChangeHandler}
              />
            </li>
          </ul>
        </div>
      </StyledPage>
    );
  }
}

const connectFunction = connect(
  ({ main }) => ({
    user: main.user,
    boards: main.boards,
  }),
  {
    updateBoardsAction,
    addBoardAction,
  },
);

export default connectFunction(BorderList);
