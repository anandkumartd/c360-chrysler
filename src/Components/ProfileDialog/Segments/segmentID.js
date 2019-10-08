import React, { Component } from "react";
import axios from "axios";

var Treasure = require('td-js-sdk')
var td = new Treasure({
        database: 'c360',
        writeKey: '1199/a820ff5a25e36501cc8651472f667d80231611ef',
        cdpHost: 'cdp-staging.in.treasuredata.com',
        host: 'in-staging.treasuredata.com'
      });

class segmentID extends Component {
  constructor(props) {
    super(props);

    this.state = {
     newsegment_id: null,
     segment_name: null,
      isLoading: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.getDataFromAPI();
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading ...</p>;
    }

    if (this.state.error) {
      return <p>{this.state.error.message}</p>;
    }

let currentComponent = this;

 var segments;
 var return_segments_temp = [];
const profile = this.props.profile;
const clientID=(profile["td_client_id"] == null ? "" : profile["td_client_id"]);

var successCallback = function (key,values) {

var json;
json = JSON.stringify(key);
var obj = JSON.parse(json);
segments = obj[0].values;


for(let i = 0; i < segments.length; i++){
      var segment_id = segments[i];
 console.log(segment_id);
      return_segments_temp.push(<li>{segment_id}</li>);
  }

currentComponent.setState({
newsegment_id : segment_id
});
};

var errorCallback = function(err) {
      console.log(err);
    };
td.fetchUserSegments({
  'audienceToken': 'a425a389-1880-4563-a1bc-0bb563dcd783',
        'version': '2',
        keys: {
          'td_client_id': clientID
          }
}, successCallback, errorCallback)


    return (
      // <React.Fragment>
      <div>
        <p>{this.props.match.params.email}</p>
      </div>
    );
      var getDataFromAPI = function() {
    axios.defaults.baseURL = "https://api-staging-cdp.treasuredata.com"; 
   axios.defaults.headers.common["Authorization"] =
  "TD1 1199/ca445d86e9cbd277d798cd4ee23849d230e42745";
    axios.get("/audiences/137520/segments/"+ +"/" )
      .then(response =>
        this.setState({
          segment_name: response.data.name,
          isLoading: false
        })
      )
      .catch(error =>
        this.setState({
          error,
          isLoading: false
        })
      );
  };
  }


}

export default segmentID;
