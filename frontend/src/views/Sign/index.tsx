/* eslint-disable prettier/prettier */
/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable react/function-component-definition */
import { Button, Form, Input } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import React from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Container } from './styles';

const Sign: React.FC = () => {
  const [form] = useForm();
  const onFinish = (values: string) => {
    api.post('/user', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Container>
      <Form
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
      >
        <Form.Item label="Nome" name="name">
          <Input placeholder="Digite seu nome" />
        </Form.Item>

        <Form.Item label="Email" name="email">
          <Input type="text" placeholder="Digite seu email" />
        </Form.Item>

        <Form.Item label="Senha" name="password">
          <Input type="password" placeholder="Digite sua senha" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" size="large" htmlType="submit">
            Cadastre-se
          </Button>
          <Link to="/">
            <Button
              style={{ marginLeft: '10px' }}
              type="dashed"
              size="large"
              htmlType="reset"
            >
              Voltar
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </Container>
  );
};
export default Sign;
