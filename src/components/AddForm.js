import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  Label,
  Input,
} from 'reactstrap';
import { addBoard } from '../helpers/data/boardsData';

function AddForm({ user }) {
  const [data, setData] = useState({
    title: '',
    imageUrl: '',
    description: ''
  });

  const handleInputChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBoard(data, user).then(setData);
  };

  return (
    <div>
      <Form className='form-container'
      autoComplete='off'
      onSubmit={handleSubmit}
      >
        <h2>Add Board</h2>
        <Label>Board Title</Label>
        <Input
          name='title'
          type='text'
          placeholder='Board Title'
          value={data.title}
          onChange={handleInputChange}
        >
        </Input>
        <Label>Image</Label>
        <Input
          name='imageUrl'
          type='image'
          placeholder='Image URL'
          value={data.imageUrl}
          onChange={handleInputChange}
        >
        </Input>
        <Label>Description</Label>
        <Input
          name='description'
          type='textarea'
          placeholder='Board Description'
          value={data.description}
          onChange={handleInputChange}>
        </Input>
        <Button color='success' type='submit'>Submit</Button>
      </Form>
    </div>
  );
}

AddForm.propTypes = {
  user: PropTypes.string
};

export default AddForm;
