import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import "./SegmentsCard.css";

var Treasure = require('td-js-sdk')
var td = new Treasure({
        database: 'c360',
        writeKey: '1199/1eda157d6684e2dd40d51a9ad1d7746a59f2629a',
        cdpHost: 'cdp-staging.in.treasuredata.com',
        host: 'in-staging.treasuredata.com'
      });

class SegmentsCard extends Component {
  constructor(props) {
super(props);

this.state = {
return_segments: [],
segment_id: null,
segment_name: [],
segment_pop: [],
population: [],
pop: [],
total_pop: [],
return_width: []
};
}


  componentDidMount() {
    var segments = [];
    var return_segments_temp = [];
    let currentComponent = this;
   const profile = this.props.profile;
   const clientID=(profile["td_client_id"] == null ? "" : profile["td_client_id"]);
   const Email=(profile["email"] == null ? "" : profile["email"]);
   var successCallback = function (key,values) {
   
   var json;
   json = JSON.stringify(key);
   var obj = JSON.parse(json);
   segments = obj[0].values;
  

   
   for(let i = 0; i < segments.length; i++){
         var segment = segments[i];

     currentComponent.getDataFromAPI(segment);
     return_segments_temp.push(<li>{segment}</li>);
     }
    
   currentComponent.setState({
   return_segments : return_segments_temp
   });
   };
   
 
   
   var errorCallback = function(err) {
         console.log(err);
       };
       td.fetchUserSegments({
         'audienceToken': '65608b65-d3b2-4194-9707-d47cf3f6f134',
               'version': '2',
               keys: {
                 'email': Email
                 }
       }, successCallback, errorCallback)
   
       
    
  }

  getDataFromAPI(segment) {
    var proxyURL = "https://fierce-ridge-46359.herokuapp.com/"
    axios.defaults.baseURL = proxyURL+"https://api-staging-cdp.treasuredata.com"; 
 axios.defaults.headers.common["Authorization"] =
"TD1 1199/2fcd68b917650f65455abe67f452fe753ea5b32b";
  axios.get("/audiences/191732/segments/"+ segment +"/" )
    .then(response =>
      {
   
     var total_pops = this.state.total_pop;
     var max = Math.max(...total_pops);
  
     var popseg = this.state.total_pop.concat(response.data.population)
    
    
    var pop = this.state.segment_pop.concat(<li>{response.data.population}</li>)
     var new_seg_name = this.state.segment_name.concat(<li>{response.data.name}</li>)
     var Newpopulation = this.state.population.concat(response.data.population)
   
     
      this.setState({
        total_pop : popseg,
        segment_pop: pop,
       segment_name: new_seg_name,
       Newpopulation: [ ...this.state.population, response.data.population ],
        isLoading: false
      })
    } )
    
    .catch(error =>
      this.setState({
        error,
        isLoading: false
      })
    );

}

  render() {
    var total_pops = this.state.total_pop;
    var single_pop = {...this.state.segment_pop};
     var highest_pop = Math.max(...total_pops);
    let array = [];
     for(let i = 0; i < total_pops.length; i++){
       var single_pop = total_pops[i];
 var width = (single_pop/highest_pop)*100;
 array.push(
<span value={width} style={{width: width+'%'}} className={"segment_"+single_pop}></span>
 );
 
   }
 

    return (
      <div className="div-body">
        <div className="innercontainer">
       <Typography gutterBottom>Matching Segments</Typography>
       <div className="heading"># of Total Profiles</div>
       <table className={"segmentTable"}><tbody>
         <tr><td className={"segmentName"}><ul>{this.state.segment_name}</ul></td>
        <td className={"graphbar"}><ul>{array.map(function(name, index){
                    return <li key={ index } >{name}</li>;
                  })}</ul></td>
         <td className={"segmentPop"}><ul>{this.state.segment_pop}</ul></td>
         </tr>
       </tbody></table>
        </div>
       </div>
    );

  }
 


}

export default SegmentsCard;



