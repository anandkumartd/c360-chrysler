import {
    FETCH_PREDICTS_BEGIN,
    FETCH_PREDICTS_SUCCESS,
    FETCH_PREDICTS_FAILURE
  } from "./types";
  import Parser from "../utils/parsers/Parser";
  import axios from "axios";
  
  export const fetchPredicts = (attrID, percentage) => dispatch => {
    dispatch({
      type: FETCH_PREDICTS_BEGIN
    });
  
    var parser = new Parser();
    // proxy url to be used for removing CORS errors
 var proxyURL = "https://fierce-ridge-46359.herokuapp.com/"
axios.defaults.baseURL = proxyURL+"https://api-staging-cdp.treasuredata.com"; 
axios.defaults.headers.common["Authorization"] =
"TD1 1199/2fcd68b917650f65455abe67f452fe753ea5b32b";
 axios.get("/audiences/215893/predictive_segments/"+ attrID+"/")
   .then(response => {

     console.log("predictname:" + response.data);
      dispatch({
        type: FETCH_PREDICTS_SUCCESS,
        payload: parser.makePredictFromArrays(response.data)
      });
    }
   )
  .catch(error =>
    dispatch({
        type: FETCH_PREDICTS_FAILURE,
        payload: error
      })
  );
};

