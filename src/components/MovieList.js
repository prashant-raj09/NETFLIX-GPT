import MovieCard from "./MovieCard";
import "../MovieList.css";
const MovieList = ({ title, movies }) => {
//   if (!movies) return;
  return (
    <div className="px-6 ">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>  
      <div className="flex overflow-x-auto hide-scrollbar">
        <div className="flex">
          {movies?.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                movieTitle={movie.original_title}
                posterPath={movie.poster_path}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;