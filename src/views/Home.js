import React from 'react';
import PropTypes from 'prop-types';

function Home() {
  return (
    <div className="home-content-container mt-5">
      <h3>Public Pins</h3>
    </div>
  );
}
Home.propTypes = {
  time: PropTypes.string
};

export default Home;
