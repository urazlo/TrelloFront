import styled from 'styled-components';

export default styled.div`
     background-color: #026aa7;
    box-sizing: border-box;
    display: flex;
    overflow: hidden;
    padding: 4px;
    max-height: 40px;
    width:100%;

   

.header-left-side{
    display: flex;
    justify-content: flex-start;
    flex-grow: 1;
}

.header-home-button{
  height: 32px;
    line-height: 32px;
    width: 32px;
}

.header-border-list-button{
  height: 32px;
    line-height: 32px;
    width: 32px;
}

.header-search{

}

.search-text-area{

}

.header-search-button{
  height: 32px;
    line-height: 32px;
    width: 32px;
}

.header-logo{
  background-image: url(https://seeklogo.com/images/T/trello-logo-45ABCC6452-seeklogo.com.png);
    background-position: 100% 0;
    background-repeat: no-repeat;
    background-size: 80px 30px;
    cursor: pointer;
    height: 30px;
    width: 80px;
    flex-grow: 1;
}

.header-right-side{
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
}

.header-create-board-button{
  height: 32px;
    line-height: 32px;
    width: 32px;
}

.user-profile-button{

}

.header--button{
    font-family: trellicons;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    text-align: center;
    text-decoration: none;
    color: #42526e;
}
`;
