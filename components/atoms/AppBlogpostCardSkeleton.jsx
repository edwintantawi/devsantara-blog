import { Avatar } from '@material-ui/core';
import styled, { keyframes } from 'styled-components';
import Colors from '../../styles/colors';
import minWidth from '../../styles/mediaQuery';

const AppBlogCardSkeleton = () => (
  <BlogCardLayout>
    <BlogCardContent>
      <div className="flash" />
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
  margin: 8px 8px 10px;
  background-color: ${Colors.lightGray};
  border: 1px solid ${Colors.mediumGray};
  border-radius: 6px;
  overflow: hidden;

  ${minWidth('md')} {
    margin: 0 0 12px;
  }

  .image {
    width: 100%;
    height: 14.25rem;
    background-color: ${Colors.mediumGray};
  }
`;

const Flash = keyframes`
  to{
    right: -110%;
  }
`;

const BlogCardContent = styled.div`
  padding: 8px 18px 16px;
  overflow: hidden;
  position: relative;

  ${minWidth('md')} {
    padding: 16px 24px 24px;
  }

  .flash {
    position: absolute;
    right: 110%;
    background-color: ${Colors.lightGray};
    width: 100px;
    height: 100%;
    opacity: 0.5;
    z-index: 2;
    transform: skewX(-40deg);
    animation: ${Flash} 1.8s ease-in-out infinite;
  }

  .h3 {
    display: block;
    margin-top: 12px;

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
    margin-top: 8px;
    span {
      display: inline-block;
      margin-right: 8px;
      height: 16px;
      width: 64px;
      background-color: ${Colors.mediumGray};
      border-radius: 8px;
    }
  }
`;

const BlogCardAuthor = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

const BlogCardIdentity = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12px;

  span {
    width: 4rem;
    height: 12px;
    background-color: ${Colors.mediumGray};
    border-radius: 8px;
  }

  span:nth-child(2) {
    margin-top: 3px;
  }
`;

export default AppBlogCardSkeleton;
