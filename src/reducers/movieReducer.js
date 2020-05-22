import {
  SEARCH_MOVIES,
  GET_MOVIES,
  GET_MOVIE,
  SEARCH_POPULARS,
  GET_POPULARS,
  GET_POPULAR,
  SET_LOADING,
  MOVIES_ERROR,
  CLEAR_MOVIES,
} from '../actions/types';

const initialState = {
  text: '',
  movies: {},
  movie: {},
  loading: false,
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
    case GET_POPULARS:
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
    case GET_POPULAR:
      return {
        ...state,
        movie: action.payload,
        loading: false,
      };
    case SEARCH_POPULARS:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case CLEAR_MOVIES:
      return {
        ...state,
        movies: {},
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
