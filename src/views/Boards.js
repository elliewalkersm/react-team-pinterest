import React from 'react';
import PropTypes from 'prop-types';
import BoardCard from '../components/BoardCard';

function Boards({ user, setBoards, boards }) {
  return (
    <div className="board-card-container">
      <div className="board-card d-flex flex-row w-100 justify-content-around">
        {boards.map((boardInfo) => (
          <BoardCard
            key={boardInfo.id}
            {...boardInfo}
            setBoards={setBoards}
            user={user}
          />
        ))}
      </div>
    </div>
  );
}

Boards.propTypes = {
  user: PropTypes.any,
  boards: PropTypes.array,
  setBoards: PropTypes.func,
};

export default Boards;
