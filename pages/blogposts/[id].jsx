import { generateHTML } from '@tiptap/html';
import StarterKit from '@tiptap/starter-kit';
import AppShell from '../../components/organisms/AppShell';
import AppActionBlogPost from '../../components/atoms/AppActionBlogPost';
import AppBlogPostContent from '../../components/molecules/AppBlogPostContent';

const BlogPost = ({ blogpost }) => (
  <AppShell
    title={blogpost.title}
    keywords={`${blogpost.keywords.join(', ')}, ${blogpost.tags
      .map(({ title }) => title)
      .join(', ')}`}
    description={blogpost.htmlContent.split('').splice(0, 100).join('')}
    url={`blogpost/${blogpost.id}`}
    noNavigation
  >
    <AppActionBlogPost />
    <AppBlogPostContent blogpost={blogpost} />
  </AppShell>
);

export const getStaticPaths = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/blogposts`
  );
  const responseJson = await response.json();

  const paths = responseJson.results.map(({ id }) => ({ params: { id } }));
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/blogposts/${id}`
  );
  const responseJson = await response.json();

  return {
    props: {
      blogpost: {
        ...responseJson.data,
        htmlContent: generateHTML(responseJson.data.postJson, [StarterKit]),
      },
    },
    revalidate: 10,
  };
};

export default BlogPost;
