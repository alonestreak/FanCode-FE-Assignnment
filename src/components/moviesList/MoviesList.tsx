import MovieCard from "./movieCard/MovieCard";
import './movieList.css'
type movieListPropType = {
  data: Record<string, any>[];
};
const MoviesList = (props: movieListPropType) => {
  const { data } = props;
  return (
    <div>
      <h1 className="movie-list__heading">Best Movies of {data[0].release_date.substring(0, 4)}</h1>
      <div className="movie-list">
        {data?.map((item: Record<string, any>) => {
          return <MovieCard language={item.original_language} title={item.title} posterPath={item.poster_path} releaseDate={item.release_date} overview={item.overview} voteAverage={item.vote_average} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default MoviesList;
