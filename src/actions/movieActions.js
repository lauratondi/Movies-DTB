import axios from 'axios';
import { SEARCH_MOVIES, SET_LOADING, GET_MOVIE } from './types';

// Search movies
export const searchMovies = (title) => async (dispatch) => {
  setLoading(true);

  const res = await axios.get(
    `http://www.omdbapi.com/?s=${title}&apikey=4bd34599&`
  );

  console.log(res.data);

  dispatch({
    type: SEARCH_MOVIES,
    payload: res.data,
    loading: false,
  });
};

// GET MOVIE
export const getMovie = (title) => async (dispatch) => {
  setLoading();

  const res = await axios.get(
    `http://www.omdbapi.com/?t=${title}&apikey=4bd34599&plot=full`
  );

  dispatch({
    type: GET_MOVIE,
    payload: res.data,
  });
};

// Set Loading
export const setLoading = () => async (dispatch) => ({ type: SET_LOADING });
