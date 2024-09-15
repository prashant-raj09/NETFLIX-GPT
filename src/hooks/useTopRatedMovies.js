import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  // This for checking if the store have already been updated then don't call API again

  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  //---- This is the function that fetches the movies from the API and adds them to the appStore ----.
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    // This for checking if the store have already been updated then don't call API again
    !topRatedMovies && getTopRatedMovies();
  }, []);
  // ---- End Here ----
};

export default useTopRatedMovies;