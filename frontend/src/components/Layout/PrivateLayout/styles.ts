/* eslint-disable arrow-parens */
/* eslint-disable import/prefer-default-export */
import { Switch } from 'antd';
import styled from 'styled-components';
import bg from '../../../assets/img/bg.jpg';

export const Container = styled.div`
  .ant-layout {
    background: url(${bg}) no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
  }
`;
export const LogoContainer = styled.div`
  width: 4%;
  margin: 0 5% 0 2%;
`;

export const SwitchTheme = styled(Switch)`
  margin-left: 1%;
`;
