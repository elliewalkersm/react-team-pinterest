import React, { useState } from 'react';
import {
  Card, CardImg, CardText,
  CardTitle, Button
} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddBoardForm from './AddBoardForm';

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
        console.warn('you clicked delete');
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
    <Card body>
      <CardTitle tag="h5">{boardInfo.title}</CardTitle>
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
    </Card>
  </>
  );
};

BoardCard.propTypes = {
  boardInfo: PropTypes.object,
  setBoards: PropTypes.func,
  uid: PropTypes.any,
};

export default BoardCard;
