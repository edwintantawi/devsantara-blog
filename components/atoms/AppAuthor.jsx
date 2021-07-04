import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import Colors from '../../styles/colors';

const AppAuthor = ({ authorName, createAt, authorPicture }) => (
  <BlogCardAuthor>
    <Avatar src={authorPicture} />
    <BlogCardIdentity>
      <span>{authorName}</span>
      <span>
        {new Date(createAt._seconds * 1000).toISOString().split('T')[0]}
      </span>
    </BlogCardIdentity>
  </BlogCardAuthor>
);

const BlogCardAuthor = styled.div`
  display: flex;
  align-items: center;

  .MuiAvatar-root {
    width: 30px;
    height: 30px;
  }
`;

const BlogCardIdentity = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;

  span:nth-child(1) {
    font-weight: 600;
    font-size: 12px;
    color: ${Colors.gray};
  }

  span:nth-child(2) {
    font-size: 11px;
    color: ${Colors.gray};
    margin-top: -3px;
  }
`;

AppAuthor.propTypes = {
  authorName: PropTypes.string.isRequired,
  authorPicture: PropTypes.string.isRequired,
};

export default AppAuthor;
