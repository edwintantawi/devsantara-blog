import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ShareIcon from '@material-ui/icons/Share';
import EditIcon from '@material-ui/icons/Edit';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import Colors from '../../styles/colors';
import AppAuthor from './AppAuthor';
import minWidth from '../../styles/mediaQuery';

const AppBlogCard = ({ index, id, data, editable }) => (
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
      <AuthorRow>
        <AppAuthor
          authorName={data.authorName}
          createAt={data.createAt}
          authorPicture={data.authorPicture}
        />
        {editable && (
          <Link href={`/myposts/editor?id=${id}`} passHref>
            <IconButton>
              <EditIcon />
            </IconButton>
          </Link>
        )}
      </AuthorRow>
      <Link href={`/posts/${id}`}>
        <a>
          <h3>{data.title}</h3>
        </a>
      </Link>
      <div className="tags">
        {data.tags.map((tag) => (
          <span key={tag.id}>#{tag.title}</span>
        ))}
      </div>
      <div className="post-stats">
        <div>
          <FavoriteBorderIcon />
          <span>{data.likes.length}</span>
        </div>
        <div>
          <BookmarkBorderIcon />
          <span>-</span>
        </div>
        <div>
          <ShareIcon />
          <span>-</span>
        </div>
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
`;

const BlogCardContent = styled.div`
  padding: 18px 18px;

  ${minWidth('md')} {
    padding: 24px 24px;
  }

  & > a {
    text-decoration: none;
    color: ${Colors.darkBlue};

    h3 {
      display: block;
      margin-top: 12px;
      display: -webkit-box;
      font-size: 20px;
      font-weight: 600;
      line-height: 1.3;
      max-height: 72px;
      overflow: hidden;
      text-overflow: ellipsis;
      box-orient: vertical;
      -webkit-box-orient: vertical;
      line-clamp: 2;
      -webkit-line-clamp: 2;

      ${minWidth('md')} {
        line-height: 1.5;
        margin-top: 14px;
        font-size: 24px;
      }
    }
  }

  & .tags {
    margin-top: 8px;

    span {
      display: inline-block;
      margin-right: 0.8rem;
      color: ${Colors.gray};
      padding: 2px 4px;
      border-radius: 4px;
      background-color: #e7e7e7;
      font-size: 12px;

      ${minWidth('md')} {
        font-size: 14px;
      }
    }
  }

  & .post-stats {
    display: flex;
    margin: 16px 0 0;

    & > div {
      margin-right: 26px;
      display: flex;
      align-items: center;
      color: ${Colors.gray};

      .MuiSvgIcon-root {
        font-size: 18px;

        ${minWidth('md')} {
          font-size: 20px;
        }
      }

      span {
        font-size: 12px;
        margin-left: 3px;

        ${minWidth('md')} {
          font-size: 14px;
          margin-left: 4px;
          margin-top: 2px;
        }
      }
    }
  }
`;

const AuthorRow = styled.div`
  display: flex;
  justify-content: space-between;

  .MuiIconButton-root {
    width: 40px;
    height: 40px;
    margin-right: -12px;

    .MuiSvgIcon-root {
      font-size: 20px;
    }
  }
`;

AppBlogCard.propTypes = {
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  editable: PropTypes.bool,
};

AppBlogCard.defaultProps = {
  editable: false,
};

export default AppBlogCard;
