import React from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";

class MapBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 73.9338636,
      lat: 15.365179,
      zoom: 2
    };
    mapboxgl.accessToken =
      "pk.eyJ1IjoiY29tbW9kaXR5dmVjdG9ycyIsImEiOiJjamR3eWFvd3owcTUwMzRzNmg1eXJjYWlzIn0.QESIireyCutiiFOTlI4y5w";
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    var el = document.createElement("div");
    el.className = "marker";
    el.style.backgroundColor = "red";
    el.style.width = "40px";
    el.style.height = "40px";
    new mapboxgl.Marker(el, { offset: [0, -40 / 2] })
      .setLngLat([73.93419658302855, 15.367654027954824])
      .addTo(map);
  }

  render() {
    return (
      <div className="relative">
        <div ref={el => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}

export default MapBox;
