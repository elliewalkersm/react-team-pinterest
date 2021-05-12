import React from 'react';
import PropTypes from 'prop-types';
import AddBoardForm from '../components/AddBoardForm';

function BoardForm({ user, setBoards }) {
  return (
    <div>
      <AddBoardForm
        formTitle='Add Board'
        user={user}
        setBoards={setBoards}
      />
    </div>
  );
}

BoardForm.propTypes = {
  user: PropTypes.any,
  setBoards: PropTypes.func,
};

export default BoardForm;
