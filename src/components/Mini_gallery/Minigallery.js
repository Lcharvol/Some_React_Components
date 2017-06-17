import React, { Component } from 'react';

import './Minigallery.css';

class Minigallery extends Component {
  render() {
    return (
      <div className="minigallery">
        <div className="minigallery_elem">
          <div className="cache" />
        </div>
        <div className="minigallery_elem">
          <div className="cache" />
        </div>
        <div className="minigallery_elem">
          <div className="cache" />
        </div>
        <div className="minigallery_elem">
          <div className="cache" />
        </div>
      </div>
    );
  }
}

export default Minigallery;
