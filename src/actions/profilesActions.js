import {
  FETCH_PROFILES_BEGIN,
  FETCH_PROFILES_SUCCESS,
  FETCH_PROFILES_FAILURE
} from "./types";
import Parser from "../utils/parsers/Parser";
import axios from "axios";

export const fetchProfiles = () => dispatch => {
  dispatch({
    type: FETCH_PROFILES_BEGIN
  });

  var parser = new Parser();
  //axios.defaults.proxy.host = "https://cors-anywhere.herokuapp.com/";
  // proxy url to be used for removing CORS errors
 var proxyURL = "https://fierce-ridge-46359.herokuapp.com/"
  axios.defaults.baseURL = proxyURL+"https://api-staging-cdp.treasuredata.com"; 
axios.defaults.headers.common["Authorization"] =
"TD1 1199/ca445d86e9cbd277d798cd4ee23849d230e42745";
axios.defaults.headers.common["content-type"] = "application/json;charset=utf-8";

  axios.get("/audiences/215893/customers/").then(
    response =>
    {
      dispatch({
        type: FETCH_PROFILES_SUCCESS,
        payload: parser.makeDictFromArrays(
          response.data.names,
          response.data.rows
        )
      })
      //console.log("profaction: " + response.data);
    }
   )
     .catch(error =>
      dispatch({
        type: FETCH_PROFILES_FAILURE,
        payload: error
      })
  );
};
