import AppShell from '../components/organisms/AppShell';
import AppHomeContent from '../components/molecules/AppHomeContent';

const Home = () => (
  <AppShell>
    <AppHomeContent endpoint="posts" pagination limit={10} />
  </AppShell>
);

export default Home;
