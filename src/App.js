import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import "./Components/ProfileList";
import ProfileList from "./Components/ProfileList";
import { connect } from "react-redux";
import { fetchProfiles } from "./actions/profilesActions";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.updateProfile = this.updateProfile.bind(this);
  // }
  // updateProfile() {
  //   this.props.updateProfile();
  // }

  componentWillMount() {
    this.props.fetchProfiles();
  }

  render() {
    return (
      <React.Fragment>
        <ProfileList profiles={this.props.profiles} />
      </React.Fragment>
    );
  }
}

App.propTypes = {
  fetchProfiles: PropTypes.func.isRequired,
  profiles: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  profiles: state.profiles.items
});

const mapActionsToProps = {
  fetchProfiles: fetchProfiles
};

export default connect(
  mapStateToProps,
  mapActionsToProps
  // { fetchProfiles }
)(App);
