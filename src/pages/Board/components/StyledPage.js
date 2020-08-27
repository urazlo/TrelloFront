import styled from 'styled-components';

export default styled.div`
  display: flex;
  position: relative;
  font-size: 24px;
  padding: 10px;
  min-height: calc(100vh - 100px);
  background: #32afcde6;
  overflow-x: auto;
  overflow-y: hidden;
  
  .column-list-wrapper{
    display: flex;
  }

  .column-wrapper{
    width: 272px;
    margin: 0 4px;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    white-space: nowrap;
  }

  .column-add-menu-open-button{
    max-height: 32px;
    display: flex;
    flex-direction: column;
    padding: 5px;
    margin: 10px 5px;
    border-radius: 3px;
    background-color: #026aa750;
  }

  .column-add-menu-open-placeholder{
    font-size: 20px;
    color: #fff;
    margin: 0 auto;
    min-width: 230px;
  }
`;
