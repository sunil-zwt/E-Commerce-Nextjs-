import styles from './page.module.css';
import Layout from '@/app/_components/layout/Layout';
import dynamic from 'next/dynamic';
export default function Home() {
  const HomePage = dynamic(() => import('@/app/_components/home-page/HomePage'));
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}
