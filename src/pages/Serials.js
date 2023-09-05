import { Link } from 'react-router-dom';

const serials = () => {
  return (
    <div>
      <h1>Serials</h1>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default serials;
