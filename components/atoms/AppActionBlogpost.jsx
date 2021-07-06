import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import minWidth from '../../styles/mediaQuery';
import Colors from '../../styles/colors';
import { auth } from '../../lib/firebase';
import useAuthContext from '../../hooks/useAuthContext';
import AppActionBlogpostSkeleton from './AppActionBlogpostSkeleton';

const AppActionBlogPost = ({ id }) => {
  const [{ user }] = useAuthContext();
  const [loading, setLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [numOfLike, setNumOfLike] = useState(0);

  const handleLike = async () => {
    if (user) {
      setIsLiked((prev) => !prev);
      if (isLiked) {
        setNumOfLike((prev) => prev - 1);
      } else {
        setNumOfLike((prev) => prev + 1);
      }
      auth.currentUser.getIdToken(true).then(async (token) => {
        const options = {
          method: 'PUT',
          headers: { token },
        };
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_DOMAIN}/api/posts/${id}/like`,
          options
        );
        if (response.status !== 200) {
          setIsLiked((prev) => !prev);
          if (isLiked) {
            setNumOfLike((prev) => prev + 1);
          } else {
            setNumOfLike((prev) => prev - 1);
          }
        }
      });
    } else {
      // TODO: not login handler
      console.log('login first');
    }
  };

  const getStatus = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/posts/${id}`
    );
    const responseJson = await response.json();
    setNumOfLike(responseJson.result.likes.length);
    if (user) {
      setIsLiked(responseJson.result.likes.includes(user.uid));
    } else {
      setIsLiked(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    getStatus();
  }, [user]);

  return (
    // TODO 4 : Handle each action
    <ActionBlogPostLayout>
      {loading ? (
        <>
          <AppActionBlogpostSkeleton />
          <AppActionBlogpostSkeleton />
          <AppActionBlogpostSkeleton />
        </>
      ) : (
        <>
          <div className="button-wrapper">
            <IconButton onClick={handleLike}>
              {isLiked ? (
                <FavoriteIcon style={{ color: 'red' }} />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>
            <span>{numOfLike}</span>
          </div>
          <div className="button-wrapper">
            <IconButton>
              <BookmarkBorderIcon />
            </IconButton>
            <span>-</span>
          </div>

          <div className="button-wrapper">
            <IconButton>
              <ShareIcon />
            </IconButton>
            <span>-</span>
          </div>
        </>
      )}
    </ActionBlogPostLayout>
  );
};

export default AppActionBlogPost;

const ActionBlogPostLayout = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 56px;
  bottom: 0;
  z-index: 5;
  background-color: ${Colors.white};
  border-top: 1px solid ${Colors.mediumGray};
  box-shadow: 0 -1px 8px rgba(0, 0, 0, 0.1);

  ${minWidth('md')} {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: sticky;
    top: 110px;
    height: max-content;
    width: 52px;
    margin-top: 0;
    background-color: transparent;
    border: none;
    box-shadow: none;
  }

  .button-wrapper {
    display: flex;

    align-items: center;
    justify-content: center;

    ${minWidth('md')} {
      margin-bottom: 32px;
      flex-direction: column;
    }

    &:nth-child(1) button.MuiIconButton-root {
      color: red;
    }

    &:nth-child(2) button.MuiIconButton-root {
      color: green;
    }

    &:nth-child(3) button.MuiIconButton-root {
      color: blue;
    }

    & .MuiSvgIcon-root {
      color: ${Colors.gray};
    }

    .MuiSvgIcon-root {
      width: 24px;
      height: 24px;

      ${minWidth('md')} {
        width: 28px;
        height: 28px;
      }
    }

    span {
      font-size: 14px;
      display: flex;
      align-items: center;
    }
  }

  .button-wrapper:nth-child(1) button:hover .MuiSvgIcon-root {
    color: red;
  }

  .button-wrapper:nth-child(2) button:hover .MuiSvgIcon-root {
    color: green;
  }

  .button-wrapper:nth-child(3) button:hover .MuiSvgIcon-root {
    color: blue;
  }
`;
