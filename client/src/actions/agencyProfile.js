import axios from "axios";
import { setAlert } from "./alert";

import { createBrowserHistory } from "history";

import {
  PROFILE_ERROR,
  GET_AGENCY_PROFILE,
  UPLOAD_AGENCY_COVER,
  UPLOAD_AGENCY_GALLERY
} from "./type";

// CREATE AGENCY PROFIL
export const createAgencyProfile = (
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const res = await axios.post("/api/agency", formData, config);

    dispatch({
      type: GET_AGENCY_PROFILE,
      payload: res.data
    });

    dispatch(setAlert(edit ? "Profile Updated" : "Profile Created", "success"));

    history.push("/dashboard");
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Get Current User
export const getCurrentAgency = () => async dispatch => {
  try {
    const res = await axios.get("/api/agency/myAgency");

    dispatch({
      type: GET_AGENCY_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// UPLOAD COVER

export const uploadAgencyCover = (
  formFile,
  history,
  setUploadPercentage
) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress: progressEvent => {
        setUploadPercentage(
          parseInt(
            Math.round((progressEvent.loaded * 100) / progressEvent.total)
          )
        );

        //Clear Progress bar
        setTimeout(() => setUploadPercentage(0), 4000);
      }
    };

    const res = await axios.post("api/agency/upload-cover", formFile, config);

    dispatch({
      type: UPLOAD_AGENCY_COVER,
      payload: res.data
    });

    dispatch(setAlert("Profile Photo Added", "success"));

    setTimeout(() => history.push("/dashboard"), 5000);
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
  }
};

export const uploadAgencyGallery = (
  formFile,
  history,
  setUploadPercentage
) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress: progressEvent => {
        setUploadPercentage(
          parseInt(
            Math.round((progressEvent.loaded * 100) / progressEvent.total)
          )
        );

        //Clear Progress bar
        setTimeout(() => setUploadPercentage(0), 4000);
      }
    };

    const res = await axios.post("api/agency/upload-gallery", formFile, config);

    dispatch({
      type: UPLOAD_AGENCY_GALLERY,
      payload: res.data
    });

    setTimeout(() => history.push("/dashboard"), 5000);
  } catch (err) {
    // const errors = err.response.data.errors;
    console.log(err);
    // if (errors) {
    //   errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    // }
  }
};
