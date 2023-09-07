import { Link, Outlet, Route } from 'react-router-dom';

const mainPage = () => {
  return (
    <section>
      <ul>
        <li>Home page</li>
        <Outlet />
      </ul>
    </section>
  );
};

export default mainPage;
