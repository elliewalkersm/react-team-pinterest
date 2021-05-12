import React from 'react';
import PropTypes from 'prop-types';
import AddPinForm from '../components/AddBoardForm';

function PinForm({ user, setPin, setBoards }) {
  return (
    <div>
      <AddPinForm
        formTitle='Add Pin'
        user={user}
        setPin={setPin}
        setBoards={setBoards}
      />
    </div>
  );
}

PinForm.propTypes = {
  user: PropTypes.any,
  setPin: PropTypes.func,
  setBoards: PropTypes.func
};

export default PinForm;
