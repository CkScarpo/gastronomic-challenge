/* eslint-disable react/function-component-definition */
import { Result } from 'antd';
import React from 'react';

import { Container } from './styles';

const Notauthorized: React.FC = () => (
  <Container>
    <Result
      status="403"
      title="Desculpe, você não está autorizado a acessar esta página, faça o login para ter acesso."
    />
  </Container>
);

export default Notauthorized;
