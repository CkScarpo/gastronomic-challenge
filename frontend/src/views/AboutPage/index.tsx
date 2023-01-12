/* eslint-disable react/function-component-definition */
import React from 'react';

import { Container } from './styles';

const AboutPage: React.FC = () => (
  <Container>
    <h1 className="title">Fome List desafio gastronômico</h1>
    <div className="txt">
      <p>
        Desafio utilizado para demonstrar algumas das minhas habilidades como
        desenvolvedor de software
      </p>
    </div>
    <p className="txt">
      Não importa como você leve sua vida, sua inteligência o defenderá melhor
      do que uma espada, trate de mantê-la afiada
    </p>
  </Container>
);

export default AboutPage;
