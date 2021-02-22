import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { Header, RepositoryInfo, Issues } from './styles';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import GithubExplorer from '../../assets/logo.svg';
import api from '../../services/api';

interface ParamsInterface {
  repository: string;
}

interface RepositoryParams {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  user: {
    login: string;
    html_url: string;
  }
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<ParamsInterface>();

  const [repository, setRepository] = useState<RepositoryParams | null>(null);
  const [issues, setIssue] = useState<Issue[]>([]);

  useEffect(() => {
    api.get(`repos/${params.repository}`).then((response) => {
      setRepository(response.data);
    }),
      api.get(`repos/${params.repository}/issues`).then((response) => {
        setIssue(response.data);
      });
  }, [params.repository]);


  return (
    <>
      <Header>
        <img src={GithubExplorer} alt="GithubExplorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      {repository && (
        <RepositoryInfo>
        <header>
          <img
            src={repository.owner.avatar_url}
            alt={repository.owner.login}
          />
          <div>
            <strong>{repository.full_name}</strong>
            <p>{repository.description}</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>{repository.stargazers_count}</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>{repository.forks_count}</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>{repository.open_issues_count}</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
      )}
      <Issues>
        {issues.map(issue => (
                  <a target="_blank" href={issue.user.html_url}>
                  <div>
                    <strong>{issue.title}</strong>
                    <p>{issue.user.login}</p>
                  </div>
                  <FiChevronRight size={20} />
                </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
