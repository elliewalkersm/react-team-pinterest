import React from 'react';
import PropTypes from 'prop-types';
import AddBoardForm from '../components/AddBoardForm';

function BoardForm({ user }) {
  return (
    <div>
      <AddBoardForm
        forTitle='Add Board'
        user={user}
      />
    </div>
  );
}

BoardForm.propTypes = {
  user: PropTypes.string
};

export default BoardForm;
