// lib/github.ts
import { GitHubUser } from '@/types/github';

export async function getGitHubUser(username: string): Promise<GitHubUser> {
  const res = await fetch(`https://api.github.com/users/${username}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Erro ao buscar dados do GitHub para ${username}`);
  }

  const data = await res.json();

  return {
    avatarUrl: data.avatar_url,
    name: data.name || data.login,
    bio: data.bio || 'Este usuário não possui uma bio pública.',
    location: data.location,
    repos: data.public_repos,
    followers: data.followers,
    htmlUrl: data.html_url,
  };
}
