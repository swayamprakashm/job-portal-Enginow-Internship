import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="nav-logo">
        JobPortal
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/saved">Saved</Link>
      </div>

    </nav>
  );
}

export default Navbar;