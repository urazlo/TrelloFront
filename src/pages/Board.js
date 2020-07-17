import React from 'react';

class Board extends React.Component {
  state = {
    test: 'board',
  }

  render() {
    return (
      <>
        {this.state.test}
      </>
    );
  }
}

export default Board;
