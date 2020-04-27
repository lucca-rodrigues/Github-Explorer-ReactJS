import React, { useState, FormEvent }from 'react';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../Services/api';

import logoGithub from '../../assets/logo-github.svg';
import { Title, Form, Repositories } from './styles';


interface Repository{
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {

  const [newRepo, setNewRepo] = useState('');

  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(event: FormEvent <HTMLFormElement>): Promise<void>{
    event.preventDefault();
    
    const response = await api.get(`repos/${newRepo}`);

    const repository = response.data;

    setRepositories([...repositories, repository]);
    setNewRepo(''); // Vai Zerar o Input
  }

  return (
    <>
      <img src={logoGithub} alt="Github Explorer"/>
      <Title> Exprore repositórios  no Github </Title>
      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)} 
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        {repositories.map(repository => (
          <a target="_blank" rel="noopener noreferrer" key="repository.full_name" href={repository.owner.avatar_url}>
          <img src={repository.owner.avatar_url} alt={repository.full_name}/>
          <div>
            <strong>{repository.full_name}</strong>
            <p>{repository.description}</p>
          </div>
          <FiChevronRight size={20}/>
        </a>
        ))}
      </Repositories>
    </>
  );
}

export default Dashboard;