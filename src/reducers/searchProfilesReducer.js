import {
  SEARCH_PROFILES_BEGIN,
  SEARCH_PROFILES_SUCCESS,
  SEARCH_PROFILES_FAILURE
} from "../actions/types";

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_PROFILES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case SEARCH_PROFILES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload
      };
    case SEARCH_PROFILES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload, // // action.payload.error
        item: []
      };
    default:
      return state;
  }
}
