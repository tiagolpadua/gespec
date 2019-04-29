import {
  ADD_ANIMAL,
  DELETE_ANIMAL,
  LOAD_ANIMALS,
  UPDATE_ANIMAL,
  TOGGLE_VIEW_DELETED_ANIMALS
} from "../constants/Actions";

const initialState = { list: [], viewDeleted: false };

export default function animalsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ANIMALS:
      return {
        ...state,
        list: [...action.data]
      };
    case ADD_ANIMAL:
      return {
        ...state,
        list: [...state.list, action.data]
      };
    case DELETE_ANIMAL:
      return {
        ...state,
        list: state.list.map(p =>
          p._id === action.data ? { ...p, excluido: true } : p
        )
      };
    case TOGGLE_VIEW_DELETED_ANIMALS:
      return {
        ...state,
        viewDeleted: !state.viewDeleted
      };
    case UPDATE_ANIMAL:
      return {
        ...state,
        list: state.list.map(p =>
          p._id === action.data._id ? { ...action.data } : p
        )
      };
    default:
      return state;
  }
}
