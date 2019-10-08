import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


class HeatTableCard extends Component {
  state = {
rows:[]
  };
  componentDidMount(){
    const profile = this.props.profile;
    const attributes = this.props.attributes;
    const return_area = profile["area"] == null
        ? ""
        : profile["area"];

    const return_time =  profile["duration"] == null
        ? ""
        : profile["duration"];
 
   
var areas = [];
var durations =[];

for (let i = 0; i < return_area.length>0; i++) {
  var area = return_area[i];
  areas.push(area);
}
//console.log(areas);

for (let j = 0; j < return_time.length>0; j++) {
  var time = return_time[j];
  durations.push(time);
}
//console.log(durations);


var pair = durations.map(function(obj, index) {
  var myobj = {};
  myobj["name"] = areas[index];
  myobj["value"] = obj;
  return myobj;
});

var myJSON = JSON.stringify(pair);
//console.log(myJSON);

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
//console.log(result);
  //var counts = {};
 // for (var k = 0; k < areas.length; k++) {
     // counts[areas[k]] = 1 + (counts[areas[k]] || 0);
  //}
 //var uniques =Object.keys(counts);
// var total = uniques.length;

//console.log(total);
//var order = new Array(total);

//var orderNumber = [];
//for(var l=0;l<order.length;l++){
//orderNumber.push(l+1);
//}
//console.log(orderNumber);

var areaarray;
var durationarray;
var orderarray;
var rowarray = [];
function createData(orderarray, areaarray, durationarray) {
  return { orderarray, areaarray, durationarray };
}
Object.keys(result).forEach(function(name,i) {
areaarray = name;
var dur = result[name].value/120;
 durationarray = dur.toFixed(2);
orderarray = i+1;
var ro = createData(orderarray, areaarray, durationarray);
rowarray.push(ro);
});

this.setState({
rows: rowarray
});
  
  }
  render() {
 
  
    
      return (
        
        <div className="div-body">
        <div className="innercontainer">
        <Paper style={{maxHeight:'300px', overflowY:'scroll'}} >
          <Table >
            <TableHead>
              <TableRow>
                <TableCell>Order</TableCell>
                <TableCell align="left">Area</TableCell>
                <TableCell align="left">Duration (Min)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.rows.map(row => (
                <TableRow key={row.orderarray}>
                  <TableCell component="th" scope="row">
                    {row.orderarray}
                  </TableCell>
                  <TableCell align="left">{row.areaarray}</TableCell>
                  <TableCell align="left">{row.durationarray}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
         
        </div>
      </div>
      );
    }

   
  //}
}
HeatTableCard.propTypes = {
  attributes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  attributes: state.attributes.item
});

export default connect(
  mapStateToProps,
 null 
)(HeatTableCard);





