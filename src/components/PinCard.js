import React, { useState } from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle,
  CardImg,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deletePin } from '../helpers/data/pinsData';

const PinCard = ({ setBoardPins, ...object }) => {
  const [editing, setEditing] = useState(false);
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deletePin(object.id)
          .then(setBoardPins);
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
    }
  };
  return (
    <Card>
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
  setBoardPins: PropTypes.func
};

export default PinCard;
