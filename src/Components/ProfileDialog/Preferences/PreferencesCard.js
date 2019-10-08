import React, { Component } from "react";
import "./PreferencesCard.css";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PieChart from 'react-minimal-pie-chart';
import randomColor from "randomcolor";
class PreferencesCard extends Component {
  state = {};
  render() {
    
    const attributes = this.props.attributes;
    const games = attributes["game_choice"] == null ? "" : attributes["game_choice"];
    const plays = attributes["game_minutes"] == null ? "" : attributes["game_minutes"];
    
    console.log(games, plays);
    var return_game = [];
    var return_time = [];
    var return_min = [];

    for (let i = 0; i < games.length; i++) {
      var game = games[i];
      return_game.push(
        <li>
         {game}
        </li>
      );
    }
    var sum=0;
for (let j=0; j< games.length; j++) {
sum += plays[j]
}

    var play;
    for (let j = 0; j < games.length; j++) {
      var play = plays[j];
      var percent = (play/sum)*100;
      return_time.push(
   percent
      );
      return_min.push(
        play
      );
    }

    
    var preferences2 = return_game.map(function(name, index) {
      var color = randomColor({luminosity: 'light'});
      var pref = {};
      pref["title"] = name;
      pref["value"] = return_time[index];
      pref["color"] = color;
      pref["time"] = return_min[index];
      return pref;
      })
      var list=[];
      for (let i=0; i< preferences2.length; i++){
       var pref= preferences2[i];
       var percentage = pref["time"];
      list.push(<li className={"legend"} style={{"background-color":pref.color}}>{pref.title}<span className={"percentage"}>{percentage}</span></li>);
      }
    return (
      <div className={"div-body-prefrences"}>
       <Typography gutterBottom>Game Preferences</Typography>
       <table className={"gameTable"}>
         <tbody>
           <tr><td className={"piechart"}><PieChart data={preferences2} /></td>
           <td>
             <ul>
               <li className={"subtitle"}><span>Game Choice / Game Minutes </span></li>
             {list}
           </ul></td></tr>
         </tbody>
       </table>
       

      </div>
    );
  }
}
PreferencesCard.propTypes = {
  attributes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  attributes: state.attributes.item
});

export default connect(
  mapStateToProps,
 null 
)(PreferencesCard);




