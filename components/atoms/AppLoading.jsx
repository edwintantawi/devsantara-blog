import Image from 'next/image';
import styled from 'styled-components';
import devsantaraFullLogo from '../../public/assets/devsantara-full.svg';
import Colors from '../../styles/colors';

const AppLoading = () => (
  <AppLoadingLayout>
    <Image src={devsantaraFullLogo} alt="devsantara" quality={10} />
  </AppLoadingLayout>
);

const AppLoadingLayout = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${Colors.darkBlue};
  display: grid;
  place-items: center;

  img {
    height: 2.5rem;
    width: auto;
  }
`;

export default AppLoading;
