import ACTION_TYPES from './actionTypes';

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_NAV_DRAWER:
      return {
        ...state,
        isActiveNavDrawer: !state.isActiveNavDrawer,
      };
    default:
      return state;
  }
};

export default reducer;
