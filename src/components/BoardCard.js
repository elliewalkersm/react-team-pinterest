import React from 'react';
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

  const viewPins = () => {
    history.push(`/boards/${boardInfo.id}`);
  };

  return (
  <>
    <Card>
      <CardBody>
        <CardTitle tag="h5">{boardInfo.title}</CardTitle>
        <CardImg top width="100%" src={boardInfo.imageUrl} alt="Card image cap" />
        <CardText>{boardInfo.description}</CardText>
        <Button color="danger" onClick={viewPins}>Link</Button>
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
