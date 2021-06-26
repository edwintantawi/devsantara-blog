import styled from 'styled-components';
import Image from 'next/dist/client/image';
import logoFull from '../../public/assets/devsantara-full.svg';
import Colors from '../../styles/colors';
import AppWrapper from '../atoms/AppWrapper';
import minWidth from '../../styles/mediaQuery';

const AppFooter = () => {
  const handleCopyrightYears = () => {
    const firstYears = 2020;
    const currentYears = new Date().getFullYear();

    if (firstYears === currentYears) {
      return firstYears;
    }

    return `${firstYears} - ${currentYears}`;
  };
  return (
    <FooterLayout>
      <AppWrapper>
        <FlexLayout>
          <Image src={logoFull} alt="Devsantara" />
          <span>copyright &#xA9; {handleCopyrightYears()}</span>
        </FlexLayout>
      </AppWrapper>
    </FooterLayout>
  );
};

const FooterLayout = styled.footer`
  padding: 1.5rem;
  background-color: ${Colors.darkBlue};
  color: ${Colors.white};
  text-align: center;

  img {
    height: 1.8rem;
    width: 100%;
    object-fit: contain;
  }

  span {
    display: block;
    margin: 0.5rem 0;
    font-weight: 400;
    font-size: 0.8rem;
    @media ${minWidth('md')} {
      margin: 0;
    }
  }
`;

const FlexLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media ${minWidth('md')} {
    flex-direction: row;
  }
`;

export default AppFooter;
