import { generateHTML } from '@tiptap/html';
import StarterKit from '@tiptap/starter-kit';
import { useEffect } from 'react';
import AppShell from '../../components/organisms/AppShell';
import AppActionBlogpost from '../../components/atoms/AppActionBlogpost';
import AppBlogpostContent from '../../components/molecules/AppBlogpostContent';

const BlogPost = ({ blogpost }) => {
  const handleVisitors = async () => {
    try {
      if (window.localStorage !== undefined) {
        const item = localStorage.getItem(blogpost.id);
        if (!item) {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_DOMAIN}/api/posts/${blogpost.id}/visitor`,
            { method: 'PUT' }
          );
          if (response.status === 200) {
            localStorage.setItem(blogpost.id, '1');
          }
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    handleVisitors();
  }, []);

  return (
    <AppShell
      title={blogpost.title}
      keywords={`${blogpost.keywords.join(', ')}, ${blogpost.tags
        .map(({ title }) => title)
        .join(', ')}`}
      description={blogpost.htmlContent.split('').splice(0, 100).join('')}
      url={`blogpost/${blogpost.id}`}
      noNavigation
      hightFooter
    >
      <AppActionBlogpost />
      <AppBlogpostContent blogpost={blogpost} />
    </AppShell>
  );
};

export const getStaticPaths = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/posts`);
  const responseJson = await response.json();

  const paths = responseJson.results.map(({ id }) => ({ params: { id } }));
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/posts/${id}`
  );
  const responseJson = await response.json();

  return {
    props: {
      blogpost: {
        ...responseJson.result,
        id,
        htmlContent: generateHTML(responseJson.result.content, [StarterKit]),
      },
    },
    revalidate: 10,
  };
};

export default BlogPost;
