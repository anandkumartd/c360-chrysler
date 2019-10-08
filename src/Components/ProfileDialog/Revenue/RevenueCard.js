import React, { Component } from "react";
import "./RevenueCard.css";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class RevenueCard extends Component {
  state = {};

  render() {
    const attributes = this.props.attributes;
    const profile = this.props.profile;
    const prices =profile["game_price"] == null ? "" : profile["game_price"];
   
    var total = 0;
    var count;
    for (let i = 0; i < prices.length; i++) {
      var price = prices[i];
      total += prices[i];
     var sum = total.toFixed(0);
       
    }
    count = prices.length;
    var ROI = sum / count;
    var year = ROI*1000;
    var fixedroi = year.toFixed(0);
    var valuetime = sum*3;
    var finalval = valuetime*100;
    var LTV = finalval.toFixed(0);
    var rev = sum*10;



    return (
      <div className="div-body">
        <Typography gutterBottom>Revenue</Typography>
        <div className="innercontainer">
        <table className={"reventTable"}><tbody><tr className={"figures"}><td><h5><span>$</span>{rev}</h5><p className={"title"}>Maintenance Revenue</p></td><td><h5><span>$</span>{fixedroi}</h5><p className={"title"}>Last Sale</p></td><td><h5><span>$</span>{LTV}</h5><p className={"title"}>LTV</p></td></tr></tbody></table>
        </div>
      </div>
    );
  }
}
RevenueCard.propTypes = {
  attributes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  attributes: state.attributes.item
});

export default connect(
  mapStateToProps,
 null 
)(RevenueCard);





