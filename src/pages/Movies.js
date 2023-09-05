import { Link } from 'react-router-dom';

const movies = () => {
  return (
    <div>
      <h1>Movies</h1>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default movies;
