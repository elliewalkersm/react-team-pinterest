import React from 'react';
import PropTypes from 'prop-types';
import AddPinForm from '../components/AddPinForm';

function PinForm({
  user, setPin, boards, setBoards
}) {
  return (
    <div className="pin-form-container mx-auto W-100 mt-5">
      <AddPinForm
        formTitle='Add Pin'
        user={user}
        boards={boards}
        setPin={setPin}
        setBoards={setBoards}
      />
    </div>
  );
}

PinForm.propTypes = {
  user: PropTypes.any,
  boards: PropTypes.array,
  setPin: PropTypes.func,
  setBoards: PropTypes.func
};

export default PinForm;
