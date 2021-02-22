import React from 'react';
import {FiChevronRight} from 'react-icons/fi'

import {Title, Form, Repositories} from './styles'
import GithubExplorer from '../../assets/logo.svg'

const Dashboard : React.FC = () => (
  <>
  <img src={GithubExplorer} alt="Github Explorer"/>
  <Title>Explore repositórios no Github</Title>
  <Form>
    <input placeholder="Digite o nome do repositório"/>
    <button type="submit">Pesquisar</button>
  </Form>
  <Repositories>
    <a href="teste">
    <img
      src="https://avatars.githubusercontent.com/u/37004087?s=460&u=f0e62b577fe263f65580f1b84377790dd7f366f4&v=4"
      alt="Felipe Novais"
    />
    <div>
      <strong>phellippe/BlindBird</strong>
      <p>Projeto criado utilizando conceitos básicos de HTML, CSS e JS.</p>
    </div>
    <FiChevronRight size={20}/>
  </a>
  <a href="teste">
    <img
      src="https://avatars.githubusercontent.com/u/37004087?s=460&u=f0e62b577fe263f65580f1b84377790dd7f366f4&v=4"
      alt="Felipe Novais"
    />
    <div>
      <strong>phellippe/BlindBird</strong>
      <p>Projeto criado utilizando conceitos básicos de HTML, CSS e JS.</p>
    </div>
    <FiChevronRight size={20}/>
  </a>
  <a href="teste">
    <img
      src="https://avatars.githubusercontent.com/u/37004087?s=460&u=f0e62b577fe263f65580f1b84377790dd7f366f4&v=4"
      alt="Felipe Novais"
    />
    <div>
      <strong>phellippe/BlindBird</strong>
      <p>Projeto criado utilizando conceitos básicos de HTML, CSS e JS.</p>
    </div>
    <FiChevronRight size={20}/>
  </a>
  </Repositories>
  </>
)

export default Dashboard;
