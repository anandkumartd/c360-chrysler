import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {Bar} from 'react-chartjs-2';

class JourneyCard extends Component {
  state = {
    data: []
  };
componentDidMount(){

  const attributes = this.props.attributes;
  const profile = this.props.profile;
  const allCats =
    profile["all_categories"] == null
      ? ""
      : profile["all_categories"];
  const plays =
    profile["game_minutes"] == null ? "" : profile["game_minutes"];
  var Gcats =
    profile["game_category"] == null ? "" : profile["game_category"];


  var return_time = [];
  var return_cats = [];
  let array = [];

  //All category array is built here
  var catarrays = [];
  var catArr = allCats;
  catarrays = catArr.split(",");

  for (let i = 0; i < catarrays.length; i++) {
    var catarray = catarrays[i];

    array.push(catarray);
  }

  // All game minutes
  
  for (let h = 0; h < plays.length; h++) {
    var play = plays[h];

    return_time.push(play);
  }
 



  // All Game categories
  for (let k = 0; k < Gcats.length; k++) {
    var Gcat = Gcats[k];
    return_cats.push(Gcat);
  }

   //Difference of parent and child cat
   var diff=[];
   diff = array.filter(function(obj) { return return_cats.indexOf(obj) == -1; });
 
  
  var countzero = diff.length;
 
  

  //Pair of the cat/time is created here
  var pair = return_time.map(function(obj, index) {
    var myobj = {};
    myobj["name"] = return_cats[index];
    myobj["value"] = obj;
    return myobj;
  });

  var myJSON = JSON.stringify(pair);

  // const distinctCats = [...new Set(Gcats.map(x => x))];
  var minutes = [];
  var result = pair.reduce(function(r, o) {
 
    if (r[o.name]) {
      r[o.name].value += Number(o.value);
       minutes.push(r[o.name].value);
    } else {
      r[o.name] = { value: Number(o.value) };
      minutes.push(r[o.name].value);
    }
    return r;
  }, {});

  var highest_time =0;
  highest_time = Math.max(...minutes);
  var finalData = [];
  var finalresult =[];
  var finallabel=[];
  Object.keys(result).forEach(function(name) {
    var percent = (result[name].value/highest_time)*100;
    var percentage = percent.toFixed(2);
    finalData.push({ text: name, value: percentage });
    finalresult.push(percentage);
    finallabel.push(name);
  });
  // In case you want to show all the categories on the graph replace finallabel with finalcat and finalresult with finalmin in dataset config
  var finalmin=[];
 if (array.length > finalresult.length){
  finalmin = finalresult.concat(Array(countzero).fill(0));
 }
var finalcat =[];
if (countzero>0){
  finalcat = finallabel.concat(diff); 
}



 var myfinal = JSON.stringify(finalData);

  this.setState({

 data:{
      labels: finallabel,
      datasets: [
        {
          label: 'Category/Min %',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: finalresult
        }
      ]
    }

  });
}

  componentDidUpdate(prevProps) {
    if (prevProps.attributes !== this.props.attributes) {
      
  }
}

  render() {
    return (
      <div className="div-body">
<Typography gutterBottom>Game Minutes / Category</Typography>
<Bar
  data={this.state.data}
  width={300}
  height={180}
  options={{ maintainAspectRatio: true,  legend: { display: false} }}
/>

      </div>
    );
  }
}

JourneyCard.propTypes = {
  attributes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  attributes: state.attributes.item
});

export default connect(
  mapStateToProps,
  null
)(JourneyCard);
