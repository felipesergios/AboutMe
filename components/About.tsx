// app/components/AboutMe.tsx
import { motion } from "framer-motion";
import Image from 'next/image';
import { getGitHubUser } from '@/lib/github';
import { AboutMeProps } from '@/types/about';

export default async function About({ username }: AboutMeProps) {
  const user = await getGitHubUser(username);

  return (
    <section style={{ textAlign: 'center', padding: '2rem' }}>
      <Image
        src={user.avatarUrl}
        alt={`Foto de ${user.name}`}
        width={120}
        height={120}
        style={{ borderRadius: '50%' }}
      />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
    </section>
  );
}
