import React from 'react';
import PropTypes from 'prop-types';
import BoardCard from '../components/BoardCard';

function Boards({ user, setBoards, boards }) {
  return (
    <>
      <div className="card-container">
        {boards.map((boardInfo) => (
          <BoardCard
            key={boardInfo.id}
            {...boardInfo}
            setBoards={setBoards}
            user={user}
          />
        ))};
      </div>
    </>
  );
}

Boards.propTypes = {
  user: PropTypes.any,
  boards: PropTypes.array,
  setBoards: PropTypes.func,
};

export default Boards;
