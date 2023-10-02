import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <header>
      <nav>
        <NavLink
          to={'/'}
          className={({ isActive }) =>
            isActive ? 'activeLink' : 'nonActiveLink'
          }
        >
          Home
        </NavLink>{' '}
        <br />
        <NavLink
          to={'movies'}
          className={({ isActive }) =>
            isActive ? 'activeLink' : 'nonActiveLink'
          }
        >
          Movies
        </NavLink>{' '}
        <br />
        <NavLink
          to={'serials'}
          className={({ isActive }) =>
            isActive ? 'activeLink' : 'nonActiveLink'
          }
        >
          Serials
        </NavLink>{' '}
        <br />
        <NavLink
          to={'end'}
          className={({ isActive }) =>
            isActive ? 'activeLink' : 'nonActiveLink'
          }
        >
          End
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
