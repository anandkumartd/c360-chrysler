import React from 'react';
import { render } from 'react-dom';
import { Map, TileLayer } from 'react-leaflet';
import HeatmapLayer from '../src/HeatmapLayer';
import { addressPoints } from './realworld.10000.js';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./HeatCard.css";
import view from './view.png';

class HeatCard extends React.Component {

  render() {
    const profile = this.props.profile;
    const attributes = this.props.attributes;
    const return_lat = attributes["lat"] == null ? "" : attributes["lat"];

    const return_lng = attributes["lon"] == null ? "" : attributes["lon"];

    const return_city_name =
    attributes["city"] == null ? "" : attributes["city"];
    const defaultProps = {
      center: {
        lat: return_lat,
        lng: return_lng
      },
      zoom: 18
    };
    return (
      <div>
        <Map  center={defaultProps.center}
          zoom={defaultProps.zoom}>
          <HeatmapLayer
            fitBoundsOnLoad
            fitBoundsOnUpdate
            points={addressPoints}
            longitudeExtractor={m => m[1]}
            latitudeExtractor={m => m[0]}
            intensityExtractor={m => parseFloat(m[2])} />
          <TileLayer
            url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution=''
          />
        </Map>
        <div className='overlay' style={{backgroundImage:"url(" + view + ")"}}></div>
      </div>
    );
  }
    
}


HeatCard.propTypes = {
  attributes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  attributes: state.attributes.item
});

export default connect(
  mapStateToProps,
  null
)(HeatCard);



