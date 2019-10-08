import React, { Component } from "react";
import "./SourcesCard.css";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PieChart from 'react-minimal-pie-chart';
import randomColor from "randomcolor";
class SourcesCard extends Component {
  state = {};
  render() {
    const attributes = this.props.attributes;
    const profile = this.props.profile;
    const sources = profile["game_channel"] == null ? "" :profile["game_channel"];
  
    var return_channel = [];

    for (let i = 0; i < sources.length; i++) {
      var source = sources[i];
      return_channel.push(
       source     
      );
    }


var total = 0;
total = return_channel.length;

var percentage=0;
var results =[];
var count=0;
var labels = [];
var pairs;
let occurrences =[];
occurrences = return_channel.reduce(function(obj, item) {
  obj[item] = (obj[item] || 0) + 1/total*100;
 return obj;
}, {});


 pairs = JSON.stringify(occurrences);

 labels = Object.keys(occurrences).map(function(key) {
  return [key];
});
results = Object.keys(occurrences).map(function(key) {
  return occurrences[key];
});

var preferences2 = Object.keys(occurrences).map(function(key) {
  var color = randomColor({luminosity: 'light'});
  var pref = {};
  pref["title"] = [key];
  pref["value"] = occurrences[key];
  pref["color"] = color;
  return pref;
  })


    
 
      var list=[];
     
      for (let k=0; k< preferences2.length; k++){
       var pref= preferences2[k];
       var percentage = pref["value"].toFixed(2);
      list.push(<li className={"legend"} style={{"background-color":pref.color}}>{pref.title}<span className={"percentage"}>{percentage}%</span></li>);
      } 
     
       
     
      
      
      
 
    return (
      <div className={"div-body"}>
         <div className="innercontainer">
       <Typography gutterBottom>Channel Preferences</Typography>
       <table className={"gameTable"}>
         <tbody>
           <tr><td className={"piechart"}> <PieChart data={preferences2} /></td>
           <td>
             <ul>
               <li className={"subtitle"}><span>Source / Percentage </span></li>
               {list}
           </ul></td></tr>
         </tbody>
       </table>
       
         </div>
      </div>
    );
  }
}
SourcesCard.propTypes = {
  attributes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  attributes: state.attributes.item
});

export default connect(
  mapStateToProps,
 null 
)(SourcesCard);




