import React, { Component } from "react";
import axios from "axios";

class ProfileDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile_detail: null,
      isLoading: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.getDataFromAPI();
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading ...</p>;
    }

    if (this.state.error) {
      return <p>{this.state.error.message}</p>;
    }

    return (
      // <React.Fragment>
      <div>
        <p>Hello {this.props.match.params.email}</p>
      </div>
    );
  }

  getDataFromAPI() {
    axios.defaults.baseURL = "http://localhost:3000/data/db.json"; // https://jsonplaceholder.typicode.com/posts
    // axios.defaults.headers.common["Authorization"] =
    // "Token 0e47454ced798faba2d2dcf03469fe718ae5e3b3";
    axios
      .get("")
      .then(response =>
        this.setState({
          profile_detail: response.data.profile,
          isLoading: false
        })
      )
      .catch(error =>
        this.setState({
          error,
          isLoading: false
        })
      );
  }
}

export default ProfileDetail;
