import styled from 'styled-components';
import Image from 'next/dist/client/image';
import PropTypes from 'prop-types';
import logoFull from '../../public/assets/devsantara-full.svg';
import Colors from '../../styles/colors';
import AppWrapper from '../atoms/AppWrapper';
import minWidth from '../../styles/mediaQuery';

const AppFooter = ({ hightFooter }) => {
  const handleCopyrightYears = () => {
    const firstYears = 2020;
    const currentYears = new Date().getFullYear();

    if (firstYears === currentYears) {
      return firstYears;
    }

    return `${firstYears} - ${currentYears}`;
  };
  return (
    <FooterLayout hightFooter={hightFooter}>
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
  padding: ${({ hightFooter }) =>
    hightFooter ? '24px 16px 80px' : '24px 16px'};
  background-color: ${Colors.darkBlue};
  color: ${Colors.white};
  text-align: center;

  ${minWidth('md')} {
    padding: 24px 16px;
  }

  img {
    height: 26px;
    width: 100%;
    object-fit: contain;
    ${minWidth('md')} {
      height: 32px;
    }
  }

  span {
    display: block;
    margin: 8px 0;
    font-weight: 400;
    font-size: 10px;
    ${minWidth('md')} {
      margin: 0;
      font-size: 14px;
    }
  }
`;

const FlexLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${minWidth('md')} {
    flex-direction: row;
  }
`;

AppFooter.propTypes = {
  hightFooter: PropTypes.bool,
};
AppFooter.defaultProps = {
  hightFooter: false,
};

export default AppFooter;
