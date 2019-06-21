import { SELECTED_NEWS, DATA_LOADED } from "../constants/action-types";

const initialState = {
  newsList: [],
  selectedNewsId: null
};

function rootReducer(state = initialState, action) {
  if (action.type === SELECTED_NEWS) {
    return Object.assign({}, state, {
      selectedNewsId: action.payload
    });
  }
  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      newsList: action.payload
    });
  }
  return state;
}

export default rootReducer;
