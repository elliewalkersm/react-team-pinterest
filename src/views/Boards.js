import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Row, Col,
} from 'reactstrap';
import BoardCard from '../components/BoardCard';

function Boards({ user, setBoards, boards }) {
  return (
    <div className="board-card-container">
        <Container className="themed-container icons-header mt-5" fluid={true}>
    <Row>
      <Col xs="6" className="icons-left d-flex justify-content-start"><i className="fas fa-pencil-alt edit-icon body-icons ml-5"></i><i className="fas fa-upload upload-icon body-icons ml-4"></i></Col>
      <Col xs="6" className="icons-right d-flex justify-content-end"><i className="fas fa-align-center filter-icon body-icons"></i><i className="fas fa-plus add-icon body-icons ml-4 mr-5"></i></Col>
    </Row>
  </Container>
      <div className="board-card d-flex w-100 flex-row justify-content-center">
        {boards.map((boardInfo) => (
          <BoardCard
            key={boardInfo.id}
            {...boardInfo}
            setBoards={setBoards}
            user={user}
          />
        ))}
      </div>
      <div className="boards-view">
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

// Icons above cards
