import { Link } from 'react-router-dom';

const end = () => {
  return (
    <div>
      <h1>Newly added</h1>
      <h2>Series and movies</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        doloribus odit omnis, rem minima optio quasi dolorum nostrum ut quos
        voluptate eos amet debitis fugit! Labore consectetur tempora voluptatem
        non.
      </p>
      <li>
        <Link to={'/'}>Back Home</Link>
      </li>
    </div>
  );
};

export default end;
