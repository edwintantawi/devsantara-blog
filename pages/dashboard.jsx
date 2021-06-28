import { useRouter } from 'next/router';
import AppShell from '../components/organisms/AppShell';
import AppTextEditor from '../components/organisms/AppTextEditor';
import useAuthContext from '../hooks/useAuthContext';
import useAppContext from '../hooks/useAppContext';

const Dashboard = () => {
  const [{ user }] = useAuthContext();
  const [{ isLoading }] = useAppContext();
  const router = useRouter();

  if (!user && !isLoading) {
    router.push('/');
  }

  return (
    <AppShell>
      <AppTextEditor />
    </AppShell>
  );
};

export default Dashboard;
