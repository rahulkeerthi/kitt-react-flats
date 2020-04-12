import React from 'react';
import Marker from './Marker';

class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div>GoogleMap!</div>
        <div>
          <Marker />
        </div>
      </div>
    );
  }
}

export default GoogleMap;
