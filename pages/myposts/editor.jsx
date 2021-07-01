import { useRouter } from 'next/router';
import AppShell from '../../components/organisms/AppShell';
import AppTextEditor from '../../components/organisms/AppTextEditor';
import useAuthContext from '../../hooks/useAuthContext';
import AppLoading from '../../components/atoms/AppLoading';

const Editor = () => {
  const [{ user }] = useAuthContext();
  const router = useRouter();

  if (!user) {
    router.push('/');
  } else {
    return (
      <AppShell>
        <AppTextEditor />
      </AppShell>
    );
  }

  return <AppLoading />;
};

export default Editor;
