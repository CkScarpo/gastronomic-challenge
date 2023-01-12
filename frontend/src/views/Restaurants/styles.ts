/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  margin: 1% 15% 0% 15%;
  font-family: 'Roboto', sans-serif;
  color: white;
  .star .anticon svg {
    color: #fadb14;
  }
`;

export const Favorites = styled.ul`
  list-style: none;
  padding: 0;
  li {
    padding: 1rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
  }
  span {
    margin-right: 0.5rem;
  }
  .logo {
    height: 70px;
    width: 70px;
    font-family: 'Roboto', sans-serif;
    img {
      margin: auto;
      max-width: 100%;
      max-height: 100%;
    }
  }
  .comendo {
    height: 80px;
    width: 120px;
    font-family: 'Roboto', sans-serif;
    img {
      margin: auto;
      max-width: 100%;
      max-height: 100%;
    }
  }
  .bebidas {
    height: 80px;
    width: 120px;
    font-family: 'Roboto', sans-serif;
    img {
      margin: auto;
      max-width: 100%;
      max-height: 100%;
    }
  }
  .cards {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .ant-pagination-item-active {
    background: none;
    border: none;
  }
  .ant-pagination-item a {
    background-color: #001529;
    color: white;
  }
  .anticon {
    color: white;
  }
  .ant-empty-description {
    color: white;
  }
  .ant-collapse-content {
    background: #001529;
    color: white;
  }
  .ant-collapse-header-text {
    color: white;
  }
`;
