import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import SvgIcon from "@material-ui/core/SvgIcon";

class MapCard extends Component {
  render() {
    const profile = this.props.profile;
    const attributes = this.props.attributes;
    const return_lat =
    attributes["lat"] == null
        ? ""
        : attributes["lat"];

    const return_lng =
    attributes["lon"] == null
        ? ""
        : attributes["lon"];

    const return_city_name =
    attributes["city"] == null ? "" : attributes["city"];
    const defaultProps = {
      center: {
        lat: return_lat,
        lng: return_lng
      },
      zoom: 9
    };
    return (
      <div style={{ height: "260px", width: "100%" }}>
        <GoogleMapReact
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          heatmapLibrary={true} 
        >
          <AnyReactComponent
            lat={return_lat}
            lng={return_lng}
            text={return_city_name}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapCard;
const AnyReactComponent = ({ text }) => (
  <div><span><SvgIcon style={{"font-size":"44px", "color":"#eb5757"}}>
<path d="M7,0C3.1,0,0,3.1,0,7c0,5.2,7,13,7,13s7-7.8,7-13C14,3.1,10.9,0,7,0z M7,9.5C5.6,9.5,4.5,8.4,4.5,7
  S5.6,4.5,7,4.5S9.5,5.6,9.5,7S8.4,9.5,7,9.5z"/></SvgIcon></span>
  </div>
);



