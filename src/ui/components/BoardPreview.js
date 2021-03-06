import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

class DemoBoard extends React.Component {
  render() {
    const { boardTitle, boardId } = this.props;
    return (
      <StyledPage>
        <li className="boards-section-list-item">
          <Link className="list-item-title-wrapper" to={`/board/${boardId}`}>
            <div className="list-item-title">{boardTitle}</div>
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

  .boards-section-list-item{}

  .list-item-title-wrapper{
    color: grey;
    text-decoration: none;
    font-size: 25px;
    font-weight: 600;
  }

  .list-item-title{
  max-width: 100px;
  }
`;

export default DemoBoard;
