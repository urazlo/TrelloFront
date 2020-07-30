import React from 'react';

import StyledPage from 'pages/UserBoard/components/StyledPage';
import Header from 'ui/components/Header';
import Column from 'ui/components/Column';

class UserBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // changedTitle: '123',
      // cardTitle: '321',
    };
  }

  // onChangeColumnTitleHandler = (e) => {
  //   this.setState({ changedTitle: e.target.value });
  // }

  // onChangeCardTitleHandler = (e) => {
  //   this.setState({ cardTitle: e.target.value });
  // }

  render() {
    const { columns } = this.state;

    return (
      <>
        <Header />
        <StyledPage>

          <div className="boards-page-board-section-list">

            {columns.map(({ id, title }) => (
              <Column
                key={id}
                id={id}
                title={title}
              />
            ))}

            <div className="add-list column-item-wrapper">

              <form>

                <button className="open-add-list js-open-add-list">

                  <span className="placeholder">
                    + Добавьте еще одну колонку
                </span>

                </button>

                <input
                  className="list-name-input"
                  placeholder="Ввести заголовок списка"
                  autoComplete="off"
                  dir="auto"
                />

                <div className="list-add-controls u-clearfix">

                  <input
                    className="primary mod-list-add-button js-save-edit"
                    type="submit"
                    value="Добавить список"
                  />

                  <button
                    className="icon-lg icon-close js-cancel-edit"
                  >
                    X
                </button>
                </div>
              </form>
            </div>
          </div>
        </StyledPage>
      </>
    );
  }
}

export default UserBoard;
