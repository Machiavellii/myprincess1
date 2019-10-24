import {
  GET_PROFILES,
  PROFILE_ERROR,
  GET_PROFILE,
  UPDATE_PROFILE,
  FILTER_PROFILE,
  SEARCHPAGE_FILTER
} from '../actions/type';

const initialState = {
  profile: null,
  profiles: [],
  loading: true,
  error: {},
  profileFilter: [],
  searchPage: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false
      };

    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case FILTER_PROFILE:
      return {
        ...state,
        profileFilter: state.profiles.filter(profile => {
          if (
            profile.user.nickname.toLowerCase().includes(payload) ||
            profile.canton.toLowerCase().includes(payload)
          ) {
            return profile;
          }
        }),
        loading: false
      };
    case SEARCHPAGE_FILTER:
      return {
        ...state,
        searchPage: state.profiles.filter(profile => {
          const service = profile.services.map(service => {
            return service.toLowerCase();
          });

          if (
            profile.canton.toLowerCase().includes(payload.canton.toLowerCase())
          ) {
            return profile;
          } else if (
            profile.canton.toLowerCase().includes(payload) &&
            profile.category
              .toLowerCase()
              .includes(payload.category.toLowerCase())
          ) {
            return profile;
          } else if (
            profile.canton.toLowerCase().includes(payload) &&
            profile.category.toLowerCase().includes(payload) &&
            service.includes(payload.services.toLowerCase())
          ) {
            return profile;
          }
        })
      };

    default:
      return state;
  }
}
