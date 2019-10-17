import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Parser from "../../../utils/parsers/Parser";
import { fetchPredicts } from "../../../actions/predictActions";
import axios from "axios";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./ScoresCard.css";
class ScoresCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scores_pop: []
    };
  }

componentDidMount(){
  const attributes = this.props.attributes;
  const profile = this.props.profile;
  let currentComponent = this;
  var percentage = 0;

  Object.keys(profile).forEach(function(key) {
    if (key.startsWith("td_predictive_score")) {
      var splat = key.split("_");
      var predictID = splat[splat.length - 1];

      if (Number.isInteger(parseInt(predictID))) {
        percentage = profile[key].toFixed(2);

        currentComponent.getDataFromAPI(predictID, percentage);
      }
      }
    });
  }

  componentDidUpdate(prevProps) {
   if (prevProps.profile !== this.props.profile) {
     const attributes = this.props.attributes;
     const profile = this.props.profile;
      let currentComponent = this;
      var percentage = 0;

      Object.keys(attributes).forEach(function(key) {
        if (key.startsWith("td_predictive_score")) {
          var splat = key.split("_");
          var predictID = splat[splat.length - 1];

          if (Number.isInteger(parseInt(predictID))) {
            percentage = profile[key].toFixed(2);

            currentComponent.getDataFromAPI(predictID, percentage);
            //   REDUX CALL
            // currentComponent.props.fetchPredicts(predictID, percentage);
          }
        }
      });
    }
  }

    
  getDataFromAPI(predictID, percentage) {
    var proxyURL = "https://fierce-ridge-46359.herokuapp.com/"
      axios.defaults.baseURL = proxyURL+"https://api-staging-cdp.treasuredata.com"; 
      axios.defaults.headers.common["Authorization"] =
      "TD1 1199/ca445d86e9cbd277d798cd4ee23849d230e42745";
       axios.get("/audiences/215893/predictive_segments/"+predictID+"/")
         .then(response => {
          var pop = this.state.scores_pop.concat(
            <li>
              <CircularProgressbar value={percentage} text={`${percentage}%`} />
              <p>{response.data.name}</p>
            </li>
          );
          this.setState({
            // data: pred_score_data,
            scores_pop: pop
          });
          }) .catch(error =>
            this.setState({
              error
            })
          );
      
  }
    
  render() {
 
 
    return (
      <div className="div-body">
        <Typography gutterBottom>Predictive Scores</Typography>
        <div className="innercontainer">
        <ul className={"progressBars"}>{this.state.scores_pop}</ul>
        </div>
      </div>
    );

  }




}

ScoresCard.propTypes = {
  attributes: PropTypes.object.isRequired,
  fetchPredicts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  attributes: state.attributes.item,
  predicts: state.predicts.items
});

const mapActionsToProps = {
  fetchPredicts: fetchPredicts
};

export default connect(
  mapStateToProps,
 null 
)(ScoresCard);



