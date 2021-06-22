export const screen_size = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
};

const minWidth = (screen) => `screen and (min-width: ${screen_size[screen]}px)`;

export default minWidth;
