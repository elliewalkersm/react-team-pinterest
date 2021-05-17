import React from 'react';
import PropTypes from 'prop-types';

function Home() {
  return (
    <div className="home-content-container">
      <h3>Public Pins</h3>
    </div>
  );
}
Home.propTypes = {
  time: PropTypes.string
};

export default Home;
