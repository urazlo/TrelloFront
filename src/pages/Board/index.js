import React from 'react';

import StyledPage from 'pages/Board/components/StyledPage';

class Board extends React.Component {
  state = {
    test: 'board',
  }

  render() {
    return (
      <StyledPage
        className="card-wrapper">
        {this.state.test}
        <div className="card-content">
          <div className="card-header">
            <textarea className="card-header-name"
              spellCheck="false"
              dir="auto"
            // style="overflow: hidden; overflow-wrap: break-word; height: 28px;"
            >
              Нужно сделать
    </textarea>
            <div className="card-header-extras">
            </div>
          </div>
          <div className="card-footer">
            <a className="card-footer-actions" href="#/">
              <span className="icon-card-add">
              </span>
              <span className="add-card">Добавить карточку</span>
            </a>
            <div className="card-templates-button">
            </div>
          </div>
        </div>
      </StyledPage>
    );
  }
}

export default Board;
