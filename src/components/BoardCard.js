import React, { useState } from 'react';
import {
  CardImg, CardBody,
  CardTitle, Button, Card
} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddBoardForm from './AddBoardForm';
import { deleteBoard } from '../helpers/data/boardsData';

const BoardCard = ({
  uid,
  setBoards,
  ...boardInfo
}) => {
  const [editing, setEditing] = useState(false);
  const handleClick = (type) => {
    switch (type) {
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      case 'delete':
        deleteBoard(boardInfo.id, uid).then((response) => setBoards(response));
        break;
      default:
        console.warn('Nothing Selected');
    }
  };

  const history = useHistory();

  const viewPins = () => {
    history.push(`/boards/${boardInfo.id}`);
  };

  return (
    <Card className="board-card">
    <CardBody>
      <CardImg top width="100%" src={boardInfo.imageUrl} alt="Card image cap" />
      <CardTitle img-fluid="true" tag="h5">{boardInfo.title}</CardTitle>
      <Button board-btn color="light" size="sm" onClick={viewPins}><i className="far fa-eye"></i></Button>
      <Button board-btn color="light" size="sm" onClick={() => handleClick('delete')}><i className="fas fa-trash"></i></Button>
      <Button board-btn color="light" size="sm" onClick={() => handleClick('edit')}>
        { editing ? 'Close Form' : 'Edit Board'}
      </Button>
      {
        editing && <AddBoardForm
          formTitle='Edit Board'
          {...boardInfo}
          setBoards={setBoards}
        />
      }
    </CardBody>
    </Card>
  );
};

BoardCard.propTypes = {
  boardInfo: PropTypes.object,
  setBoards: PropTypes.func,
  uid: PropTypes.any,
};

export default BoardCard;
