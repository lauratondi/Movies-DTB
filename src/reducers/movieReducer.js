import {
  SEARCH_MOVIES,
  GET_MOVIES,
  GET_MOVIE,
  SET_LOADING,
  MOVIES_ERROR,
} from '../actions/types';

const initialState = {
  text: '',
  movies: [],
  loading: false,
  movie: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        text: action.payload,
        loading: false,
      };
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case MOVIES_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
