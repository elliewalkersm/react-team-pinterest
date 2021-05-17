import React from 'react';
import PropTypes from 'prop-types';
import PinCard from '../components/PinCard';

function Pins({ pins, setPins }) {
  return (
    <div className="pin-card-container">
      <div className="pin-card">
        {pins.map((pinInfo) => (
          <PinCard
            key={pinInfo.id}
            {...pinInfo}
            setPins={setPins}
          />
        ))}
      </div>
    </div>
  );
}

Pins.propTypes = {
  pins: PropTypes.array.isRequired,
  setPins: PropTypes.func.isRequired
};

export default Pins;
