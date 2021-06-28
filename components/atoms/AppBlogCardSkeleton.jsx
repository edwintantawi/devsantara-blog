import { Avatar } from '@material-ui/core';
import styled from 'styled-components';
import Colors from '../../styles/colors';

const AppBlogCardSkeleton = () => (
  <BlogCardLayout>
    <BlogCardContent>
      <BlogCardAuthor>
        <Avatar style={{ width: '2rem', height: '2rem' }} />
        <BlogCardIdentity>
          <span />
          <span />
        </BlogCardIdentity>
      </BlogCardAuthor>
      <span className="h3">
        <span />
        <span />
      </span>
      <div className="tags">
        <span />
        <span />
        <span />
      </div>
    </BlogCardContent>
  </BlogCardLayout>
);

const BlogCardLayout = styled.article`
  margin-bottom: 0.8rem;
  background-color: ${Colors.lightGray};
  border: 1px solid ${Colors.mediumGray};
  border-radius: 6px;
  overflow: hidden;

  .image {
    width: 100%;
    height: 14.25rem;
    background-color: ${Colors.mediumGray};
  }
`;

const BlogCardContent = styled.div`
  padding: 1rem 1.5rem 1.5rem;

  .h3 {
    display: block;
    margin-top: 1rem;

    span {
      display: block;
      height: 1.5rem;
      width: 90%;
      background-color: ${Colors.mediumGray};
      border-radius: 8px;

      &:last-child {
        margin-top: 0.3rem;
        width: 70%;
      }
    }
  }

  .tags {
    margin-top: 0.8rem;
    span {
      display: inline-block;
      margin-right: 0.8rem;
      height: 1.2rem;
      width: 4rem;
      background-color: ${Colors.mediumGray};
      border-radius: 8px;
    }
  }
`;

const BlogCardAuthor = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const BlogCardIdentity = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0.6rem;

  span {
    width: 4rem;
    height: 0.7rem;
    background-color: ${Colors.mediumGray};
    border-radius: 8px;
  }

  span:nth-child(2) {
    margin-top: 3px;
  }
`;

export default AppBlogCardSkeleton;