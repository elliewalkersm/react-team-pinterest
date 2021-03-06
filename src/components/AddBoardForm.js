import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  Label,
  Input,
} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { addBoard, updateBoard } from '../helpers/data/boardsData';

function AddBoardForm({
  user, setBoards, formTitle, ...boardInfo
}) {
  const [board, setBoard] = useState({
    title: boardInfo?.title || '',
    imageUrl: boardInfo?.imageUrl || '',
    description: boardInfo?.description || '',
    uid: user.uid,
    id: boardInfo?.id || null
  });

  const history = useHistory();

  const handleInputChange = (e) => {
    setBoard((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (board.id) {
      updateBoard(board, user.uid).then((boardsArray) => {
        setBoards(boardsArray);
        history.push('/boards');
      });
    } else {
      addBoard(board, user.uid).then((response) => {
        setBoards(response);
        history.push('/boards');
      });
    }
  };

  return (
    <div className="board-form-container mt-5">
      <Form
        className='board-input-form'
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <h2>{formTitle}</h2>
        <Label></Label>
        <Input
          name='title'
          type='text'
          placeholder='Board Title'
          value={board.title}
          onChange={handleInputChange}
        >
        </Input>
        <Label></Label>
        <Input
          name='imageUrl'
          type='text'
          placeholder='Image URL'
          value={board.imageUrl}
          onChange={handleInputChange}
        >
        </Input>
        <Label></Label>
        <Input
          name='description'
          type='textarea'
          placeholder='Board Description'
          value={board.description}
          onChange={handleInputChange}>
        </Input>
        <Button className="board-form-submit-btn mt-4" color='success' size="sm" type='submit'>Submit</Button>
      </Form>
    </div>
  );
}

AddBoardForm.propTypes = {
  user: PropTypes.any,
  formTitle: PropTypes.string.isRequired,
  boardInfo: PropTypes.object,
  setBoards: PropTypes.func,
};

export default AddBoardForm;
