import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies, addUpComingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
const useUpComingMovies = () => {
  const dispatch = useDispatch();

    // This for checking if the store have already been updated then don't call API again
    const upComingMovies = useSelector((store)=>store.movies.upComingMovies);

  //---- This is the function that fetches the movies from the API and adds them to the appStore ----.
  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
  };

  useEffect(() => {
      // This for checking if the store have already been updated then don't call API again
    !upComingMovies && getUpComingMovies();
  }, []);
  // ---- End Here ----
};

export default useUpComingMovies;