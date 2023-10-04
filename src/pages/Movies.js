import movies from '../data';
import { Link } from 'react-router-dom';

const Movies = () => {
  return (
    <div>
      <h1>Movies</h1>
      <div>
        {movies.map((oneMovie) => {
          return (
            <article key={oneMovie.id}>
              <h3>{oneMovie.title}</h3>
              <img src={oneMovie.image} alt='' /> <br />
              <Link to={`/all-movies/${oneMovie.id}`}>More info</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
