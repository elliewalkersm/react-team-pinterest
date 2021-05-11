import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import BoardCard from '../components/BoardCard';
import { getBoards } from '../helpers/data/boardsData';

function Boards({ user }) {
  const [boards, setBoards] = useState({});

  useEffect(() => {
    getBoards(user?.uid).then((response) => setBoards(response));
  }, []);

  console.warn(boards);

  return (
    <>
      <div className="card-container">
        {boards?.map((boardInfo) => (
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
};

export default Boards;
