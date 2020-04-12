import React from 'react';
import Flat from './Flat';

class FlatList extends React.Component {

  renderList = () => {
    const { flats, selectFlat, selectedFlat } = this.props;
    return flats.map((flat, index) => {
      return (
        <Flat
          flat={flat}
          selectFlat={selectFlat}
          key={flat.lat}
          selected={flat.name === selectedFlat.name}
          index={index}
        />
      );
    });
  }

  render() {
    return <div className="flat-list">{this.renderList()}</div>;
  }
}

export default FlatList;
