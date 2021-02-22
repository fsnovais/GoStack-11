import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import {Link} from 'react-router-dom';
import api from '../../services/api';

import { Title, Form, Repositories, Error } from './styles';
import GithubExplorer from '../../assets/logo.svg';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newSearch, setNewSearch] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepository] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );
    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    } else {
      return [];
    }
  });

  useEffect(
    () =>
      localStorage.setItem(
        '@GithubExplorer:repositories',
        JSON.stringify(repositories),
      ),
    [repositories],
  );

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    if (!newSearch) {
      setInputError('Insira um autor/repositório válido.  ');
      return;
    }
    try {
      const response = await api.get<Repository>(`repos/${newSearch}`);
      const repository = response.data;

      setRepository([...repositories, repository]);
      setNewSearch('');
    } catch (err) {
      setInputError('Erro ao buscar o repositório.');
    }
  }

  return (
    <>
      <img src={GithubExplorer} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          onChange={(e) => setNewSearch(e.target.value)}
          value={newSearch}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repositories.map((repository) => (
          <Link key={repository.full_name} to={`repositories/${repository.full_name}`}>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
