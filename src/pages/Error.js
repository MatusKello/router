import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <h2>404</h2>
      <p>Page not found</p>
      <ul>
        <li>
          <Link to={'/'}>Main page</Link>
        </li>
      </ul>
    </div>
  );
};

export default Error;
