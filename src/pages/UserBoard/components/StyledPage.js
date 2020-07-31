import styled from 'styled-components';

export default styled.div`
  display: flex;
  position: relative;
  font-size: 24px;
  background-color: #fff;
  padding: 10px;
  min-height: calc(100vh - 100px);
  background: #41b14199;

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
    display:flex;
 }

.column-wrapper{
  width: 272px;
    margin: 0 4px;
    height: 100%;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    white-space: nowrap;
 }

 .column-add-menu{

 }

 .column-add-menu-open-button{

 }

 .column-add-menu-open-placeholder{

 }

.column-add-menu-open-placeholder{
  color: #fff;
    padding: 6px 8px;
    transition: color 85ms ease-in;
}
`;
