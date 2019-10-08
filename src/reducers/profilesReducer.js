import {
  FETCH_PROFILES_BEGIN,
  FETCH_PROFILES_SUCCESS,
  FETCH_PROFILES_FAILURE
} from "../actions/types";

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROFILES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_PROFILES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload
      };
    case FETCH_PROFILES_FAILURE:
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
