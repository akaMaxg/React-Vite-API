import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
          <h2><Link to="/">Home</Link></h2>
          <h2><Link to="/about">About</Link></h2>
          <h2><Link to="/moviesdatabase">Movies search</Link></h2>
    </nav>
  );
}

export default Navigation;