import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  Label,
  Input,
} from 'reactstrap';
import { addPin } from '../helpers/data/pinsData';

function AddPinForm({ user, formTitle, ...pinInfo }) {
  const [pin, setPin] = useState({
    title: pinInfo?.title || '',
    imageUrl: pinInfo?.imageUrl || '',
    description: pinInfo?.description || '',
    articleLink: pinInfo?.articleLink || '',
    uid: user.uid,
    id: pinInfo?.id || null
  });

  const handleInputChange = (e) => {
    setPin((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPin(pin, user).then(setPin);
  };

  return (
    <div>
      <div id='react-search'></div>
      <Form className='board-form-container'
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
          placeholder='Board Description'
          value={pin.description}
          onChange={handleInputChange}>
        </Input>
        <Label>Article Link</Label>
        <Input
          name='articleLink'
          type='textarea'
          placeholder='Article Link'
          value={pin.articleLink}
          onChange={handleInputChange}>
        </Input>
        <Button color='success' type='submit'>Submit</Button>
      </Form>
    </div>
  );
}

AddPinForm.propTypes = {
  user: PropTypes.any,
  formTitle: PropTypes.string,
  boardInfo: PropTypes.object
};

export default AddPinForm;
