import { Layout } from '@/components/Layout';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

export default function HomePage() {
  return (
    <>
      <Layout>
        <Welcome />
        <ColorSchemeToggle />
      </Layout>
    </>
  );
}
