import styled from 'styled-components';

export default styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;

  .profile-header{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    background-color: #f4f5f7;
    margin-bottom: 20px;
  }

  .profile-header-icon{
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 100%;
    display: inline-flex;
    cursor: pointer;
    height: 48px;
    width: 48px;
    margin-right: 10px;
  }

  .text-wrapper{
    display: flex;
    align-items: baseline;
  }

  .profile-header-login{
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    color: #0c3953;
    margin-right: 10px;
  }

  .profile-header-user-id{
    font-size: 12px;
    line-height: 20px;
    color: #5e6c84;
  }
  
  .profile-content-wrapper{
    margin: 0 auto;
  }

  .profile-content-title{
    color: #172b4d;
    font-size: 26px;
    font-weight: 500;
    line-height: 26px;
    margin-left: 10px;
  }

  .profile-content{
    display: flex;
    margin: 0 auto;
  }

  .profile-content-form{
    display: flex;
    flex-direction: column;
    max-width: 300px;
  }

  .profile-content-avatar{
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 16px;
  }

  .profile-content-avatar-text{
    color: #172b4d;
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    margin-top: 16px;
    margin-top: 0;
    margin-bottom: 12px;
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
