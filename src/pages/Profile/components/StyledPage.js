import styled from 'styled-components';

export default styled.main`
  width: 100%;
  max-width: 530px;
  display: flex;
  flex-direction: column;
  margin: auto;

  .profile-header-icon{
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 100%;
    display: inline-flex;
    cursor: pointer;
    height: 40px;
    width: 40px;
  }

  .profile-content{
    display: flex;
    flex-direction: column;
  }

  .profile-content-form{
    display: flex;
    flex-direction: column;
  }

  .profile-content-avatar{
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-right: 4px;
    margin-top: 16px;
  }

  .profile-content-avatar-text{

  }

  .profile-content-avatar-img{
    height: 100px;
    width: 100px;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 100%;
    display: inline-flex;
    cursor: pointer;
  }
  `;
