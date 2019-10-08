import {
  FETCH_ATTRIBUTES_BEGIN,
  FETCH_ATTRIBUTES_SUCCESS,
  FETCH_ATTRIBUTES_FAILURE
} from "../actions/types";

const initialState = {
  item: {},
  loading: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ATTRIBUTES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_ATTRIBUTES_SUCCESS:
      return {
        ...state,
        loading: false,
        item: action.payload
      };
    case FETCH_ATTRIBUTES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        item: {}
      };
    default:
      return state;
  }
}
