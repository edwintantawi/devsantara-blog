import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../../styles/colors';
import AppButton from './AppButton';

const AppLoader = ({ type, message, onClick }) => {
  if (type === 'loading') {
    return (
      <LoaderLayout>
        <div>
          <span>Loading...</span>
          <p>{message}</p>
        </div>
      </LoaderLayout>
    );
  }
  if (type === 'error') {
    return (
      <LoaderLayout>
        <div>
          <span>Error...</span>
          <p>{message}</p>
          <AppButton type="button" className="full" onClick={onClick}>
            Try Again
          </AppButton>
        </div>
      </LoaderLayout>
    );
  }

  return null;
};

const LoaderLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 99;
  padding: 1rem;
  background-color: ${Colors.darkBlue};
  display: grid;
  place-items: center;

  div {
    display: grid;
    place-items: center;
    background-color: ${Colors.white};
    border-radius: 8px;
    padding: 1rem 1rem;
    width: 100%;
    max-width: 250px;
    text-align: center;

    span {
      font-weight: 600;
      font-size: 1.3rem;
    }
    p {
      color: ${Colors.gray};
      font-size: 0.9rem;
    }

    button {
      margin-top: 1rem;
    }
  }
`;

AppLoader.propTypes = {
  type: PropTypes.oneOf(['loading', 'error']).isRequired,
  message: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

AppLoader.defaultProps = {
  onClick: null,
};

export default AppLoader;
