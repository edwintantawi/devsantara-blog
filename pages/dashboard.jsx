import AppShell from '../components/organisms/AppShell';
import AppNavigation from '../components/molecules/AppNavigation';
import AppTextEditor from '../components/organisms/AppTextEditor';

const Dashboard = () => (
  <AppShell>
    <AppNavigation />
    <AppTextEditor />
  </AppShell>
);

export default Dashboard;
