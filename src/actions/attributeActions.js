import {
  FETCH_ATTRIBUTES_BEGIN,
  FETCH_ATTRIBUTES_SUCCESS,
  FETCH_ATTRIBUTES_FAILURE
} from "./types";
import Parser from "../utils/parsers/Parser";
import axios from "axios";

export const fetchAttributes = customerID => dispatch => {
  dispatch({
    type: FETCH_ATTRIBUTES_BEGIN
  });

  var parser = new Parser();
 // proxy url to be used for removing CORS errors
 var proxyURL = "https://fierce-ridge-46359.herokuapp.com/"
  axios.defaults.baseURL = proxyURL+"https://api-staging-cdp.treasuredata.com"; 
axios.defaults.headers.common["Authorization"] =
"TD1 1199/2fcd68b917650f65455abe67f452fe753ea5b32b";
axios.defaults.headers.common["content-type"] = "application/json;charset=utf-8";
  axios.get("/audiences/215893/customers/"+customerID+"/attributes").then(
    response => {
    // console.log("attr: " + response.data);
      dispatch({
        type: FETCH_ATTRIBUTES_SUCCESS,
        payload: parser.makeAttrFromArrays(response.data)
      });
    }
  )
.catch(error =>
  dispatch({
    type: FETCH_ATTRIBUTES_FAILURE,
    payload: error
  })
  );
};


