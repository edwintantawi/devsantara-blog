import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import minWidth from '../../styles/mediaQuery';
import Colors from '../../styles/colors';

const AppActionBlogPost = () => (
  // TODO 4 : Handle each action
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
    position: sticky;
    top: 120px;
    height: max-content;
    margin-top: 32px;
    background-color: transparent;
    border: none;
    box-shadow: none;
  }

  button {
    margin-bottom: 0;
    padding: 12px;

    &.MuiIconButton-root:nth-child(1) {
      color: red;
    }
    &.MuiIconButton-root:nth-child(2) {
      color: green;
    }
    &.MuiIconButton-root:nth-child(3) {
      color: blue;
    }

    & .MuiSvgIcon-root {
      color: ${Colors.gray};
    }

    &:nth-child(1):hover .MuiSvgIcon-root {
      color: red;
    }
    &:nth-child(2):hover .MuiSvgIcon-root {
      color: green;
    }
    &:nth-child(3):hover .MuiSvgIcon-root {
      color: blue;
    }

    ${minWidth('md')} {
      margin-bottom: 32px;
    }

    .MuiSvgIcon-root {
      width: 24px;
      height: 24px;
      ${minWidth('md')} {
        width: 28px;
        height: 28px;
      }
    }
  }

  button:nth-child(1):hover .MuiSvgIcon-root {
    color: red;
  }
  button:nth-child(2):hover .MuiSvgIcon-root {
    color: green;
  }
  button:nth-child(3):hover .MuiSvgIcon-root {
    color: blue;
  }
`;

export default AppActionBlogPost;
