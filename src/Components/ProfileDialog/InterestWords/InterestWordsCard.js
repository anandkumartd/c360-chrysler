import React, { Component } from "react";
import "./../index.css";
import "./InterestWordsCard.css";
import Typography from "@material-ui/core/Typography";
// import { MDCChipSet } from "@material/chips";
import { connect } from "react-redux";
import PropTypes from "prop-types";



class InterestWordsCard extends Component {
  state = {};
  render() {
    const attributes = this.props.attributes;

    const interests =
    attributes["game_choice"] == null ? "" : attributes["game_choice"];
    var return_ineterst = [];
    for (let i = 0; i < interests.length; i++) {
      var inter = interests[i];
      console.log(inter);
      return_ineterst.push(
        <li>
          <div class="mdc-chip-set">
            <button class="mdc-chip">
              <span class="mdc-chip__text">{inter}</span>
            </button>
          </div>
        </li>
      );
    }
    return (
      <div className="div-body-interest">
        <Typography gutterBottom>Game Choice</Typography>
        <ul>{return_ineterst}</ul>
      </div>
    );
  }
}
InterestWordsCard.propTypes = {
  attributes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  attributes: state.attributes.item
});

export default connect(
  mapStateToProps,
 null 
)(InterestWordsCard);




