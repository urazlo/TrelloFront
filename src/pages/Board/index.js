import React from 'react';

import StyledPage from 'pages/Board/components/StyledPage';

class Board extends React.Component {
  state = {
    test: 'board',
  }

  render() {
    const { title } = this.props;
    return (
      <StyledPage>
        <li className="boards-page-board-section-list-item">

          <a
            className="board-title"
            href="#/"
          >
            <div className="title">{this.state.test} {title}</div>
          </a>

        </li>
      </StyledPage>
    );
  }
}

export default Board;
