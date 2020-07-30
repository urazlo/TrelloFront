import styled from 'styled-components';

export default styled.div`
  display: flex;
  position: relative;
  font-size: 24px;
  background-color: #fff;
  padding: 10px;
  min-height: calc(100vh - 100px);
  background: green;
  
  .column-item-wrapper{
    width: 272px;
    margin: 10px 4px;
    height: 100%;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    white-space: nowrap;
}

.card-details{
    background:#fff;
  }

.list-cards{
    flex: 1 1 auto;
    margin-bottom: 0;
    overflow: hidden;
    margin: 0 4px;
    padding: 0 4px;
    min-height: 0;
    }

.list-card{
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 0 rgba(9,30,66,.25);
    cursor: pointer;
    display: block;
    margin-bottom: 8px;
    max-width: 300px;
    min-height: 20px;
    position: relative;
    text-decoration: none;
}

.placeholder{
  color: #fff;
    padding: 6px 8px;
    transition: color 85ms ease-in;
}
`;

/* min-height: calc(100vh - 40px);
background: green;

.column-item-header{
cursor: pointer;
}

.column-title{

}

.column-title-edit{

}

.card-details{

  &:hover .delete-task-btn{
  opacity: 1;
  color: #dd2b31;
}
}

.card-details-edit{

}

.column-item-footer{

}

.column-item-add-card{

}
`;
*/
