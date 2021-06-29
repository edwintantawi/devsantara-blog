import styled from 'styled-components';
import AppAuthor from '../atoms/AppAuthor';
import EditorStyle from '../../styles/editorStyle';
import Colors from '../../styles/colors';
import minWidth from '../../styles/mediaQuery';

const AppBlogPostContent = ({ blogpost }) => (
  <main style={{ minWidth: '100%' }}>
    <BlogPostHeading>
      <h1 className="title">{blogpost.title}</h1>
      <div className="tags">
        {blogpost.tags.map((tag) => (
          <span key={tag.id}>#{tag.title}</span>
        ))}
      </div>
      <AppAuthor
        authorName={blogpost.authorName}
        timestamp={blogpost.timestamp}
        authorPicture={blogpost.authorPicture}
      />
    </BlogPostHeading>
    <EditorStyle
      view
      dangerouslySetInnerHTML={{ __html: blogpost.htmlContent }}
    />
  </main>
);

const BlogPostHeading = styled.header`
  padding: 1.5rem 0.5rem 3rem;
  max-width: 100%;
  @media ${minWidth('md')} {
    padding: 3rem 3rem 0;
  }

  & > .title {
    font-size: 3rem;
    line-height: 1.3;
  }

  & > .tags {
    margin: 0.5rem 0 1rem;
    span {
      display: inline-block;
      margin: 0 0.5rem 0.5rem 0;
      padding: 0.2rem 0.5rem;
      color: ${Colors.gray};
      font-size: 1rem;
      background-color: ${Colors.lightGray};
    }
  }
`;

export default AppBlogPostContent;
