import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  Label,
  Input,
} from 'reactstrap';
import { addPin } from '../helpers/data/pinsData';
import { updatePin } from '../helpers/data/boardsData';
import { createBoardPin } from '../helpers/data/board_pinsData';

function AddPinForm({
  user, formTitle, boards, setBoards, ...pinInfo
}) {
  const [pin, setPin] = useState({
    title: pinInfo?.title || '',
    imageUrl: pinInfo?.imageUrl || '',
    description: pinInfo?.description || '',
    articleLink: pinInfo?.articleLink || '',
    uid: user?.uid,
    id: pinInfo?.id || null
  });
  const [boardPinRelationship, setBoardPinRelationship] = useState({});
  const history = useHistory();

  const handleInputChange = (e) => {
    setPin((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (e) => {
    setBoardPinRelationship((prevState) => ({
      ...prevState,
      boardId: e.target.value,
      pinId: ''
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pin.id) {
      updatePin(pin, user.uid).then((pinsArray) => {
        createBoardPin(boardPinRelationship.boardId, pin.id);
        setPin(pinsArray);
        history.push('/boards');
      });
    } else {
      addPin(pin).then((response) => {
        const getboardId = boardPinRelationship.boardId;
        createBoardPin(getboardId, response);
        history.push('/boards');
      });
    }
  };

  return (
    <div>
      <Form
        className='pin-input-form'
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <h2>{formTitle}</h2>
        <Label></Label>
        <Input
          name='title'
          type='text'
          placeholder='Pin Title'
          value={pin.title}
          onChange={handleInputChange}
        >
        </Input>
        <Label></Label>
        <Input
          name='imageUrl'
          type='text'
          placeholder='Image URL'
          value={pin.imageUrl}
          onChange={handleInputChange}
        >
        </Input>
        <Label></Label>
        <Input
          name='description'
          type='textarea'
          placeholder='Pin Description'
          value={pin.description}
          onChange={handleInputChange}>
        </Input>
        <Label></Label>
        <Input
          name='articleLink'
          type='text'
          placeholder='Article Link'
          value={pin.articleLink}
          onChange={handleInputChange}>
        </Input>
        <Label></Label>
        <Input
          type='select'
          name='boardId'
          onChange={handleSelectChange}
        >
          <option hidden value=''>Select a Board</option>
          {boards.length && boards.map((board) => <option
            key={board.id}
            value={board.id}
          >
            {board.title}
          </option>)}
        </Input >
        <Label check className="checkbox mt-4">
          <Input
            name='public'
            type='checkbox'
            value={Boolean}
          />
          Public Pin
        </Label><br />
        <Button className="add-pin-submit-btn mt-4"color='success' size="sm" type='submit'>Submit</Button>
      </Form>
    </div>
  );
}

AddPinForm.propTypes = {
  user: PropTypes.any,
  formTitle: PropTypes.string,
  boardInfo: PropTypes.object,
  boards: PropTypes.array,
  setBoards: PropTypes.func
};

export default AddPinForm;
