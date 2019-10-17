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
"TD1 1199/ca445d86e9cbd277d798cd4ee23849d230e42745";
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


