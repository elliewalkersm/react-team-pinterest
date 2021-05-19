import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import PinCard from '../components/PinCard';
import { mergeBoardPinsData } from '../helpers/data/boardsData';

function SingleBoard({ boards, user }) {
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
        setBoard(response[0]);
        setBoardPins(response[1]);
      }
      isMounted.current = true;
    });
  }, []);
  return (
    <div>
      <header className="single-board-header mt-3">
        { board === null ? 'Loading...' : <h2>{board.title} Pins</h2>}
      </header>
      <Container className="themed-container icons-header mt-5" fluid={true}>
      <Row>
        <Col xs="6" className="icons-left d-flex justify-content-start"><i className="fas fa-pencil-alt edit-icon body-icons ml-5"></i><i className="fas fa-upload upload-icon body-icons ml-4"></i></Col>
        <Col xs="6" className="icons-right d-flex justify-content-end"><i className="fas fa-align-center filter-icon body-icons"></i><Link to='/add-boards'><i className="fas fa-plus add-icon body-icons ml-4 mr-5"></i></Link></Col>
      </Row>
    </Container>
      <div className='d-flex w-100 justify-content-start'>
        { boardPins.length <= 0 ? 'No pins to show' : boardPins.map((object) => <PinCard
          key={object.id}
          {...object}
          boardId={id}
          boards={boards}
          user={user}
          setBoardPins={setBoardPins} />)
        }
      </div>
    </div>
  );
}

SingleBoard.propTypes = {
  boards: PropTypes.string,
  user: PropTypes.any
};

export default SingleBoard;
