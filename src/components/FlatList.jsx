import React from 'react';
import Flat from './Flat';

class FlatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderList = () => {
    const { flats } = this.props;
    return flats.map((flat) => {
      return (
        <Flat
          name={flat.name}
          imageUrl={flat.imageUrl}
          price={flat.price}
          priceCurrency={flat.priceCurrency}
          key={flat.name}
        />
      );
    });
  }

  render() {
    return (
      <div className="flat-list">
        {this.renderList()}
      </div>
    );
  }
}

export default FlatList;
