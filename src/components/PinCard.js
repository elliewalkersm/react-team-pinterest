import React, { useState } from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle,
  CardImg,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deletePin, getSingleBoardPins, getSinglePinBoardRelationship } from '../helpers/data/boardsData';
import { deletePinBoardRelationship } from '../helpers/data/board_pinsData';
import { getPinRelationships } from '../helpers/data/pinsData';
import AddPinForm from './AddPinForm';

const PinCard = ({
  isPublic,
  setBoardPins,
  boardId,
  boards,
  user,
  ...object
}) => {
  const [editing, setEditing] = useState(false);
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        getSinglePinBoardRelationship(object.id, boardId).then((response) => {
          const relationshipId = response[0].id;
          deletePinBoardRelationship(relationshipId).then(() => getSingleBoardPins(boardId).then(setBoardPins));
        }).then(() => getPinRelationships(object.id).then((response) => {
          if (response.length <= 1) {
            deletePin(object.id, boardId).then((pins) => setBoardPins(pins[1]));
          }
        }));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
    }
  };
  return (
    <Card className="pin-card">
      <CardImg className="card-img" top width="100%" src={object.imageUrl} />
      <CardTitle tag="h5">{object.title}</CardTitle>
      <CardText>{object.description}</CardText>
      <a href={object.articleLink}>Article</a>
      {isPublic ? ''
        : <>
          <Button color="danger" size="sm" onClick={() => handleClick('delete')}>Delete Pin</Button>
          <Button board-btn color="light" size="sm" onClick={() => handleClick('edit')}>{ editing ? 'Close Form' : 'Edit Pin'}</Button>
        </>
      }
      {
        editing && <AddPinForm
          formTitle='Edit Pin'
          {...object}
          setBoardPins={setBoardPins}
          boards={boards}
          user={user}
        />
      }
    </Card>
  );
};

PinCard.propTypes = {
  setBoardPins: PropTypes.func,
  boardId: PropTypes.string,
  boards: PropTypes.string,
  user: PropTypes.any,
  isPublic: PropTypes.bool
};

export default PinCard;
