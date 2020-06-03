import {
  GET_MOVIES,
  GET_MOVIE,
  GET_POPULARS,
  GET_DETAIL,
  SET_LOADING,
  MOVIES_ERROR,
  CLEAR_MOVIES,
  GET_TOPRATED,
  GET_DISCOVERS,
} from '../actions/types';

const initialState = {
  text: '',
  movies: {},
  movie: {},
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
    case GET_POPULARS:
    case GET_TOPRATED:
    case GET_DISCOVERS:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case GET_MOVIE:
    case GET_DETAIL:
      return {
        ...state,
        movie: action.payload,
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
