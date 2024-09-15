import { API_OPTIONS } from "../utils/constants";
import { useDispatch,useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  //---- This is the function that fetches the movies from the API and adds them to the appStore ----.

   // This for checking if the store have already been updated then don't call API again
   const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    // This for checking if the store have already been updated then don't call API again
     !nowPlayingMovies && getNowPlayingMovies();
  }, []);
  // ---- End Here ----
};

export default useNowPlayingMovies;