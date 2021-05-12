import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import PinCard from '../components/PinCard';
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
      <header>
        { board === null ? 'Loading...' : <h1>{board.title}</h1>}
      </header>
      <div className='d-flex'>
        { boardPins === null ? 'Loading...' : boardPins.map((object) => <PinCard
          key={object.id}
          {...object}
          setBoardPins={setBoardPins} />)
        }
      </div>
    </div>
  );
}

export default SingleBoard;
