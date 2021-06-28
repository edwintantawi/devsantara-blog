import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import Colors from '../../styles/colors';
import AppAuthor from './AppAuthor';

const AppBlogCard = ({ index, url, data }) => (
  <BlogCardLayout>
    {index === -1 && (
      <Image
        src={data.bannerImage}
        alt=""
        width={1000}
        height={280}
        layout="responsive"
        objectFit="cover"
        quality={40}
      />
    )}

    <BlogCardContent>
      <AppAuthor
        authorName={data.authorName}
        timestamp={data.timestamp}
        authorPicture={data.authorPicture}
      />
      <Link href={url}>
        <a>
          <h3>{data.title}</h3>
        </a>
      </Link>
      <div>
        {data.tags.map((tag) => (
          <span key={tag.id}>#{tag.title}</span>
        ))}
      </div>
    </BlogCardContent>
  </BlogCardLayout>
);

const BlogCardLayout = styled.article`
  margin-bottom: 1rem;
  background-color: ${Colors.lightGray};
  border: 1px solid ${Colors.mediumGray};
  border-radius: 6px;
  overflow: hidden;
`;

const BlogCardContent = styled.div`
  padding: 1rem 1.5rem 1.5rem;

  & > a {
    text-decoration: none;
    color: ${Colors.darkBlue};

    h3 {
      display: block;
      margin-top: 1rem;
      display: -webkit-box;
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 1.2;
      max-height: 4.4rem;
      overflow: hidden;
      text-overflow: ellipsis;
      box-orient: vertical;
      -webkit-box-orient: vertical;
      line-clamp: 2;
      -webkit-line-clamp: 2;
    }
  }

  & > div {
    margin-top: 0.8rem;
    span {
      display: inline-block;
      margin-right: 0.8rem;
      color: ${Colors.gray};
      font-size: 0.9rem;
    }
  }
`;

AppBlogCard.propTypes = {
  index: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};

export default AppBlogCard;
