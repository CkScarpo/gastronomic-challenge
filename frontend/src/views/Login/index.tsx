/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable react/function-component-definition */
// eslint-disable-next-line object-curly-newline
import { Button, Checkbox, Form, Input, message } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UseAuth } from '../../context/AuthProvider/useAuth';
import { formProps } from './props';

import { Container } from './styles';

const Login: React.FC = () => {
  const [form] = useForm();
  const auth = UseAuth();
  const navigate = useNavigate();

  async function onFinish(values: formProps) {
    try {
      await auth.authenticate(values.email, values.password);
      navigate('/fomeList/restaurantes');
    } catch (error) {
      message.error('Email ou senha inválidos!');
    }
  }

  return (
    <Container>
      <Form initialValues={{ remember: true }} onFinish={onFinish} form={form}>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Por favor digite seu email!' }]}
        >
          <Input placeholder="Digite seu email" />
        </Form.Item>

        <Form.Item
          label="senha"
          name="password"
          rules={[{ required: true, message: 'Por favor digite sua senha!' }]}
        >
          <Input.Password placeholder="Digite sua senha" />
        </Form.Item>

        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Lembrar acesso</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button type="primary" size="large" htmlType="submit">
            Acessar
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

export default Login;
