import styled from 'styled-components';
import AppAuthor from '../atoms/AppAuthor';
import EditorStyle from '../../styles/editorStyle';
import Colors from '../../styles/colors';
import minWidth from '../../styles/mediaQuery';

const AppBlogPostContent = ({ blogpost }) => (
  <BlogpostWrapper>
    <BlogPostHeading>
      <h1 className="title">{blogpost.title}</h1>
      <div className="tags">
        {blogpost.tags.map((tag) => (
          <span key={tag.id}>#{tag.title}</span>
        ))}
      </div>
      <AppAuthor
        authorName={blogpost.authorName}
        createAt={blogpost.createAt}
        authorPicture={blogpost.authorPicture}
      />
    </BlogPostHeading>
    <EditorStyle view>
      <div dangerouslySetInnerHTML={{ __html: blogpost.htmlContent }} />
    </EditorStyle>
  </BlogpostWrapper>
);

const BlogpostWrapper = styled.div`
  min-width: 100%;
  border-radius: 6px;
  overflow: hidden;
`;

const BlogPostHeading = styled.header`
  padding: 32px 12px 32px;
  max-width: 100%;
  background-color: ${Colors.white};

  ${minWidth('md')} {
    padding: 32px 16px 0;
  }

  & > .title {
    line-height: 1.3;
    font-size: 30px;
    font-weight: 700;

    ${minWidth('md')} {
      font-size: 48px;
    }
  }

  & > .tags {
    margin: 16px 0 8px;

    span {
      display: inline-block;
      margin: 0 0.5rem 0.5rem 0;
      padding: 0.2rem 0.5rem;
      color: ${Colors.gray};
      font-size: 12px;
      background-color: ${Colors.lightGray};

      ${minWidth('md')} {
        font-size: 14px;
      }
    }
  }
`;

export default AppBlogPostContent;
