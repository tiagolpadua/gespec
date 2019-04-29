import { LOGIN, LOGOUT } from "../constants/Actions";

const initialState = {};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        user: action.data
      };
    case LOGOUT:
      return {};
    default:
      return state;
  }
}
