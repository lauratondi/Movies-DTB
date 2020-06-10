import {
  GET_MOVIES,
  GET_MOVIE,
  GET_POPULARS,
  GET_DETAIL,
  SET_LOADING,
  MOVIES_ERROR,
  CLEAR_MOVIES,
  GET_TOPRATED,
  GET_YEAR,
  GET_TVSHOWS,
  GET_TVLESSP,
  GET_TVNEW,
  GET_TVOLD,
  GET_TVDETAIL,
} from '../actions/types';

const initialState = {
  movies: {},
  movie: {},
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
    case GET_POPULARS:
    case GET_TOPRATED:
    case GET_YEAR:
    case GET_TVSHOWS:
    case GET_TVLESSP:
    case GET_TVNEW:
    case GET_TVOLD:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case GET_MOVIE:
    case GET_DETAIL:
    case GET_TVDETAIL:
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
