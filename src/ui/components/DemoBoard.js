import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

class DemoBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      link: `/b/${this.props.id}`,
    };
  }

  render() {
    const { title } = this.props;
    return (
      <StyledPage>

        <li className="boards-page-board-section-list-item">

          <Link
            className="board-title"
            to={this.state.link}
          >
            <div className="title">{title}</div>
          </Link>

        </li>

      </StyledPage>
    );
  }
}

const StyledPage = styled.div`
    height: 100px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 10px;
    margin: 8px;
    box-shadow: 0 1px 4px grey;
    background: rgba(18, 167, 216, 0.308);

    &:hover{
    background-color: rgba(18, 167, 216, 0.408);
}
    

.board-title{
    color: grey;
    text-decoration: none;
    font-size: 25px;
    font-weight: 600;
}

.title{
  max-width:100px;
}
`;

export default DemoBoard;
