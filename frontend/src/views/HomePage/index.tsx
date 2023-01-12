/* eslint-disable react/function-component-definition */
import { Button, Carousel } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import slide1 from '../../assets/img/slide1.png';
import slide2 from '../../assets/img/slide2.png';
import slide3 from '../../assets/img/slide3.png';
import logo from '../../assets/img/logo.png';
import logoSlide2 from '../../assets/img/logoSlide2.png';
import logoSlide3 from '../../assets/img/logoSlide3.png';
import { Container, Content } from './styles';

const contentStyle: React.CSSProperties = {
  height: '210px',
  color: '#fff',
  textAlign: 'center',
  background: '#001529',
};

const HomePage: React.FC = () => (
  <>
    <Container>
      <Carousel autoplay style={contentStyle}>
        <div className="img">
          <div id="alignImg">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            <div>
              <img src={slide1} alt="Quem tem boca vai ao Fome List" />
            </div>
          </div>
        </div>
        <div className="img">
          <div id="alignImg">
            <div className="logo">
              <img src={logoSlide2} alt="Logo restaurantes" />
            </div>
            <div>
              <img src={slide2} alt="Restaurantes prediletos" />
            </div>
          </div>
        </div>
        <div className="img">
          <div id="alignImg">
            <div className="logo">
              <img src={logoSlide3} alt="Logo mate sua fome" />
            </div>
            <div>
              <img src={slide3} alt="Mate a sua fome" />
            </div>
          </div>
        </div>
      </Carousel>
    </Container>
    <Content>
      <h1 className="title">Fome List o lugar certo para sua fome</h1>
      <p className="txt">Faça login e acesse seus restaurantes prediletos</p>
      <div className="txt">
        <div>
          <p>Não tem conta?</p>
        </div>
        <div>
          <Link to="/fomeList//cadastre-se">
            <Button className="btn" type="primary">
              Cadastre-se
            </Button>
          </Link>
        </div>
      </div>
    </Content>
  </>
);

export default HomePage;
