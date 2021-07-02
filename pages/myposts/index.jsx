import { useRouter } from 'next/router';
import styled from 'styled-components';
import AppShell from '../../components/organisms/AppShell';
import AppHomeContent from '../../components/molecules/AppHomeContent';
import minWidth from '../../styles/mediaQuery';
import useAuthContext from '../../hooks/useAuthContext';
import AppLoading from '../../components/atoms/AppLoading';

const MyPosts = () => {
  const [{ user }] = useAuthContext();
  const router = useRouter();

  if (!user) {
    router.push('/');
  } else {
    return (
      <AppShell>
        <MyPostsLayout>
          <h1>Your Posts</h1>
          <AppHomeContent endpoint={`blogposts?uid=${user.uid}`} />
        </MyPostsLayout>
      </AppShell>
    );
  }

  return <AppLoading />;
};

const MyPostsLayout = styled.div`
  & > h1 {
    font-size: 24px;
    padding: 16px 16px 0;

    ${minWidth('md')} {
      font-size: 34px;
      padding: 16px 0 0 0;
      margin-bottom: 8px;
    }
  }
`;

export default MyPosts;
