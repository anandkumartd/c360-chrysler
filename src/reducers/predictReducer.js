import {
    FETCH_PREDICTS_BEGIN,
    FETCH_PREDICTS_SUCCESS,
    FETCH_PREDICTS_FAILURE
  } from "../actions/types";
  
  const initialState = {
    items: [],
    loading: false,
    error: null
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case FETCH_PREDICTS_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
      case FETCH_PREDICTS_SUCCESS:
        return {
          ...state,
          loading: false,
          items: action.payload
        };
      case FETCH_PREDICTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
          item: []
        };
      default:
        return state;
    }
  }
  