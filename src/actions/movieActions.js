import axios from 'axios';
import { APIKey, API_KEY } from '../APIKey';
import {
  SEARCH_MOVIES,
  SET_LOADING,
  GET_MOVIES,
  GET_MOVIE,
  SEARCH_POPULARS,
  GET_POPULARS,
  GET_POPULAR,
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

// SEARCH MOVIES BY POPULARITY
export const searchPopulars = () => async (dispatch) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  );

  console.log(res.data);

  dispatch({
    type: SEARCH_POPULARS,
    payload: res.data,
  });
};

// GET MOVIES BY POPULARITY
export const getPopulars = () => async (dispatch) => {
  setLoading(true);
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  );

  console.log(res.data);

  dispatch({
    type: GET_POPULARS,
    payload: res.data,
    loading: false,
  });
};

// GET MOVIE BY POPULARITY
export const getPopular = (id) => async (dispatch) => {
  setLoading();
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );

  console.log(res.data);

  dispatch({
    type: GET_POPULAR,
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
