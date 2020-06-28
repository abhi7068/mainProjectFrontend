/* eslint-disable handle-callback-err */
import React, { useState } from 'react';
import { storage } from '../firebase/index';
import PropTypes from 'prop-types';
import Snackbar from '../atoms/SnackBar';
import { withRouter } from 'react-router-dom';
function ImageUpload(props) {
  const [image, setImage] = useState(null);
  const [msg, setMsg] = useState('');
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on('state_changed', () => {
      storage
        .ref('images')
        .child(image.name)
        .getDownloadURL()

        .then((url) => {
          const urlJson = {
            urlLink: url,
          };
          props.changeUrl(urlJson);
          props.history.push('/profile');
        })
        .catch((error) => {
          setMsg('error');
          setTimeout(() => {
            setMsg('');
          }, 1000);
        });
    });
  };
  return (
    <div>
      {msg === 'error' ? (
        <Snackbar
          severity="warning"
          name="cors policy error, Image cannot be uploaded"
        />
      ) : (
        ''
      )}
      <input
        type="file"
        name="Edit"
        onChange={handleChange}
        data-testid="avatar"
      />
      <button data-testid="upload" onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
}
ImageUpload.propTypes = {
  changeUrl: PropTypes.func,
  history: PropTypes.object,
};
export default withRouter(ImageUpload);
