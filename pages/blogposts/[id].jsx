import { generateHTML } from '@tiptap/html';
import styled from 'styled-components';
import StarterKit from '@tiptap/starter-kit';
import AppShell from '../../components/organisms/AppShell';
import AppActionBlogPost from '../../components/atoms/AppActionBlogPost';
import minWidth from '../../styles/mediaQuery';
import Colors from '../../styles/colors';

const BlogPost = ({ blogpost }) => (
  <AppShell>
    <AppActionBlogPost />
    <ContentLayout dangerouslySetInnerHTML={{ __html: blogpost.htmlContent }} />
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

const ContentLayout = styled.main`

  @media ${minWidth('md')} {
      /* padding: 3rem; */
    }

    > * + * {
      margin-top: 1rem;
    }

    * {
      font-size: 1.1rem;
      line-height: 1.7;
      letter-spacing: 1px;
    }

    ul,
    ol {
      padding: 0 1rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.2;
      margin-top: 2.5rem;
    }

    h1 {
      font-size: 2.625rem;
    }
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.4rem;
    }
    h4 {
      font-size: 1.3rem;
    }
    h5 {
      font-size: 1.1rem;
    }
    h6 {
      font-size: 1rem;
    }

    code {
      display: inline-block;
      padding: 0.2rem 0.6rem;
      background-color: #61616132;
      color: #424242;
      font-family: 'JetBrainsMono', monospace;
    }

    pre {
      background: #0d0d0d;
      color: #fff;
      font-family: 'JetBrainsMono', monospace;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;
      max-width: 1320px;
      overflow: auto;

      code {
        color: inherit;
        padding: 0;
        background: none;
        font-size: 1rem;
      }
    }

    hr {
      height: 1px;
      background-color: ${Colors.mediumGray};
    }

    img {
      max-width: 100%;
      height: auto;
    }

    blockquote {
      padding-left: 1rem;
      border-left: 3px solid ${Colors.mediumGray};
      color: ${Colors.gray};
    }

    hr {
      border: none;
      border-top: 2px solid rgba(#0d0d0d, 0.1);
      margin: 2rem 0;
    }
  }
`;

export default BlogPost;
