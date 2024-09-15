import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
const useMovieTrailer = ({ movieId }) => {
  // This function is called for fetching the background movie from the API and updating the store
  const dispatch = useDispatch();

  // This for checking if the store have already been updated then don't call API again
  const trailer = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter(
      (video) => video.name === "Official Trailer"
    );
    const trailer = filterData.length > 0 ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
      // This for checking if the store have already been updated then don't call API again
    !trailer && getMovieVideos();
  }, []);
};

export default useMovieTrailer;