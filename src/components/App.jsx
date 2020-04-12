import React from 'react';
import GoogleMapReact from 'google-map-react';
import FlatList from './FlatList';
import Marker from './Marker';
import showFlats from '../../data/flats';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: showFlats,
      selectedFlat: showFlats[0]
    };
  }

  selectFlat = (index) => {
    this.setState({
      selectedFlat: showFlats[index]
    });
  }

  render() {
    const { flats, selectedFlat } = this.state;
    return (
      <div>
        <FlatList flats={flats} selectFlat={this.selectFlat} selectedFlat={selectedFlat} />
        <div className="map-container">
          <GoogleMapReact bootstrapURLKeys={{ key: "AIzaSyDWr-tpje_mR2m4hMC5KnaO75FvyfldYvg" }} defaultCenter={{ lat: selectedFlat.lat, lng: selectedFlat.lng }} defaultZoom={12}>
            <Marker lat={selectedFlat.lat} lng={selectedFlat.lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
