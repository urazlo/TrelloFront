import styled from 'styled-components';
import Menu from '@material-ui/core/Menu';

export default styled(Menu)`
  .column-add-input{
    background: #fff;
    font-size: 18px;
    outline: none;
    display: flex;
    margin: 4px;
  }

  input{
    padding: 7px;
  }

  .column-add{
    display: flex;
    margin: 4px;
  }

  .column-add-accept-button{
    background-color: #5aac44;
    border: none;
    color: #fff;
    height: 32px;
    font-size: 18px;
    cursor: pointer;

    &:hover{
    background-color: #6ad24f;
    }
  }

  .column-add-cancel-button{
    font-size: 30px;
    cursor: pointer;
    color: #6b778c;
    margin-left: 10px;

      &:hover{
        color: #000;
      }
  }
`;
