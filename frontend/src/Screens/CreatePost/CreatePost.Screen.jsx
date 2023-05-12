import React, { useState } from 'react';
import { UploadImg } from './CreatePost.styled';

function CreatePost() {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <UploadImg onSubmit={handleSubmit}>
      <div>
        <label htmlFor="image">Choose Image:</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>
      <button type="submit">Submit</button>
    </UploadImg>
  );
}

export default CreatePost;
