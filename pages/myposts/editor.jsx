import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AppShell from '../../components/organisms/AppShell';
import AppTextEditor from '../../components/organisms/AppTextEditor';
import useAuthContext from '../../hooks/useAuthContext';
import AppLoading from '../../components/atoms/AppLoading';

const Editor = () => {
  const [{ user }] = useAuthContext();
  const [blogpost, setBlogpost] = useState({});
  const router = useRouter();
  const { id } = router.query;

  const getBlogpost = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/blogposts/${id}`
      );
      const responseJson = await response.json();
      if (response.status === 404) {
        router.push('/dashboard');
      }
      setBlogpost(responseJson.result);
    } catch (e) {
      router.push('/dashboard');
    }
  };

  useEffect(() => {
    if (id) {
      getBlogpost();
    }
  }, [id]);

  if (!user) {
    router.push('/');
  } else {
    return (
      <AppShell>
        <AppTextEditor editableContent={blogpost} />
      </AppShell>
    );
  }

  return <AppLoading />;
};

export default Editor;
