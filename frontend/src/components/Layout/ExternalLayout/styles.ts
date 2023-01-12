/* eslint-disable arrow-parens */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import bgEx from '../../../assets/img/bgEx.jpg';

export const Container = styled.div`
  .ant-layout {
    background: url(${bgEx}) no-repeat center;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
  }
  .imgLogin {
    width: 65%;
    padding: 1rem;
    font-family: 'Roboto', sans-serif;
    margin: auto;

    img {
      width: 90%;
      max-width: 1175px;
    }
  }
`;
