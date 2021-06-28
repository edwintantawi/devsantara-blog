import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

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
  flex-direction: column;
  button {
    margin-bottom: 1.5rem;

    .MuiSvgIcon-root {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export default AppActionBlogPost;
