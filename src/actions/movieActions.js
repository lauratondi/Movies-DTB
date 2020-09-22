import axios from 'axios';
import { APIKey, API_KEY } from '../APIKey';
import {
  SET_LOADING,
  GET_MOVIES,
  GET_MOVIE,
  GET_POPULARS,
  GET_DETAIL,
  GET_TOPRATED,
  GET_YEAR,
  GET_TVSHOWS,
  GET_TVLESSP,
  GET_TVNEW,
  GET_TVOLD,
  GET_TVDETAIL,
  CLEAR_MOVIES,
} from './types';

// GET MOVIES
export const getMovies = (text) => async (dispatch) => {
  setLoading(true);

  const res = await axios.get(
    `https://www.omdbapi.com/?s=${text}&apikey=${APIKey}`
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
    `https://www.omdbapi.com/?i=${id}&apikey=${APIKey}&plot=full`
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

// GET MOVIES DISCOVER BY YEAR
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

// GET TV SHOWS BY MOST POPULAR
export const getTvshows = (page) => async (dispatch) => {
  setLoading(true);
  const res = await axios.get(
    `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&page=${page}`
  );

  console.log(res.data);

  dispatch({
    type: GET_TVSHOWS,
    payload: res.data,
    loading: false,
  });
};

// GET TV SHOWS BY LESS POPULAR
export const getTvLessP = (page) => async (dispatch) => {
  setLoading(true);
  const res = await axios.get(
    `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&sort_by=popularity.asc&page=${page}`
  );

  console.log(res.data);

  dispatch({
    type: GET_TVLESSP,
    payload: res.data,
    loading: false,
  });
};

// GET TV SHOWS BY NEWEST
export const getTvNew = (page) => async (dispatch) => {
  setLoading(true);
  const res = await axios.get(
    `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&sort_by=first_air_date.desc&page=${page}`
  );

  console.log(res.data);

  dispatch({
    type: GET_TVNEW,
    payload: res.data,
    loading: false,
  });
};

// GET TV SHOWS BY OLDEST
export const getTvOld = (page) => async (dispatch) => {
  setLoading(true);
  const res = await axios.get(
    `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&sort_by=first_air_date.asc&page=${page}`
  );

  console.log(res.data);

  dispatch({
    type: GET_TVOLD,
    payload: res.data,
    loading: false,
  });
};

// GET TV DETAIL
export const getTvDetail = (tv_id) => async (dispatch) => {
  setLoading();

  const res = await axios.get(
    `https://api.themoviedb.org/3/tv/${tv_id}?api_key=${API_KEY}`
  );

  console.log(res.data);

  dispatch({
    type: GET_TVDETAIL,
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
