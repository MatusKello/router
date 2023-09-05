import { Link } from 'react-router-dom';

const mainPage = () => {
  return (
    <section>
      <h1>Home page</h1>
      <ul>
        <li>
          <Link to={'/Movies'}>Movies</Link>
        </li>
        <li>
          <Link to={'Serials'}>Serial</Link>
        </li>
        <li>
          <Link to={'end'}>End</Link>
        </li>
      </ul>
    </section>
  );
};

export default mainPage;
