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
// import { createBoardPin } from '../helpers/data/board_pinsData';

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
  console.warn(boardPinRelationship);

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
      <Form className='pin-form-container'
      autoComplete='off'
      onSubmit={handleSubmit}
      >
        <h2>{formTitle}</h2>
        <Label>Pin Title</Label>
        <Input
          name='title'
          type='text'
          placeholder='Pin Title'
          value={pin.title}
          onChange={handleInputChange}
        >
        </Input>
        <Label>Image</Label>
        <Input
          name='imageUrl'
          type='text'
          placeholder='Image URL'
          value={pin.imageUrl}
          onChange={handleInputChange}
        >
        </Input>
        <Label>Description</Label>
        <Input
          name='description'
          type='textarea'
          placeholder='Pin Description'
          value={pin.description}
          onChange={handleInputChange}>
        </Input>
        <Label>Article Link</Label>
        <Input
          name='articleLink'
          type='text'
          placeholder='Article Link'
          value={pin.articleLink}
          onChange={handleInputChange}>
        </Input>
        <Label>Assign to a Board</Label>
        <Input type='select'
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
        </Input>
        <Label check>
          <Input
            name='public'
            type='checkbox'
            value={Boolean}
          />
          Public Pin
        </Label><br />
        <Button color='success' type='submit'>Submit</Button>
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
