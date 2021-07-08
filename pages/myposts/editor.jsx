import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AppShell from '../../components/organisms/AppShell';
import AppTextEditor from '../../components/organisms/AppTextEditor';
import useAuthContext from '../../hooks/useAuthContext';
import AppLoading from '../../components/atoms/AppLoading';

const Editor = () => {
  const [{ user }] = useAuthContext();
  const [loading, setLoading] = useState(true);
  const [blogpost, setBlogpost] = useState({});
  const router = useRouter();
  const { id } = router.query;

  const getBlogpost = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/posts/${id}`
      );
      const responseJson = await response.json();
      if (response.status === 404) {
        await router.push('/dashboard');
      } else if (responseJson.result.authorUid === user.uid) {
        setLoading(false);
        setBlogpost(responseJson.result);
      } else {
        await router.push('/dashboard');
      }
    } catch (e) {
      await router.push('/dashboard');
    }
  };

  useEffect(() => {
    if (id) {
      getBlogpost();
    } else {
      setLoading(false);
    }
  }, [id]);

  if (!user) {
    router.push('/');
  } else if (!loading) {
    return (
      <AppShell>
        <AppTextEditor editableContent={blogpost} />
      </AppShell>
    );
  }

  return <AppLoading />;
};

export default Editor;
