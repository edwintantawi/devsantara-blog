import PropTypes from 'prop-types';

const appHeadPropTypes = {
  title: PropTypes.string,
  keywords: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
};

const appHeadDefaultProps = {
  title: 'Devsantara',
  keywords: '',
  description:
    'a website facility for developers to share and learn together to support existing developers, be the right means to get information from many developers who are experts in their fields, and share with other developers.',
  url: '',
};

export { appHeadPropTypes, appHeadDefaultProps };
