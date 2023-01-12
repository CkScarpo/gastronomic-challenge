/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components';

export const Container = styled.div`
  margin: 2% 10% 3% 10%;
  .img {
    height: 210px;
    width: 210px;
    font-family: 'Roboto', sans-serif;
    img {
      margin: auto;
      max-width: 100%;
      max-height: 100%;
    }
    #alignImg {
      max-width: 100%;
      max-height: 100%;
      display: flex;
      justify-content: center;
    }
    .logo {
      padding-left: 18%;
    }
  }
`;

export const Content = styled.div`
  margin: 8% 0% 0% 58%;
  font-family: 'Roboto', sans-serif;
  color: white;
  .title {
    font-size: 28px;
  }
  .txt {
    font-size: 23px;
    display: flex;
    .btn {
      margin-left: 30%;
    }
  }
`;
