/* eslint-disable react/function-component-definition */
import {
  GithubOutlined,
  LinkedinOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import perfil from '../../assets/img/luiz.jpg';
import { Container } from './styles';

const Contact: React.FC = () => (
  <Container>
    <div className="img">
      <div>
        <img src={perfil} alt="Foto de perfil" />
      </div>
    </div>
    <h1 className="title">Desenvolvedor responsável</h1>
    <div className="txt">
      <p>Luiz Eduardo Silva</p>
      <p>
        <WhatsAppOutlined />
        <span style={{ marginLeft: '2%' }}>(38) 997-443780</span>
      </p>
      <p>
        <LinkedinOutlined />
        <Button
          target="_blank"
          href="https://www.linkedin.com/in/luiz-eduardo-silva-ti/"
          style={{ color: 'white', fontSize: '23px' }}
          type="text"
        >
          luiz-eduardo-silva-ti
        </Button>
      </p>
      <p>
        <GithubOutlined />
        <Button
          target="_blank"
          href="https://github.com/CkScarpo"
          style={{ color: 'white', fontSize: '23px' }}
          type="text"
        >
          CkScarpo
        </Button>
      </p>
    </div>
  </Container>
);
export default Contact;
