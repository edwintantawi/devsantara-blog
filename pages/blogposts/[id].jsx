import { generateHTML } from '@tiptap/html';
import StarterKit from '@tiptap/starter-kit';
import AppShell from '../../components/organisms/AppShell';
import AppActionBlogpost from '../../components/atoms/AppActionBlogpost';
import AppBlogpostContent from '../../components/molecules/AppBlogpostContent';

const BlogPost = ({ blogpost }) => (
  // TODO 3 : Handle num of visitor
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
        ...responseJson.result,
        htmlContent: generateHTML(responseJson.result.postJson, [StarterKit]),
      },
    },
    revalidate: 10,
  };
};

export default BlogPost;
