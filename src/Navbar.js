  
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create" style={{ 
          color: 'white', 
          backgroundColor: 'gold',
          borderRadius: '8px', 
					boxShadow: '1px 2px 2px #f1356d'
        }}>New Blog</a>
      </div>
    </nav>
  );
}
 
export default Navbar;