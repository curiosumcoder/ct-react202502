import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand bg-light fs-5">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <i className="bi bi-house-door"></i>
          </Link>
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product">
                Product
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
