import React from 'react';

import StyledPage from 'pages/BoardersList/components/StyledPage';
import Header from 'ui/components/Header';

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
      value: 'title',
      tasks: [],
    };
  }

  addTask = () => {
    const { tasks, value } = this.state;

    if (value.trim()) {
      const task = {
        // id: getTaskId(),
        title: value.trim(),
        isDone: false,
      };

      this.setState({
        tasks: [...tasks, task],
        value: '',
      }, this.updateLocalStorage);
    }
  }

  onEdit = (e) => {
    this.setState({ value: e.target.value });
  }

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

  clickHandler = () => {
    this.props.changeEditableTaskId(this.props.id);
  }

  render() {
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
              <li className="boards-page-board-section-list-item">

                <a className="board-title" href="#/">
                  <span>Юрий Гончарук</span>
                </a>

              </li>

              <li className="boards-page-board-section-list-item">
                <input
                  placeholder="Создать доску"
                  className="edit"
                  autoFocus
                  value={this.state.value}
                  // onKeyDown={this.onInputKeyDown}
                  onChange={this.onEdit}
                  onClick={this.clickHandler}
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
