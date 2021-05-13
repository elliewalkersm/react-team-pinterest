import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import PinCard from '../components/PinCard';
import { mergeBoardPinsData } from '../helpers/data/boardsData';

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
    mergeBoardPinsData(id).then((response) => {
      if (isMounted.current) {
        setBoardPins(response[1]);
        setBoard(response[0]);
      }
      isMounted.current = true;
    });
  }, []);
  return (
    <div>
      <header>
        { board === null ? 'Loading...' : <h1>{board.title}</h1>}
      </header>
      <div className='d-flex'>
        { boardPins.length === 0 ? 'No pins to show' : boardPins.map((object) => <PinCard
          key={object.id}
          {...object}
          setBoardPins={setBoardPins} />)
        }
      </div>
    </div>
  );
}

export default SingleBoard;
