import axios from 'axios';
import { APIKey, API_KEY } from '../APIKey';
import {
  SET_LOADING,
  GET_MOVIES,
  GET_MOVIE,
  GET_POPULARS,
  GET_DETAIL,
  GET_TOPRATED,
  GET_DISCOVERS,
  GET_YEAR,
  CLEAR_MOVIES,
} from './types';

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

  console.log(res.data);

  dispatch({
    type: GET_MOVIE,
    payload: res.data,
  });
};

// GET MOVIES BY POPULARITY
export const getPopulars = (page) => async (dispatch) => {
  setLoading(true);
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`
  );

  console.log(res.data);

  dispatch({
    type: GET_POPULARS,
    payload: res.data,
    loading: false,
  });
};

// GET SINGLE MOVIE
export const getDetail = (id) => async (dispatch) => {
  setLoading();
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );

  console.log(res.data);

  dispatch({
    type: GET_DETAIL,
    payload: res.data,
  });
};

// GET MOVIES BY TOP-RATED
export const getTopRated = (page) => async (dispatch) => {
  setLoading(true);
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=${page}`
  );

  console.log(res.data);

  dispatch({
    type: GET_TOPRATED,
    payload: res.data,
    loading: false,
  });
};

// GET MOVIES BY DISCOVER
export const getDiscovers = (page) => async (dispatch) => {
  setLoading(true);
  const res = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`
  );

  console.log(res.data);

  dispatch({
    type: GET_DISCOVERS,
    payload: res.data,
    loading: false,
  });
};

// GET MOVIES BY DISCOVER per YEAR
export const getYear = (year, page) => async (dispatch) => {
  setLoading(true);
  const res = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&primary_release_year=${year}&page=${page}`
  );

  console.log(res.data);

  dispatch({
    type: GET_YEAR,
    payload: res.data,
    loading: false,
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
