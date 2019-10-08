import Parser from "../utils/parsers/Parser";
import axios from "axios";

class API {
  getDataFromAPI() {
    var parser = new Parser();
    axios.defaults.baseURL = "http://localhost:3000/profiles"; // https://jsonplaceholder.typicode.com/posts
    // axios.defaults.headers.common["Authorization"] =
    // "Token 0e47454ced798faba2d2dcf03469fe718ae5e3b3";
    axios
      .get("")
      .then(response =>
        this.setState({
          profiles: parser.makeDictFromArrays(
            response.data.names,
            response.data.rows
          ),
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

export default API;
