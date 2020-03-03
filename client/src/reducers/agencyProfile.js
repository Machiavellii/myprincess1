import {
  GET_AGENCY_PROFILE,
  UPLOAD_AGENCY_COVER,
  UPLOAD_AGENCY_GALLERY
} from '../actions/type';

const initialState = {
  agency: null,
  agencies: [],
  loading: true,
  error: {},
  agencyFilter: [],
  searchPage: [],
  block: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_AGENCY_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    case UPLOAD_AGENCY_COVER:
      return {
        ...state,
        agency: {
          ...state.agency,
          cover_photo: payload
        },
        loading: false
      };
    case UPLOAD_AGENCY_GALLERY:
      return {
        ...state,
        agency: {
          ...state.agency,
          photos: [payload]
        },
        loading: false
      };
    default:
      return state;
  }
}
