import axios from 'axios';
import { APIKey } from '../APIKey';
import {
  SEARCH_MOVIES,
  SET_LOADING,
  GET_MOVIES,
  GET_MOVIE,
  CLEAR_MOVIES,
} from './types';

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
