import React from 'react';

import StyledPage from 'pages/UserBoards/components/StyledPage';
import Header from 'ui/components/Header';
import { boardsStorage, getBoardId } from 'utils';
import Board from 'ui/components/Board';

class BorderList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      boards: boardsStorage.get(),
    };
  }

  updateLocalStorage = () => {
    boardsStorage.set(this.state.boards);
  }

  addBoard = () => {
    const { boards, title } = this.state;

    if (title.trim()) {
      const board = {
        id: getBoardId(),
        title: title.trim(),
      };

      this.setState({
        boards: [...boards, board],
        title: '',
      }, this.updateLocalStorage);
    }
  }

  onChangeHandler = (e) => {
    this.setState({ title: e.target.value });
  }

  handleEnter = (e) => {
    if (e.key === 'Enter') { this.addBoard(); }
  };

  render() {
    const { boards } = this.state;
    return (
      <>
        <Header />
        <StyledPage>

          <div className="all-boards">

            <div className="boards-page-board-section-header">
              Персональные доски
            </div>

            <ul className="boards-page-board-section-list">

              {boards.map(({ id, title }) => (
                <Board
                  key={id}
                  id={id}
                  title={title}
                />
              ))}

              <li className="boards-page-board-section-add-item">

                <input
                  className="add-board-input"
                  placeholder="Создать доску"
                  autoFocus
                  value={this.state.title}
                  onKeyPress={this.handleEnter}
                  onChange={this.onChangeHandler}
                />
              </li>
            </ul>

          </div>

        </StyledPage>
      </>
    );
  }
}

export default BorderList;
