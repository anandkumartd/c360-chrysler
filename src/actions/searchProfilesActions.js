import {
  SEARCH_PROFILES_BEGIN,
  SEARCH_PROFILES_SUCCESS,
  SEARCH_PROFILES_FAILURE
} from "./types";
import Parser from "../utils/parsers/Parser";


var Treasure = require('td-js-sdk')
var td = new Treasure({
        database: 'c360',
        writeKey: '1199/a820ff5a25e36501cc8651472f667d80231611ef',
        cdpHost: 'cdp-staging.in.treasuredata.com',
        host: 'in-staging.treasuredata.com'
      });
     
        
        
export const searchProfiles = email =>  {
 
 console.log(email);
 return (dispatch) => {
  dispatch( {
  type: SEARCH_PROFILES_BEGIN,
  payload: null
  })

    td.fetchUserSegments({
      
  'audienceToken': '65608b65-d3b2-4194-9707-d47cf3f6f134',
  'version': '2',
  keys: {
    'email': email
    }
    , successCallback, errorCallback})
  

  var successCallback = function (key,values) {
    var parser = new Parser();
  //console.log("test!");
  return (dispatch) => {
    dispatch({
      type: SEARCH_PROFILES_SUCCESS,
     payload: parser.mapSearchFromArrays(
      key,values
      )
    
    });
    };
  }

    var errorCallback = function(error) {
      console.log(error);
    //  dispatch({
      //  type: SEARCH_PROFILES_FAILURE,
     //   payload: error
     // })
    };
  }
}