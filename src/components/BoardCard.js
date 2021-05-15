import React, { useState } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const BoardCard = ({
  uid,
  ...boardInfo
}) => {
  const history = useHistory();
  const [editing, setEditing] = useState(false);

  const viewPins = () => {
    history.push(`/boards/${boardInfo.id}`);
  };
  const handleClick = (type) => {
    switch (type) {
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      case 'delete':
        console.warn('you clicked delete');
        break;
      default:
    }
  };
  return (
  <>
    <Card>
      <CardBody>
        <CardTitle tag="h5">{boardInfo.title}</CardTitle>
        <CardImg top width="100%" src={boardInfo.imageUrl} alt="Card image cap" />
        <CardText>{boardInfo.description}</CardText>
        <Button color="info" onClick={viewPins}>View</Button>
        <Button color="danger" onClick={() => handleClick('delete')}>Delete</Button>
        { editing && 'you are editing'}
      </CardBody>
    </Card>
  </>
  );
};

BoardCard.propTypes = {
  boardInfo: PropTypes.object,
  uid: PropTypes.any,
};

export default BoardCard;
