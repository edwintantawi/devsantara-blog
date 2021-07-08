import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../../styles/colors';
import AppButton from './AppButton';
import minWidth from '../../styles/mediaQuery';

const AppLoader = ({ type, message, onClick, onClickReject }) => {
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

  if (type === 'approval') {
    return (
      <LoaderLayout>
        <div>
          <span>Approval...</span>
          <p>{message}</p>
          <AppButton type="button" className="full bg-red" onClick={onClick}>
            yes, Delete it
          </AppButton>
          <AppButton type="button" className="full" onClick={onClickReject}>
            no, keep it
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
    padding: 16px;
    width: 100%;
    max-width: 250px;
    text-align: center;

    span {
      font-weight: 600;
      font-size: 22px;
    }
    p {
      color: ${Colors.gray};
      font-size: 14px;
      margin-bottom: 8px;
    }

    button {
      margin-top: 8px;
      font-size: 12px;

      ${minWidth('md')} {
        font-size: 14px;
      }
    }
  }
`;

AppLoader.propTypes = {
  type: PropTypes.oneOf(['loading', 'error', 'approval']).isRequired,
  message: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

AppLoader.defaultProps = {
  onClick: null,
};

export default AppLoader;
