import axios from 'axios';
import { APIKey } from '../APIKey';
import {
  SEARCH_MOVIES,
  SET_LOADING,
  GET_MOVIES,
  GET_MOVIE,
  GET_POPULARITY,
  CLEAR_MOVIES,
} from './types';
// api_key=${API_KEY}

// SEARCH MOVIES
export const searchMovies = (text) => async (dispatch) => {
  dispatch({
    type: SEARCH_MOVIES,
    payload: text,
  });
};

// GET MOVIES
export const getMovies = (text) => async (dispatch) => {
  setLoading(true);

  const res = await axios.get(
    `http://www.omdbapi.com/?s=${text}&apikey=${APIKey}`
  );

  console.log(res.data);

  dispatch({
    type: GET_MOVIES,
    payload: res.data,
    loading: false,
  });
};

// GET MOVIE
export const getMovie = (id) => async (dispatch) => {
  setLoading();

  const res = await axios.get(
    `http://www.omdbapi.com/?i=${id}&apikey=${APIKey}&plot=full`
  );

  dispatch({
    type: GET_MOVIE,
    payload: res.data,
  });
};

// GET MOVIES BY POPULARITY
export const getPopularity = () => async (dispatch) => {
  setLoading();
  const res = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=f099db39d3292a1331aa4316b07e89d3&sort_by=popularity?`
  );

  console.log(res.data);

  dispatch({
    type: GET_POPULARITY,
    payload: res.data,
  });
};
//

// Set Loading
export const setLoading = () => async (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });
};

// CLEAR MOVIES
export const clearMovies = () => async (dispatch) => {
  dispatch({
    type: CLEAR_MOVIES,
  });
};
