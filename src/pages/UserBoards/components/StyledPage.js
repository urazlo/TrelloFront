import styled from 'styled-components';

export default styled.div`
  min-height: calc(100vh - 40px);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
    
  .boards-wrapper{
    display: flex;
    flex-direction: column;
  }

  .boards-section-header{
    display: inline-block;
    line-height: 24px;
    margin: 20px auto;
    font-size: 25px;
    font-weight: 700;
    overflow: hidden;
  }

  .boards-section-list{
    height: 50%;
    width: 800px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    flex: 1 1 0%;
    margin: 0 auto;
  }

  .boards-section-add-board{
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
  }

  .add-board-input{
    width: 170px;
    height: 120px;
    text-align: center;
  }

  ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }

  input{
    background: none;
    border: none;
    font-size: 20px;
    outline: none;
  }
`;
