import AppHead from '../atoms/AppHead';
import AppHeader from '../molecules/AppHeader';
import { appHeadPropTypes } from '../../porpTypes/appHead.proptypes';

const AppShell = ({ children, title, keyword, description, url }) => (
  <>
    <AppHead
      title={title}
      keyword={keyword}
      description={description}
      url={url}
    />
    <AppHeader />
    <main>{children}</main>
    <footer>footer</footer>
  </>
);

AppShell.propTypes = appHeadPropTypes;

export default AppShell;
