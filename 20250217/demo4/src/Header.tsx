import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  // Redux/Redux Toolkit
  // Read from state on global store
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { items } = useSelector((store: any) => store.cart);

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
                Products
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav me-end">
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">
                <i className="bi bi-cart3"></i>
                <span className="badge rounded-pill bg-primary">
                  {items.length}
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;