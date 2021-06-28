import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import Colors from '../../styles/colors';

const AppAuthor = ({ authorName, timestamp, authorPicture }) => (
  <BlogCardAuthor>
    <Avatar style={{ width: '2rem', height: '2rem' }} src={authorPicture} />
    <BlogCardIdentity>
      <span>{authorName}</span>
      <span>
        {new Date(timestamp._seconds * 1000).toISOString().split('T')[0]}
      </span>
    </BlogCardIdentity>
  </BlogCardAuthor>
);

const BlogCardAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const BlogCardIdentity = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0.6rem;

  span:nth-child(1) {
    font-weight: 600;
    font-size: 0.8rem;
    color: ${Colors.gray};
  }

  span:nth-child(2) {
    font-size: 0.7rem;
    color: ${Colors.gray};
    margin-top: -3px;
  }
`;

AppAuthor.propTypes = {
  authorName: PropTypes.string.isRequired,
  authorPicture: PropTypes.string.isRequired,
};

export default AppAuthor;
