import AppShell from '../components/organisms/AppShell';
import AppHomeContent from '../components/molecules/AppHomeContent';

const Home = () => (
  <AppShell>
    <AppHomeContent endpoint="blogposts" />
  </AppShell>
);

export default Home;
