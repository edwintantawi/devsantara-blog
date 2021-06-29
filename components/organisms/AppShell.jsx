import PropTypes from 'prop-types';
import styled from 'styled-components';
import AppHead from '../atoms/AppHead';
import AppHeader from '../molecules/AppHeader';
import AppWrapper from '../atoms/AppWrapper';
import AppFooter from '../molecules/AppFooter';
import { appHeadPropTypes } from '../../porpTypes/appHead.proptypes';
import minWidth from '../../styles/mediaQuery';
import AppNavigation from '../molecules/AppNavigation';

const AppShell = ({
  children,
  title,
  keywords,
  description,
  url,
  noNavigation,
}) => (
  <RootLayout>
    <ViewLayout>
      <AppHead
        title={title}
        keywords={keywords}
        description={description}
        url={url}
      />
      <AppHeader />
      <AppWrapper>
        <MainLayout>
          <AppNavigation noNavigation={noNavigation} />
          {children}
        </MainLayout>
      </AppWrapper>
    </ViewLayout>
    <AppFooter />
  </RootLayout>
);

const RootLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ViewLayout = styled.div`
  flex: 1;
`;

const MainLayout = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 32px;
  padding: 1.5rem 0;
  box-sizing: border-box;

  ${minWidth('md')} {
    grid-template-columns: auto 1fr;
  }
`;

AppShell.propTypes = { ...appHeadPropTypes, noNavigation: PropTypes.bool };
AppShell.defaultProps = {
  noNavigation: false,
};

export default AppShell;
