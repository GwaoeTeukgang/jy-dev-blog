import Image from 'next/image';
import { homeContainer } from '@/app/home.style';

export default function Home() {
  return <main className={homeContainer()}>Home</main>;
}
