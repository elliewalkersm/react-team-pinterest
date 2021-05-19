import React from 'react';
import PropTypes from 'prop-types';
import PinCard from '../components/PinCard';

function Pins({ pins, setPins, user }) {
  return (
    <div className="pin-card-container">
      <Container className="themed-container icons-header mt-5" fluid={true}>
        <Row>
          <Col xs="6" className="icons-left d-flex justify-content-start"><i className="fas fa-pencil-alt edit-icon body-icons ml-5"></i><i className="fas fa-upload upload-icon body-icons ml-4"></i></Col>
          <Col xs="6" className="icons-right d-flex justify-content-end"><i className="fas fa-align-center filter-icon body-icons"></i><Link to='/add-boards'><i className="fas fa-plus add-icon body-icons ml-4 mr-5"></i></Link></Col>
        </Row>
      </Container>
      <div className="pin-card">
        {pins.map((pinInfo) => (
          <PinCard
            key={pinInfo.id}
            {...pinInfo}
            setPins={setPins}
            user={user}
          />
        ))}
      </div>
    </div>
  );
}

Pins.propTypes = {
  pins: PropTypes.array.isRequired,
  setPins: PropTypes.func.isRequired,
  user: PropTypes.any,
};

export default Pins;
