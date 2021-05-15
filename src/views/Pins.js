import React from 'react';
import PropTypes from 'prop-types';
import PinCard from '../components/PinCard';

function Pins({ pins, setPins }) {
  return (
    <>
      <div className="card-container">
        {pins.map((pinInfo) => (
          <PinCard
            key={pinInfo.id}
            {...pinInfo}
            setPins={setPins}
          />
        ))}
      </div>
    </>
  );
}

Pins.propTypes = {
  pins: PropTypes.array.isRequired,
  setPins: PropTypes.func.isRequired
};

export default Pins;
