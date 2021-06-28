import styled from 'styled-components';
import Colors from '../../styles/colors';

const AppLoader = () => (
  <LoaderLayout>
    <div>
      <span>Loading...</span>
      <p>show all over the world</p>
    </div>
  </LoaderLayout>
);

const LoaderLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  display: grid;
  place-items: center;

  div {
    display: grid;
    place-items: center;
    background-color: ${Colors.white};
    border-radius: 8px;
    padding: 1rem 2rem;

    span {
      font-weight: 600;
      font-size: 1.5rem;
    }
    p {
      color: ${Colors.gray};
      font-size: 1rem;
    }
  }
`;

export default AppLoader;
