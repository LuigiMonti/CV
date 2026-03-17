// Components/Repos/Repos.tsx

import { useState, useEffect } from 'react';
import './Repos.css';
import githubService from '../../Services/Github_service';

function Repos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    githubService.getRepos()
      .then(setRepos)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando proyectos...</p>;

  return (
    <div className="listas">
      <h3>Proyectos</h3>
      <ul>
        {repos.map((repo: any) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank">{repo.name}</a>
            {repo.description && <p>{repo.description}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Repos;