import React, { useState } from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle,
  CardImg,
  CardBody
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
      <CardBody>
        <CardImg className="card-image" top img-fluid="true" width="100%" src={object.imageUrl} />
        <CardTitle className="card-title mt-4 mb-3" tag="h4">{object.title}</CardTitle>
        <CardText className="card-text mb-4" >{object.description}</CardText>
        <hr></hr>
        <Button color="light" size="sm"><a href={object.articleLink}>Article</a></Button>
        {isPublic ? ''
          : <>
            <Button className="pin-delete-btn" color="light" size="sm" onClick={() => handleClick('delete')}><i className="fas fa-trash mr-2 ml-2"></i></Button>
            <Button board-btn color="light" size="sm" onClick={() => handleClick('edit')}>{editing ? 'Close Form' : 'Edit Pin'}</Button>
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
      </CardBody>
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
