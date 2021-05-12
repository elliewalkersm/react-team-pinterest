import React from 'react';
import PropTypes from 'prop-types';
import AddPinForm from '../components/AddBoardForm';

function PinForm({ user, setPin }) {
  return (
    <div>
      <AddPinForm
        formTitle='Add Pin'
        user={user}
        setPin={setPin}
      />
    </div>
  );
}

PinForm.propTypes = {
  user: PropTypes.any,
  setPin: PropTypes.func
};

export default PinForm;
