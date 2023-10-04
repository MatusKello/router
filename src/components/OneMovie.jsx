import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import movies from '../data';

const OneMovie = () => {
  const { movieId } = useParams();

  const oneSpecificMovie = movies.find((oneMovie) => {
    return oneMovie.id === parseInt(movieId);
  });

  const { image, title, description, tags, age } = oneSpecificMovie;

  return (
    <div>
      <h2>{title}</h2>
      <p>{age}</p>
      <img src={image} alt='' />
      <p>{description}</p>
      <p>{tags}</p>
      <Link to='/movies'>Back to all movies</Link>
    </div>
  );
};

export default OneMovie;
