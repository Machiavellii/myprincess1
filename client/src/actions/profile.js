import axios from 'axios';
import { setAlert } from './alert';

import {
  GET_PROFILES,
  PROFILE_ERROR,
  GET_PROFILE,
  UPDATE_PROFILE
} from './type';

// GET All Profiles
export const getProfiles = () => async dispatch => {
  // dispatch({ type: CLEAR_PROFILE });
  try {
    const res = await axios.get('/api/profile');

    dispatch({
      type: GET_PROFILES,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

// CREATE PROFIL
export const createProfile = (
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    console.log(formData);

    const res = await axios.post('/api/profile', formData, config);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });

    dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));
    // if(!edit){
    //   history.push('/')
    // }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// UPLOAD COVER
export const uploadCover = formFile => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };

    console.log(formFile);

    const res = await axios.post('api/profile/upload-cover', formFile, config);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
