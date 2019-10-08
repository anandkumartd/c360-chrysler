import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {withGoogleMap,GoogleMap} from "react-google-maps";
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";
import SvgIcon from "@material-ui/core/SvgIcon";
//import { heatMapData } from './heatMapData.js';

class GheatCard extends Component {
  state = {
    Datapoints: []
  };
 
  componentDidMount(){

    const profile = this.props.profile;

    const attributes = this.props.attributes;
    const return_lat = profile["latitude"] == null
        ? ""
        : profile["latitude"];

    const return_lng =  profile["longitude"] == null
        ? ""
        : profile["longitude"];
 
    const return_weight = profile["duration"] == null
            ? ""
            : profile["duration"];
 

var lats = [];
var longs =[];
var weights = [];

for (let i = 0; i < return_lat.length>0; i++) {
  var lat = return_lat[i];
  lats.push(lat);
}

for (let j = 0; j < return_lng.length>0; j++) {
  var long = return_lng[j];
  longs.push(long);
}

for (let k = 0; k < return_weight.length>0; k++) {
  var weight = return_weight[k];
  weights.push(weight);
}



var pair = lats.map(function(value, index) {
  var myobj = {};
myobj["X"] = value;
myobj["Y"] = longs[index];
 myobj["Z"] = weights[index];

  return myobj;
});



var object = pair[0];
var result = JSON.stringify(object);
//console.log(result);
var X = object.X;
var Y = object.Y;
var Z = object.Z;


var Coox;
var Cooy;
var Cooz;
var heatMapData = [];
for (let r = 0; r < pair.length; r++) {
var data = pair[r];
Coox = data.X;
Cooy = data.Y;
Cooz = data.z;
//console.log('data:'+Coox);
var coordinate = {location: new window.google.maps.LatLng(Coox, Cooy), weight: Cooz};

heatMapData.push(coordinate);
//console.log('coordinate:'+JSON.stringify(coordinate));
}
//console.log("heatmap:"+JSON.stringify(heatMapData));


  this.setState({
    Datapoints: heatMapData
  });
  //[
//{location: new window.google.maps.LatLng(35.684852,	139.538445),weight:	120},
////{location: new window.google.maps.LatLng(35.684862,	139.53846)	,weight: 100},
//{location: new window.google.maps.LatLng(35.684887,	139.538457), weight: 100},
//{location: new window.google.maps.LatLng(35.684897,	139.538469), weight: 120},
//{location: new window.google.maps.LatLng(35.684907,	139.53848),	weight: 100},
//{location: new window.google.maps.LatLng(35.684918,	139.538484), weight: 120},
//{location: new window.google.maps.LatLng(35.684935,	139.538479), weight: 120},
//{location: new window.google.maps.LatLng(35.684951,	139.538461), weight: 90},
//{location: new window.google.maps.LatLng(35.684974,	139.538453), weight: 110},
//{location: new window.google.maps.LatLng(35.684994,	139.538444), weight: 120},
//{location: new window.google.maps.LatLng(35.685008,	139.538421), weight: 90},
//{location: new window.google.maps.LatLng(35.68503, 139.538438), weight: 100},
//{location: new window.google.maps.LatLng(35.68506,	139.538445), weight: 100},
//{location: new window.google.maps.LatLng(35.685045,	139.53844), weight: 120},
//{location: new window.google.maps.LatLng(35.685057,	139.538443),weight:	110},
//{location: new window.google.maps.LatLng(35.685072,	139.538434),weight:	90},
//{location: new window.google.maps.LatLng(35.68509,	139.538435),weight:	100},
//{location: new window.google.maps.LatLng(35.685105,	139.538438),weight:	110},
//{location: new window.google.maps.LatLng(35.68512,	139.538436),weight:	100},
//{location: new window.google.maps.LatLng(35.685134,	139.538437),weight:	60},
//{location: new window.google.maps.LatLng(35.685147,	139.538436),weight:	70}
    //];
    
  }
  
 

  render() {
    var subaru = new window.google.maps.LatLng(35.684895, 139.538136);
const Heatmap = withGoogleMap(props => 
<GoogleMap
defaultZoom={20}
center= {subaru}
mapTypeId= 'satellite'
heading = {90}
tilt = {0}
scrollwheel = 'false'
streetViewControl = 'false'
mapTypeControl = 'false'

>
<HeatmapLayer data = {this.state.Datapoints} />
</GoogleMap>);
    return (
      <div className="div-body">
      <div className="innercontainer">
      <div className="googleMap" style={{width:'100%', height:"580px"}}>
      <Heatmap
        containerElement={
          <div style={{ height: '580px' }} />
        }
        mapElement={
          <div style={{ height: '580px' }} />
        }
        center={subaru}
      />
      </div></div></div>
    );
  }
}
GheatCard.propTypes = {
  attributes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  attributes: state.attributes.item
});

export default connect(
  mapStateToProps,
 null 
)(GheatCard);







