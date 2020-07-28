import styled from 'styled-components';

export default styled.div`
    min-height: calc(100vh - 40px);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    background: greenyellow;
    
  .all-boards{
    display:flex;
  }

  .boards-page-board-section-header-name{
    display: inline-block;
    line-height: 24px;
    margin: 4px 0;
    font-size: 16px;
    font-weight: 700;
    overflow: hidden;
  }

  .boards-page-board-section-list{
    height: 50%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    flex: 1 1 0%;
    margin: 0px auto;
  }

  .boards-page-board-section-list-item{
    height: 200px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: grey 0px 2px 4px;
    background: #a7a76ffa;
    padding: 10px;
    margin: 8px;
    border-radius: 3px;
}

  ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;
