import React from 'react';

import StyledPage from 'pages/Home/components/StyledPage';
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
