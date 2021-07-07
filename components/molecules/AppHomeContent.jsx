import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';
import AppBlogpostCard from '../atoms/AppBlogpostCard';
import AppBlogpostCardSkeleton from '../atoms/AppBlogpostCardSkeleton';
import AppErrorState from '../atoms/AppErrorState';
import Colors from '../../styles/colors';
import minWidth from '../../styles/mediaQuery';

const AppHomeContent = ({
  endpoint,
  limit,
  seeAllPostAction,
  editable,
  pagination,
}) => {
  const [blogposts, setBlogposts] = useState([]);
  const [error, setError] = useState(false);
  const [lastId, setLastId] = useState(null);
  const [errorMessage, setErrorMessage] = useState([
    'Ooops somethings wrong...',
    'Try to refresh the page',
  ]);

  const getBlogposts = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/${endpoint}${
          lastId ? `?lastId=${lastId}` : ''
        }`
      );
      const responseJson = await response.json();
      if (!responseJson.results.length) {
        setErrorMessage(['Ooops nothings here', 'create your own posts']);
        setError(true);
      } else {
        setBlogposts((prev) => [...prev, ...responseJson.results]);
      }
    } catch (e) {
      console.error(e);
      setError(true);
    }
  };

  useEffect(() => {
    getBlogposts();
  }, [lastId]);

  const infiniteScroll = () => {
    const windowInnerHeight = window.innerHeight;
    const documentElScrollToTop = document.documentElement.scrollTop;
    const documentElOffsetHeight = document.documentElement.offsetHeight;
    if (
      Math.ceil(windowInnerHeight + documentElScrollToTop) ===
      documentElOffsetHeight
    ) {
      setLastId(blogposts[blogposts.length - 1].id);
    }
  };

  useEffect(() => {
    if (pagination === true && !blogposts.length === false) {
      window.addEventListener('scroll', infiniteScroll);
    }
    return () => {
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, [blogposts]);

  return (
    <div>
      <div>
        {blogposts.length === 0 && error !== true ? (
          <>
            {Array(limit)
              .fill(1)
              .map((value, index) => (
                <AppBlogpostCardSkeleton key={index} />
              ))}
          </>
        ) : null}
        {blogposts.map(({ id, data }, index) => (
          <AppBlogpostCard
            editable={editable}
            key={id}
            id={id}
            index={index}
            data={data}
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
      {error && <AppErrorState message={errorMessage} />}
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
