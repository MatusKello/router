import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <nav>
        <Link to={'/'}>Home</Link> <br />
        <Link to={'movies'}>Movies</Link> <br />
        <Link to={'serials'}>Serials</Link> <br />
        <Link to={'end'}>End</Link>
      </nav>
    </header>
  );
};

export default NavBar;
