import React from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle,
  CardImg,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deletePin } from '../helpers/data/pinsData';
import PinForm from './PinForm';

const PinCard = ({
  firebaseKey,
  imageUrl,
  title,
  description,
  setPins,
}) => {
  const [editing, setEditing] = useState[''];
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deletePin(firebaseKey)
          .then(setPins);
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <Card>
      <CardImg className="card-img" top width="100%" src={imageUrl} />
      <CardTitle tag="h5">{title}</CardTitle>
      <CardText>{description}</CardText>
      <Button color="danger" onClick={() => handleClick('delete')}>Delete Pin</Button>
      <Button color="info" onClick={() => handleClick('edit')}>
        {editing ? 'Close Form' : 'Edit Pin'}
      </Button>
      {
        editing && <PinForm
          formTitle='Edit Pin'
          setPins={setPins}
          firebaseKey={firebaseKey}
          title={title}
        />
      }
    </Card>
  );
};

PinCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  setPins: PropTypes.func
};

export default PinCard;
