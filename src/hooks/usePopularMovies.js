import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
const usePopularMovies = () => {
  const dispatch = useDispatch();
  // This for checking if the store have already been updated then don't call API again

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  //---- This is the function that fetches the movies from the API and adds them to the appStore ----.

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    // This for checking if the store have already been updated then don't call API again
    !popularMovies && getPopularMovies();
  }, []);
  // ---- End Here ----
};

export default usePopularMovies;