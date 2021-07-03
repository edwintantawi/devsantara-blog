import { useRouter } from 'next/router';
import AppShell from '../components/organisms/AppShell';
import useAuthContext from '../hooks/useAuthContext';
import AppDashboardContent from '../components/molecules/AppDashboardContent';
import AppLoading from '../components/atoms/AppLoading';

const Dashboard = () => {
  const [{ user }] = useAuthContext();
  const router = useRouter();

  if (!user) {
    router.push('/');
  } else {
    return (
      <AppShell>
        <AppDashboardContent />
      </AppShell>
    );
  }

  return <AppLoading />;
};

export default Dashboard;
