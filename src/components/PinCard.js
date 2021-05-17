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

const PinCard = ({ setBoardPins, boardId, ...object }) => {
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
      <Button color="danger" onClick={() => handleClick('delete')}>Delete Pin</Button>
      <Button color="info" onClick={() => handleClick('edit')}>
        {editing ? 'Close Form' : 'Edit Pin'}
      </Button>
      {
        editing && <p>editing is true</p>
      }
    </Card>
  );
};

PinCard.propTypes = {
  setBoardPins: PropTypes.func,
  boardId: PropTypes.string,
};

export default PinCard;
