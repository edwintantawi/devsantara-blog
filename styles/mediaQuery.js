export const screenSize = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
};

const minWidth = (screen) =>
  `@media screen and (min-width: ${screenSize[screen]}px)`;

export default minWidth;
