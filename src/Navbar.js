import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: 'gold',
          borderRadius: '8px', 
					boxShadow: '1px 2px 2px #f1356d'
        }}>New Blog</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;