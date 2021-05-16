import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import BoardCard from '../components/BoardCard';

function Boards({ user, setBoards, boards }) {
  return (
    <div board-card-container>
      <Button className="add-board-button-icon mt-4 mb-4"><i className="fas fa-plus-circle"></i></Button>
      <div className="board-card">
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
