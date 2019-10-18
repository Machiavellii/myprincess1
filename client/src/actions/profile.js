import axios from 'axios';
// import { setAlert } from './alert';

import { GET_PROFILES, PROFILE_ERROR, GET_PROFILE } from './type';

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
export const createProfil = () => async dispatch => {
  console.log(123);
};
