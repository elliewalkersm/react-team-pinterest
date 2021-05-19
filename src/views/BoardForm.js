import React from 'react';
import PropTypes from 'prop-types';
import AddBoardForm from '../components/AddBoardForm';

function BoardForm({ user, setBoards }) {
  return (
    <div className="board-form mx-auto W-100">
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
