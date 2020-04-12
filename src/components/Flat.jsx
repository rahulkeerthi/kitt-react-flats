import React from 'react';

class Flat extends React.Component {  
  handleClick = () => {
    const { index, selectFlat } = this.props;
    selectFlat(index);
  };

  render() {
    const { flat, selected } = this.props;
    return (
      <div className={`card${selected ? ' active' : ''}`} onClick={this.handleClick} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${flat.imageUrl})` }}>
        <div className="card-category">
          {flat.price}
          {' '}
          {flat.priceCurrency}
        </div>
        <div className="card-description">
          <h2>{flat.name}</h2>
        </div>
        {/* <a className="card-link" href="#" /> */}
      </div>
    );
  }
}

export default Flat;
