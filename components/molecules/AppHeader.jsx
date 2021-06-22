import styled from 'styled-components';
import AppLogo from '../atoms/AppLogo';
import AppButton from '../atoms/AppButton';
import AppWrapper from '../atoms/AppWrapper';
import Colors from '../../styles/colors';

const AppHeader = () => {
  return (
    <Header>
      <AppWrapper>
        <HeaderWrapper>
          <AppLogo />
          <HeaderAction>
            <AppButton type="button">Sign in</AppButton>
            <AppButton type="button" white>
              Create account
            </AppButton>
          </HeaderAction>
        </HeaderWrapper>
      </AppWrapper>
    </Header>
  );
};

const Header = styled.header`
  position: sticky;
  top: 0;
  background-color: ${Colors.darkBlue};
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0;
`;

const HeaderAction = styled.div`
  display: flex;
`;

export default AppHeader;
