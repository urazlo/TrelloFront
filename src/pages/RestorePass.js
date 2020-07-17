import React from 'react';

class RestorePass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test: 'test',
    };
  }

  render() {
    return (
      <>
        {this.state.test}
      </>
    );
  }
}

export default RestorePass;
