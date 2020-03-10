import axios from "axios";
import { setAlert } from "./alert";

import {
  AGENCY_ERROR,
  GET_AGENCY_PROFILE,
  UPLOAD_AGENCY_COVER,
  UPLOAD_AGENCY_GALLERY,
  AGENCY_TOGGLE_ACTIVE,
  CLEAR_AGENCY,
  ACCOUNT_DELETED
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

    history.push("/agencydashboard");
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: AGENCY_ERROR,
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
      type: AGENCY_ERROR,
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

    setTimeout(() => history.push("/agencydashboard"), 5000);
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

    setTimeout(() => history.push("/agencydashboard"), 5000);
  } catch (err) {
    // const errors = err.response.data.errors;
    console.log(err);
    // if (errors) {
    //   errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    // }
  }
};

//Toggle Active hours
export const agencyToggleActive = () => async dispatch => {
  try {
    const res = await axios.put("/api/agency/me/isActive");

    dispatch({
      type: AGENCY_TOGGLE_ACTIVE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AGENCY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete account & profile
export const agencyDeleteAccount = () => async dispatch => {
  if (window.confirm("Are you sure? This can not be undone!")) {
    try {
      await axios.delete("/api/agency");

      dispatch({ type: CLEAR_AGENCY });
      dispatch({ type: ACCOUNT_DELETED });

      dispatch(setAlert("Your account has been permanantly deleted", "danger"));
    } catch (err) {
      dispatch({
        type: AGENCY_ERROR,
        payload: { msg: err.reponse.statusText, status: err.reponse.status }
      });
    }
  }
};

export const typePlan = value => async dispatch => {
  try {
    const res = await axios.post("api/agency/type", value);

    dispatch({
      type: GET_AGENCY_PROFILE,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
  }
};
