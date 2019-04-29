import { SET_LOADING, SET_ERROR } from "../constants/Actions";

const initialState = { loading: false, error: null };

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        error: action.data
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.data
      };
    default:
      return state;
  }
}
