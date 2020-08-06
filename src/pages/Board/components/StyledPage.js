import styled from 'styled-components';

export default styled.div`
  display: flex;
  position: relative;
  font-size: 24px;
  padding: 10px;
  min-height: calc(100vh - 100px);
  background: #32afcde6;

  .board{
    user-select: none;
    white-space: nowrap;
    margin-bottom: 8px;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 8px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  
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

  .column-add-menu{
    width: 220px;
    max-height: 32px;
    background-color: hsla(0,0%,100%,.24);
    flex-direction: column;
    position: relative;
    white-space: normal;
    margin: 10px 5px;
    padding: 5px;
    position: relative;
    border-radius: 3px;

    &:hover{
    background-color: hsla(0,0%,100%,.34);
    }
  }

  .column-add-menu-open-button{}

  .column-add-menu-open-placeholder{
    font-size: 20px;
    color: #fff;
    margin: 0 auto;
  }

  .column-add-menu-wrapper{
    width: 210px;
    background-color: #ebecf0;
    min-height: 32px;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    padding: 5px;
    border-radius: 3px;
  }

  .column-add-input{
    background: #fff;
    display: block;
    margin: 0;
    padding: 5px;
    height: 30px;
    font-size: 18px;
    outline: none;
    border: 1px solid transparent;
    border-radius: 3px; 

    &:focus{
      outline: none;
      border: 1px solid rgba(251, 106, 3, 0.64);
      border-radius: 3px;
    }
  }

.column-add{}

  .column-add-accept-button{
    margin-top: 5px;
    background-color: #5aac44;
    box-shadow: none;
    border: none;
    color: #fff;
    float: left;
    min-height: 32px;
    height: 32px;
    padding: 4px 0;
    font-size: 18px;
    padding: 5px;
    cursor: pointer;

    &:hover{
    background-color: #6ad24f;
    }
  }

  .column-add-cancel-button{
    margin-top: 5px;
    float: right;
    font-size: 20px;
    padding: 5px;
    cursor: pointer;

    &:hover{
      background-color: rgba(9,30,66,.13);
    }
  }
`;
