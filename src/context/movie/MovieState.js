import React, { useReducer } from 'react';
import axios from 'axios';
import MovieContext from './movieContext';
import MovieReducer from './movieReducer';
import { SEARCH_MOVIES, SET_LOADING, GET_MOVIE } from '../types';

const MovieState = (props) => {
  const initialState = {
    movies: [],
    movie: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(MovieReducer, initialState);

  // Search movies
  const searchMovies = async (title) => {
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
  const getMovie = async (title) => {
    setLoading();

    const res = await axios.get(
      `http://www.omdbapi.com/?t=${title}&apikey=4bd34599&`
    );

    dispatch({
      type: GET_MOVIE,
      payload: res.data.item,
    });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        movie: state.movie,
        loading: state.loading,
        searchMovies,
        getMovie,
        setLoading,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
