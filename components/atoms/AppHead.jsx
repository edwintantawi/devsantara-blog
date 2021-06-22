import Head from 'next/head';
import {
  appHeadPropTypes,
  appHeadDefaultProps,
} from '../../porpTypes/appHead.proptypes';

const BASE_KEYWORDS =
  'devsantara, Devsantara, DEVSANTARA, DevSantara, Developer Nusantara, blogs, programming, developer, software enginering, developer platform, indonesia, developer indonesia, development, software development, developer indonesia';

const BASE_URL = 'https://devsantara.vercel.app';

const AppHead = ({ title, keywords, description, url }) => (
  <Head>
    <title>{title}</title>
    <meta name="keywords" content={`${BASE_KEYWORDS}, ${keywords}`} />
    <meta name="description" content={description} />
    <meta property="og:title" content={`Devsantara | ${title}`} />
    <meta property="og:url" content={`${BASE_URL}/${url}`} />
    <meta property="og:image" content="/android-icon-192x192.png" />
  </Head>
);

// proptypes
AppHead.propTypes = appHeadPropTypes;

AppHead.defaultProps = appHeadDefaultProps;

export default AppHead;
