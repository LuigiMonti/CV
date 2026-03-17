// services/githubService.ts

const GITHUB_USER = 'LuigiMonti';

const githubService = {
  getRepos: async () => {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos`
    );
    if (!response.ok) throw new Error('Error al obtener repositorios');
    return response.json();
  },
};

export default githubService;