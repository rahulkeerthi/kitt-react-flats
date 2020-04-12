import React from 'react';
import GoogleMap from './GoogleMap';
import FlatList from './FlatList';
import flats from '../../data/flats';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: { flats }
    };
  }

  render() {
    return (
      <div>
        <div className="flat-list"><FlatList flats={flats} /></div>
        <div className="map-container"><GoogleMap /></div>
      </div>
    );
  }
}

export default App;
