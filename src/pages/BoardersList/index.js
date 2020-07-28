import React from 'react';

import StyledPage from 'pages/BoardersList/components/StyledPage';
import Header from 'ui/components/Header';
import { boardsStorage, getBoardId } from 'utils';
import Board from 'pages/Board';

// componentDidMount() {
//   window.addEventListener('keydown', this.escapeListener);
// }

// componentWillUnmount() {
//   window.removeEventListener('keydown', this.escapeListener);
// }

// escapeListener = (e) => {
//   if (e.key === 'Escape') {
//     this.props.changeEditableTaskId(null);
//   }
// }

// onDelete = () => {
//   this.props.deleteTask(this.props.id);
// }

// onToggle = () => {
//   this.props.toggleTask(this.props.id);
// }

// clickHandler = (e) => {
//   if (this.props.editableTaskId === this.props.id) {
//     e.stopPropagation();
//   } else {
//     this.props.changeEditableTaskId(null);
//     this.setState({ changedTitle: this.props.title });
//   }
// }

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

  onChangeHandler = (e) => {
    this.setState({ value: e.target.value });
  }

  handleEnter = (e) => {
    if (e.key === 'Enter') { this.addBoard(); }
  };

  // onInputKeyDown = (e) => {
  //   if (e.key === 'Enter') {
  //     this.props.editTask(this.props.id, this.state.changedTitle);
  //     this.props.changeEditableTaskId(null);
  //   }

  //   if (e.key === 'Escape') {
  //     this.setState({ changedTitle: this.props.title });
  //     this.props.changeEditableTaskId(null);
  //   }
  // }

  // clickBlocker = (e) => {
  //   e.stopPropagation();
  // }

  // clickHandler = () => {
  //   this.props.changeEditableTaskId(this.props.id);
  // }

  render() {
    const { boards } = this.state;
    return (
      <>
        <Header />
        <StyledPage>

          <div className="all-boards">

            <div className="boards-page-board-section-header">

              <span className="boards-page-board-section-header-name">
                Персональные доски
              </span>
            </div>

            <ul className="boards-page-board-section-list">

              {boards.map(({ id, title }) => (
                <Board
                  key={id}
                  id={id}
                  title={title}
                // editableTaskId={this.state.editableTaskId}
                // editTask={editTask}
                // deleteTask={deleteTask}
                // toggleTask={toggleTask}
                // changeEditableTaskId={this.changeEditableTaskId}
                />
              ))}

              <li className="boards-page-board-section-list-item">

                <input
                  placeholder="Создать доску"
                  className="add-board"
                  autoFocus
                  value={this.state.value}
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
