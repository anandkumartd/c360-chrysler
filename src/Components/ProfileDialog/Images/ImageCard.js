import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import "./ImageCard.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";


class ImageCard extends Component {
  state = {};

  render() {
    const attributes = this.props.attributes;
  const profile = this.props.profile;
   const images=(profile["image_urls"] == null ? "" : profile["image_urls"]);
   var return_images =[];
  for(let i = 0; i < images.length; i++){
     var image = images[i];
    console.log(image);
    return_images.push(<li><a href={image} target="_blank" ><img src={image} /></a></li>);
    }
    //var vals = [psVue, psPlus, psNow, psVideo, psMusic];
   // for (let i = 0; i < vals.length; i++) {
     // var val = vals[i];
      //console.log(val);
    //}

    //var computeClass = function(val) {
      //return {
       // inactive: val === 0,
        //active: val === 1
     // };
    //};
    //var textClass = computeClass(vals);
    //console.log(textClass);
    //this.setState({value: val, textClass: textClass});

    return (
      <div className="div-body">
        <div className="innercontainer">
        <Typography gutterBottom>Recommended Cars</Typography>
        <ul className={"recommendedImages"}>
       {return_images}
        </ul>
        </div>
      </div>
    );
  }
}
ImageCard.propTypes = {
  attributes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  attributes: state.attributes.item
});

export default connect(
  mapStateToProps,
 null 
)(ImageCard);





