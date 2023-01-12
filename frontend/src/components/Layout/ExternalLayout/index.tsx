/* eslint-disable react/function-component-definition */
import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from './styles';

const ExternalLayout: React.FC = () => (
  <Container>
    <Layout>
      <div className="imgLogin">
        <Outlet />
      </div>
    </Layout>
  </Container>
);

export default ExternalLayout;
