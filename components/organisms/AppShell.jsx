import styled from 'styled-components';
import AppHead from '../atoms/AppHead';
import AppHeader from '../molecules/AppHeader';
import AppWrapper from '../atoms/AppWrapper';
import AppFooter from '../molecules/AppFooter';
import { appHeadPropTypes } from '../../porpTypes/appHead.proptypes';
import minWidth from '../../styles/mediaQuery';

const AppShell = ({ children, title, keyword, description, url }) => (
  <RootLayout>
    <ViewLayout>
      <AppHead
        title={title}
        keyword={keyword}
        description={description}
        url={url}
      />
      <AppHeader />
      <AppWrapper>
        <MainLayout>{children}</MainLayout>
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

  @media ${minWidth('md')} {
    grid-template-columns: auto 1fr;
  }
`;

AppShell.propTypes = appHeadPropTypes;

export default AppShell;
