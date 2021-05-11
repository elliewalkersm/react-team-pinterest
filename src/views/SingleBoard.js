import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleBoard, getSingleBoardPins } from '../helpers/data/boardsData';

function SingleBoard() {
  const [board, setBoard] = useState({});
  const [boardPins, setBoardPins] = useState([]);
  const isMounted = useRef(false);

  const { id } = useParams();
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  useEffect(() => {
    const getSingleBoardInfo = getSingleBoard(id);
    const getPins = getSingleBoardPins(id);
    Promise.all([getSingleBoardInfo, getPins]).then((response) => {
      const [boardObject, pins] = response;
      if (isMounted.current) {
        setBoard(boardObject);
        setBoardPins(pins);
      }
    });
  }, []);
  return (
    <div>
      { !board ? 'Loading...' : <h1>{board.title}</h1>}
      { !boardPins ? 'Loading...' : boardPins.map((object) => <p key={object.id}>{object.title}</p>)}
    </div>
  );
}

export default SingleBoard;
