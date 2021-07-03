import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';
import AppBlogpostCard from '../atoms/AppBlogpostCard';
import AppBlogpostCardSkeleton from '../atoms/AppBlogpostCardSkeleton';
import AppErrorState from '../atoms/AppErrorState';
import Colors from '../../styles/colors';
import minWidth from '../../styles/mediaQuery';

const AppHomeContent = ({ endpoint, limit, seeAllPostAction, editable }) => {
  const [blogposts, setBlogposts] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState([
    'Ooops somethings wrong...',
    'Try to refresh the page',
  ]);

  const getBlogposts = useCallback(async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/${endpoint}`
      );
      const responseJson = await response.json();
      if (response.status === 404) {
        setErrorMessage([
          "Ooops you don't have any posts",
          'make sure you have created and have your own post',
        ]);
        setError(true);
      } else {
        setBlogposts(responseJson.results);
      }
    } catch {
      setError(true);
    }
  }, [endpoint]);

  useEffect(() => {
    getBlogposts();
  }, []);

  if (error) {
    return <AppErrorState message={errorMessage} />;
  }

  return (
    <div>
      {!blogposts.length && (
        <>
          {Array(limit)
            .fill(1)
            .map((value, index) => (
              <AppBlogpostCardSkeleton key={index} />
            ))}
        </>
      )}
      {blogposts.map(({ id, data }, index) => (
        <AppBlogpostCard
          editable={editable}
          key={id}
          id={id}
          index={index}
          data={{
            bannerImage: data.bannerImage,
            authorPicture: data.authorPicture,
            authorName: data.authorName,
            timestamp: data.timestamp,
            title: data.title,
            tags: data.tags,
          }}
        />
      ))}
      {seeAllPostAction && !error ? (
        <Link href="/myposts" passHref>
          <DashboardAction>
            <p>See all my posts</p>
          </DashboardAction>
        </Link>
      ) : null}
    </div>
  );
};

const DashboardAction = styled.a`
  display: block;
  margin: 16px 8px 8px;
  padding: 12px 20px;
  border: 2px dashed ${Colors.mediumGray};
  text-decoration: none;
  color: ${Colors.gray};

  &:hover {
    border: 2px dashed ${Colors.gray};
  }

  ${minWidth('md')} {
    padding: 16px 32px;
    margin: 18px 0;
  }

  p {
    text-align: center;
    font-size: 12px;
    ${minWidth('md')} {
      font-size: 14px;
    }
  }
`;

AppHomeContent.propTypes = {
  endpoint: PropTypes.string.isRequired,
  limit: PropTypes.number,
  seeAllPostAction: PropTypes.bool,
  editable: PropTypes.bool,
};

AppHomeContent.defaultProps = {
  limit: 10,
  seeAllPostAction: false,
  editable: false,
};

export default AppHomeContent;
