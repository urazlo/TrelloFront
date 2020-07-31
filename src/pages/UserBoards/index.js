import React from 'react';

import Header from 'ui/components/Header';
import DemoBoard from 'ui/components/DemoBoard';

import StyledPage from 'pages/UserBoards/components/StyledPage';
import { boardsStorage, getBoardId } from 'utils';

class BorderList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      boards: boardsStorage.get(),
    };
  }

  updateLocalStorage = () => {
    boardsStorage.set(this.state.boards);
  }

  addBoard = () => {
    const { boards, value } = this.state;

    if (value.trim()) {
      const board = {
        id: getBoardId(),
        title: value.trim(),
      };

      this.setState({
        boards: [...boards, board],
        value: '',
      }, this.updateLocalStorage);
    }
  }

  onInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.addBoard();
    }

    if (e.key === 'Escape') {
      this.setState({ value: '' });
    }
  };

  onChangeHandler = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    const { boards, value } = this.state;
    return (
      <>

        <Header />

        <StyledPage>

          <div className="boards-wrapper">

            <div className="boards-section-header">
              Персональные доски
            </div>

            <ul className="boards-section-list">

              {boards.map(({ id, title }) => (
                <DemoBoard
                  key={id}
                  boardId={id}
                  boardTitle={title}
                />
              ))}

              <li className="boards-section-add-board">

                <input
                  className="add-board-input"
                  placeholder="Создать доску"
                  autoFocus
                  value={value}
                  onKeyDown={this.onInputKeyDown}
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
