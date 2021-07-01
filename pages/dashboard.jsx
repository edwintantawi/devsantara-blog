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
        {/* TODO 1.2 : List of own popular blogposts (limit top 3 blogposts) */}
        {/* TODO 1.3 : List of latest blogposts (limit top 3 blogposts) */}
        {/* TODO 1.4 : Action to show all own posts */}
        {/* TODO 1.4.1 : Action to Update and Delete each post */}
        {/* TODO 1.5 : Action to add post (redirect to post editor) */}
      </AppShell>
    );
  }

  return <AppLoading />;
};

export default Dashboard;
