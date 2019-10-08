import React, { Component } from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import Paper from "@material-ui/core/Paper";
import MapCard from "./MapCard";
import "./SideBar.css";
import { AsYouType } from "libphonenumber-js";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Parser from "../../../utils/parsers/Parser";
import { fetchAttributes } from "../../../actions/attributeActions";

//import { fetchProfiles } from "../../../actions/profilesActions";

var dateFormat = require("dateformat");
class SideBar extends Component {
  state = {};
componentDidMount(){
  const profile = this.props.profile;
  //const customerID = (profile["cdp_customer_id"] == null ? "" : profile["cdp_customer_id"]);
 //this.props.fetchAttributes(customerID);
 const attributes = this.props.attributes;
}
  componentWillMount() {
  
  }

  render() {
    const profile = this.props.profile;
    const attributes = this.props.attributes;
    const return_name =
      (profile["first_name"] == null ? "" : profile["first_name"]) +
      " " +
      (profile["last_name"] == null ? "" : profile["last_name"]);

    const return_email = profile["email"] == null ? "" : profile["email"];
    const return_phone = profile["phone"] == null ? "" : profile["phone"];
    // const phoneNumber = parsePhoneNumberFromString(return_phone);
    const phoneNumber = new AsYouType("US").input(return_phone);
    // console.log("phoneNumber: " + phoneNumber);
    //console.log("phoneNumber: " + phoneNumber);
    const return_gender =profile["gender"] == null ? "" : profile["gender"];
    const return_birth =
    profile["dob"] == null ? "" : dateFormat(profile["dob"], "mediumDate");
    const return_age = profile["age"] == null ? "" : profile["age"];
    const return_street =
      (profile["number"] == null ? "" : profile["number"]) +
      " " +
      (profile["street"] == null ? "" : profile["street"].toLowerCase());
    const return_city =
    profile["city"] == null ? "" :profile["city"].toLowerCase();
    const return_state =
      (profile["state"] == null ? "" : profile["state"]) +
      " " +
      (profile["postcode"] == null ? "" : profile["postcode"]);
    const return_facebook = profile["facebook"] == null ? "" : profile["facebook"];
    const return_linkedin = profile["linkedin"] == null ? "" : profile["linkedin"];
    const return_pinterest =profile["pinterest"] == null ? "" : profile["pinterest"];
    const return_reddit = profile["reddit"] == null ? "" : profile["reddit"];
    const return_twitter = profile["twitter"] == null ? "" : profile["twitter"];
    
//console.log(attributes);
    return (
      <div className={"sidebar"}>
     
        <p className={"name"}>{return_name}</p>
        <p className={"email"}>
          <span className={"emailIcon"}>
            <SvgIcon>
              <path
                d="M0.9,0C0.1,0-0.3,1.1,0.3,1.6l6.8,5.5C7.4,7.3,7.7,7.4,8,7.4c0.3,0,0.6-0.1,0.9-0.3l4.7-3.9
  L13,2.5L8.3,6.4l0,0C8.2,6.4,8.1,6.4,8,6.4c-0.1,0-0.2,0-0.3-0.1L1.2,1h13.6H15v1.1l0.7-0.6l0,0C16.3,1,15.9,0,15.1,0H0.9z M1,3.7
  c0-0.3-0.2-0.5-0.5-0.5S0,3.4,0,3.7v7C0,11.4,0.6,12,1.2,12h13.5c0.7,0,1.2-0.6,1.2-1.2v-7c0-0.3-0.2-0.5-0.5-0.5S15,3.4,15,3.7v7
  c0,0.1-0.1,0.2-0.2,0.2H1.2C1.1,11,1,10.9,1,10.7V3.7z"
              />
            </SvgIcon>
          </span>
          <span className={"emailText"}>{return_email}</span>
        </p>
        <p className={"phone"}>
          <span className={"phoneIcon"}>
            <SvgIcon>
              <path
                d="M8,1C4.1,1,1,4.1,1,8s3.1,7,7,7s7-3.1,7-7S11.9,1,8,1z M0,8c0-4.4,3.6-8,8-8s8,3.6,8,8
  s-3.6,8-8,8S0,12.4,0,8z M5.7,2.9C5.9,2.9,6,3,6.1,3.1l1.6,2.4C7.8,5.7,7.8,6,7.6,6.2L7.1,6.7C7,6.8,7,7,7.1,7.2l0,0
  c0.2,0.3,0.5,0.6,0.8,0.9c0.3,0.3,0.6,0.6,0.9,0.8l0,0h0C9,9,9.2,9,9.3,8.9l0.5-0.5c0.2-0.2,0.4-0.2,0.6-0.1l2.4,1.6
  c0.1,0.1,0.2,0.2,0.2,0.4c0,0.1,0,0.3-0.1,0.4l-1.2,1.2c-0.6,0.6-1.6,0.9-2.4,0.6c-1.2-0.4-2.4-1.2-3.5-2.3C4.7,9.1,3.9,7.8,3.5,6.7
  c-0.3-0.9,0-1.8,0.6-2.4l0,0l1.2-1.2C5.4,2.9,5.6,2.9,5.7,2.9z M4.8,5C4.8,5,4.8,5,4.8,5C4.4,5.3,4.3,5.9,4.5,6.3l0,0
  c0.4,1,1,2.1,2,3.1c1,1,2.1,1.7,3.1,2.1c0.5,0.2,1,0,1.4-0.3l0,0l0.8-0.8l-1.6-1L10,9.6c-0.5,0.5-1.3,0.5-1.8,0.1
  c-0.3-0.3-0.7-0.6-1-0.9c-0.3-0.3-0.6-0.7-0.9-1C5.9,7.2,5.9,6.4,6.4,6l0.2-0.2l-1-1.6L4.8,5z"
              />
            </SvgIcon>
          </span>
          <span className={"phoneText"}>{phoneNumber}</span>{" "}
        </p>
        <p className={"gender"}>
          <span className={"genderIcon"}><SvgIcon>
          {
        profile["gender"] == 'Female' ? 
        <path
          d="M6.9,0C3.1,0,0.8,2.4,0.8,6.2c0,0.5,0.1,1.1,0.2,1.7c0.2,1.5,0.4,3.1-0.8,4.9
C0,12.8,0,12.9,0,13c0,0.1,0.1,0.2,0.2,0.2c0.1,0,1.4,0.9,4.6,1.3c0.8,1,1.7,1.5,2.6,1.5c0.9,0,1.8-0.5,2.6-1.5
c3.2-0.4,4.6-1.2,4.7-1.3c0.1-0.1,0.1-0.1,0.2-0.2c0-0.1,0-0.2-0.1-0.3c-1.3-1.7-1.1-3.1-0.9-4.6C13.9,7.6,14,7,14,6.5
c0-2.3-1-4.9-3.9-5C8.9,0.2,7.7,0,6.9,0z M9.8,5.3c0.5,0.5,1.4,1.8,1.4,3.8c0,2.7-1.7,4.8-1.7,4.8c0,0,0,0,0,0
c-0.7,0.9-1.4,1.3-2.2,1.3c-0.7,0-1.5-0.5-2.2-1.3c0,0,0,0,0,0c0,0-1.7-1.6-1.7-3.9C3.5,8.3,5,8,6.4,7.7c0.3-0.1,0.5-0.1,0.8-0.2
C8.7,7,9.4,6,9.8,5.3z M5.5,9C5.2,9,4.9,9.3,4.9,9.6c0,0.3,0.2,0.5,0.5,0.5C5.7,10.1,6,9.9,6,9.6C6,9.3,5.7,9,5.5,9z M9.3,9
C9,9,8.8,9.3,8.8,9.6c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5C9.8,9.3,9.6,9,9.3,9z" /> 
    
            : <path d="M7.8,9C7.6,9,7.3,9.3,7.3,9.6c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0,0,0,0,0,0C8.4,9.3,8.1,9,7.8,9z
  M4,9C3.7,9,3.5,9.3,3.5,9.6c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0,0,0,0,0,0C4.5,9.3,4.3,9,4,9z M11.8,7.2
 c-0.1-2.1-1.3-3.9-3.1-4.8c-0.2-0.1-1-0.5-1.8-1.1C6.2,0.9,5.6,0.4,5.5,0c-6.2,2.7-6,7.2-4.9,9.7c0.3,0.6,0.7,1.2,1.2,1.7l0,0
 c0.3,1,0.7,1.9,1.3,2.7c0.1,0.1,0.1,0.1,0.1,0.2c0,0,0.1,0.2,0.3,0.3c0.1,0.1,0.2,0.2,0.2,0.2c0.1,0.1,0.2,0.2,0.2,0.3
 c0.1,0.1,0.2,0.2,0.3,0.3c0.2,0.1,0.3,0.2,0.5,0.3c0,0,0.3,0.1,0.4,0.1C5.3,15.9,5.6,16,5.9,16c0.3,0,0.6-0.1,0.9-0.2
 c0.1,0,0.3-0.1,0.4-0.1c0.2-0.1,0.3-0.2,0.5-0.3c0.1-0.1,0.3-0.2,0.3-0.3C8,15,8.1,14.9,8.2,14.8c0.1-0.1,0.1-0.1,0.2-0.2
 c0.1-0.1,0.2-0.3,0.3-0.3c0,0,0.1-0.1,0.1-0.2c0.6-0.8,1-1.7,1.3-2.7c0,0,0,0,0,0C10.3,11,11.8,9.7,11.8,7.2z M8,14.1
 c-0.5,0.7-1.2,1.1-2,1.2c-0.8-0.1-1.6-0.5-2-1.2c0,0-0.2-0.2-0.2-0.3c-1-1.4-1.5-3-1.6-4.7c0-0.7,0.1-1.4,0.4-2.1
 c0.4-0.8,1.3-1.3,2.2-1c0.8,0.2,1.7,0.2,2.5,0C8.1,5.8,9,6.2,9.4,7c0.3,0.7,0.4,1.4,0.4,2.1c-0.1,1.7-0.6,3.3-1.6,4.7
 C8.1,13.9,8,14.1,8,14.1z"/> 
      }
          </SvgIcon> 
          </span>
          <span className={"genderText"}>{return_gender}</span>
        </p>
        <p className={"birth"}>
          <span className={"birthIcon"}>
            <SvgIcon>
              <path
                d="M6,0L5.5,0.7c0,0-0.3,0.5-0.6,1C4.7,2,4.6,2.3,4.4,2.5C4.3,2.8,4.2,3.1,4.2,3.4
  c0,1,0.8,1.8,1.8,1.8c1,0,1.8-0.8,1.8-1.8c0-0.3-0.1-0.6-0.2-0.9C7.4,2.3,7.3,2,7.1,1.7c-0.3-0.5-0.6-1-0.6-1L6,0z M6,5.2H4.2v3H2.5
  c-1.3,0-2.4,1-2.5,2.3c0,1,0.5,1.8,1.3,2.2l0.5,2.8L1.9,16h8.2l0.1-0.5l0.6-2.8c0.7-0.4,1.2-1.1,1.3-2c0-1.4-1-2.5-2.4-2.5H7.8v-3H6
  z M6,2.2c0,0.1,0,0.1,0.1,0.1C6.2,2.5,6.4,2.8,6.4,3s0.1,0.4,0.1,0.4C6.6,3.8,6.3,4,6,4S5.4,3.8,5.4,3.4c0,0,0-0.2,0.1-0.4
  c0.1-0.2,0.2-0.5,0.4-0.7C5.9,2.2,5.9,2.2,6,2.2z M5.4,6.4h1.2v1.8H5.4V6.4z M2.5,9.4h7.1c0.7,0,1.2,0.5,1.2,1.3
  c0,0.6-0.5,1.1-1.1,1.1c-0.3,0-0.5-0.1-0.7-0.2c-0.6-0.4-1.5-0.6-2.1,0c-0.2,0.2-0.5,0.2-0.7,0.2s-0.5-0.1-0.7-0.2
  c-0.6-0.5-1.5-0.5-2.1,0c-0.2,0.2-0.5,0.2-0.7,0.2c-0.7,0-1.2-0.5-1.2-1.2C1.2,9.9,1.8,9.4,2.5,9.4z M4.2,12.4c0.1,0,0.2,0,0.3,0.1
  C4.9,12.8,5.4,13,6,13s1.1-0.2,1.5-0.5c0.2-0.1,0.5-0.1,0.7,0.1C8.6,12.8,9,13,9.4,13l-0.4,1.8H2.9L2.6,13c0.5,0,0.9-0.2,1.3-0.5
  C4,12.5,4.1,12.4,4.2,12.4z"
              />
            </SvgIcon>
          </span>
          <span className={"birthText"}>
            {return_birth} ({return_age})
          </span>
        </p>
        <div className={"socials"}><ul>
          <li className={
       profile["facebook"] == null || profile["facebook"] === 0 ? 
      "facebook inactive"
      : "facebook active"}>
        <SvgIcon><path  d="M5.8,16V9.2h2.6l0.4-3h-3V4.3c0-0.9,0.2-1.5,1.5-1.5h1.6V0.1C8.6,0.1,7.6,0,6.5,0
          C4.2,0,2.6,1.4,2.6,4v2.3H0v3h2.6V16H5.8z"/></SvgIcon>
            </li>
          <li className={
        profile["linkedin"] == null || profile["linkedin"] === 0 ? 
      "linkedin inactive"
      : "linkedin active"}>
        <SvgIcon><path d="M14.7,16h-3.4c0,0,0-5.8,0-6.3c0-0.4,0-1.9-1.5-1.9c-1.3,0-1.5,1.4-1.5,1.9c0,0.5,0,6.3,0,6.3
  H5.1V4.9h3.4v1.5c0,0,0.7-1.5,2.6-1.5c2,0,3.6,1.6,3.6,4.8V16z M0,4.8h3.4V16H0V4.8z M1.7,3.7C0.7,3.7,0,2.8,0,1.8
  C0,0.8,0.7,0,1.7,0c1,0,1.7,0.8,1.7,1.8C3.4,2.8,2.8,3.7,1.7,3.7z"/></SvgIcon></li>
          <li className={profile["pinterest"] == null || profile["pinterest"] === 0 ? 
      "pinterst inactive"
      : "pinterest active"}>
        <SvgIcon><path  d="M8,0C3.6,0,0,3.6,0,8c0,3.4,2.1,6.3,5.1,7.5c-0.1-0.6-0.1-1.6,0-2.3c0.1-0.6,0.9-4,0.9-4
  S5.8,8.7,5.8,8C5.8,6.9,6.5,6,7.3,6c0.7,0,1,0.5,1,1.1c0,0.7-0.4,1.7-0.7,2.7c-0.2,0.8,0.4,1.4,1.2,1.4c1.4,0,2.5-1.5,2.5-3.7
  c0-1.9-1.4-3.3-3.3-3.3c-2.3,0-3.6,1.7-3.6,3.5c0,0.7,0.3,1.4,0.6,1.8C5,9.7,5,9.8,5,9.9c-0.1,0.3-0.2,0.8-0.2,0.9
  c0,0.1-0.1,0.2-0.3,0.1c-1-0.5-1.6-1.9-1.6-3.1C2.9,5.3,4.7,3,8.2,3c2.8,0,4.9,2,4.9,4.6c0,2.8-1.7,5-4.2,5c-0.8,0-1.6-0.4-1.8-0.9
  c0,0-0.4,1.5-0.5,1.9c-0.2,0.7-0.7,1.6-1,2.1C6.4,15.9,7.2,16,8,16c4.4,0,8-3.6,8-8S12.4,0,8,0z"/></SvgIcon></li>
          <li className={profile["reddit"] == null || profile["reddit"] === 0 ? 
      "reddit inactive"
      : "reddit active"}>
        <SvgIcon><path d="M7.9,0c4.3,0,7.9,3.5,7.9,7.8s-3.5,7.8-7.9,7.8S0,12.1,0,7.8S3.5,0,7.9,0z M10.9,6.8c-0.2,0-0.4,0.1-0.6,0.2
  C9.7,6.6,8.9,6.4,8.2,6.4l0.4-1.3l1.1,0.3c0,0.4,0.4,0.7,0.8,0.7c0.4,0,0.8-0.3,0.8-0.8c0-0.4-0.4-0.8-0.8-0.8
  c-0.3,0-0.6,0.2-0.7,0.4L8.5,4.6c-0.1,0-0.2,0-0.3,0.1L7.7,6.4C6.9,6.4,6.1,6.6,5.4,7C5.3,6.8,5.1,6.8,4.9,6.8
  c-0.5,0-0.9,0.4-0.9,0.9c0,0.3,0.2,0.6,0.4,0.8c0,0.1,0,0.1,0,0.2c0,0.6,0.4,1.2,1.1,1.7C6,10.8,6.9,11,7.8,11
  c0.9,0,1.8-0.2,2.5-0.7c0.7-0.4,1.1-1,1.1-1.7c0-0.1,0-0.1,0-0.2c0.3-0.2,0.4-0.5,0.4-0.8C11.8,7.2,11.4,6.8,10.9,6.8z M10.5,4.9
  c0.2,0,0.4,0.2,0.4,0.4c0,0.2-0.2,0.4-0.4,0.4c-0.2,0-0.4-0.2-0.4-0.4C10.1,5.1,10.3,4.9,10.5,4.9z M6.1,8.3c0-0.3,0.2-0.5,0.5-0.5
  C7,7.7,7.2,8,7.2,8.3c0,0.3-0.2,0.5-0.5,0.5C6.4,8.8,6.1,8.6,6.1,8.3z M9.2,9.8c-0.3,0.3-0.7,0.4-1.3,0.4c0,0,0,0,0,0c0,0,0,0,0,0
  c-0.6,0-1-0.1-1.3-0.4c-0.1-0.1-0.1-0.2,0-0.3c0.1-0.1,0.2-0.1,0.3,0c0.2,0.2,0.5,0.3,1,0.3c0,0,0,0,0,0c0,0,0,0,0,0
  c0.5,0,0.8-0.1,1-0.3c0.1-0.1,0.2-0.1,0.3,0C9.2,9.6,9.2,9.7,9.2,9.8z M9,8.8c-0.3,0-0.5-0.2-0.5-0.5C8.5,8,8.7,7.7,9,7.7
  c0.3,0,0.5,0.2,0.5,0.5C9.6,8.6,9.3,8.8,9,8.8z"/></SvgIcon></li>
          <li className={profile["twitter"] == null ||profile["twitter"] === 0 ? 
      "twitter inactive"
      : "twitter active"}>
        <SvgIcon><path d="M16,1.5C15.4,1.8,14.8,2,14.1,2c0.7-0.4,1.2-1,1.4-1.8c-0.6,0.4-1.3,0.6-2.1,0.8
  c-0.6-0.6-1.4-1-2.4-1C9.3,0,7.8,1.5,7.8,3.3c0,0.3,0,0.5,0.1,0.7C5.2,3.9,2.7,2.6,1.1,0.6c-0.3,0.5-0.4,1-0.4,1.6
  c0,1.1,0.6,2.1,1.5,2.7c-0.5,0-1-0.2-1.5-0.4c0,0,0,0,0,0c0,1.6,1.1,2.9,2.6,3.2C3,7.8,2.7,7.9,2.4,7.9c-0.2,0-0.4,0-0.6-0.1
  c0.4,1.3,1.6,2.2,3.1,2.3c-1.1,0.9-2.5,1.4-4.1,1.4c-0.3,0-0.5,0-0.8,0c1.5,0.9,3.2,1.5,5,1.5c6,0,9.3-5,9.3-9.3c0-0.1,0-0.3,0-0.4
  C15,2.8,15.6,2.2,16,1.5z"/></SvgIcon></li>
          </ul></div>
        <Paper>
          <MapCard attributes={profile} />
        </Paper>
        <p className={"address"}>
          <span className={"street"}>{return_street}</span>
          <span className={"city"}>, {return_city}</span>
          <span className={"state"}>, {return_state}</span>, United States
        </p>
      </div>
    );
  }
}

SideBar.propTypes = {
  fetchAttributes: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  attributes: state.attributes.item
});

const mapActionsToProps = {
  fetchAttributes: fetchAttributes
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(SideBar);
