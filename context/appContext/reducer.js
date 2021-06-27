import ACTION_TYPES from '../actionTypes';

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.TOGGLE_DRAWER:
      return {
        ...state,
        isActiveNavDrawer: !state.isActiveNavDrawer,
      };

    case ACTION_TYPES.TOGGLE_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
