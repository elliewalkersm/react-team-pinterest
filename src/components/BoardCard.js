import React, { useState } from 'react';
import {
  CardImg, CardText, CardBody,
  CardTitle, Button
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
  <>
    <CardBody>
      <CardTitle img-fluid="true" tag="h5">{boardInfo.title}</CardTitle>
      <CardImg top width="100%" src={boardInfo.imageUrl} alt="Card image cap" />
      <CardText>{boardInfo.description}</CardText>
      <Button color="dark" onClick={viewPins}>Link</Button>
      <Button color="danger" onClick={() => handleClick('delete')}>Delete</Button>
      <Button color="primary" onClick={() => handleClick('edit')}>
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
  </>
  );
};

BoardCard.propTypes = {
  boardInfo: PropTypes.object,
  setBoards: PropTypes.func,
  uid: PropTypes.any,
};

export default BoardCard;
