import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import minWidth from '../../styles/mediaQuery';
import Colors from '../../styles/colors';

const AppActionBlogPost = () => (
  <ActionBlogPostLayout>
    <IconButton>
      <FavoriteBorderIcon />
    </IconButton>
    <IconButton>
      <BookmarkBorderIcon />
    </IconButton>
    <IconButton>
      <ShareIcon />
    </IconButton>
  </ActionBlogPostLayout>
);

const ActionBlogPostLayout = styled.div`
  display: flex;
  flex-direction: row;
  position: sticky;
  top: 4.3rem;
  z-index: 5;
  background-color: ${Colors.white};
  height: max-content;

  ${minWidth('md')} {
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 7.5rem;
    height: max-content;
    margin-top: 3rem;
  }

  button {
    margin-bottom: 0;

    ${minWidth('md')} {
      margin-bottom: 1.5rem;
    }

    .MuiSvgIcon-root {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export default AppActionBlogPost;
