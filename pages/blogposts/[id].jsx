import { generateHTML } from '@tiptap/html';
import StarterKit from '@tiptap/starter-kit';
import AppShell from '../../components/organisms/AppShell';
import AppActionBlogPost from '../../components/atoms/AppActionBlogPost';
import EditorStyle from '../../styles/editorStyle';

const BlogPost = ({ blogpost }) => (
  <AppShell>
    <AppActionBlogPost />
    <EditorStyle>
      <main dangerouslySetInnerHTML={{ __html: blogpost.htmlContent }} />
    </EditorStyle>
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
      blogpost: {
        ...responseJson.data,
        htmlContent: generateHTML(responseJson.data.postJson, [StarterKit]),
      },
    },
    revalidate: 10,
  };
};

export default BlogPost;
