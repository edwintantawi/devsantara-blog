import AppShell from '../../components/organisms/AppShell';

const BlogPost = ({ blogpost }) => (
  <AppShell>
    <div>{blogpost.title}</div>
  </AppShell>
);

export const getStaticPaths = async () => {
  const response = await fetch('http://localhost:3000/api/blogposts');
  const responseJson = await response.json();

  const paths = responseJson.results.map(({ id }) => ({ params: { id } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const response = await fetch(`http://localhost:3000/api/blogposts/${id}`);
  const responseJson = await response.json();

  return {
    props: {
      blogpost: responseJson.data,
    },
    revalidate: 10,
  };
};

export default BlogPost;
