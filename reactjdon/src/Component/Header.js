import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
