import React from "react";
import { FiArrowLeft, FiMail, FiUser, FiLock } from "react-icons/fi";
import { Form } from '@unform/web';

import logoImg from "../../assets/logo.svg";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, Background, Content } from "./styles";

const SignUp: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="Gobarber" />
      <Form onSubmit={handleSubmit}>
        <h1>Faça seu Cadastro</h1>
        <Input icon={FiUser} name="name" placeholder="Nome" />
        <Input icon={FiMail} name="email" placeholder="E-mail" />
        <Input
          icon={FiLock}
          name="password"
          type="password"
          placeholder="Senha"
        />
        <Button type="submit">Entrar</Button>
        <a href="forgot">Esqueci minha senha</a>
      </Form>
      <a href="Log">
        <FiArrowLeft />
        Voltar para Logon
      </a>
    </Content>
  </Container>
  )
};

export default SignUp;
