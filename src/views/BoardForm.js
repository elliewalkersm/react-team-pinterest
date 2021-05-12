import React from 'react';
import PropTypes from 'prop-types';
import AddBoardForm from '../components/AddBoardForm';

function BoardForm({ user, setBoard }) {
  return (
    <div>
      <AddBoardForm
        formTitle='Add Board'
        user={user}
        setBoard={setBoard}
      />
    </div>
  );
}

BoardForm.propTypes = {
  user: PropTypes.any,
  setBoard: PropTypes.func
};

export default BoardForm;
