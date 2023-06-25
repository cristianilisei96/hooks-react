import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ navigation }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{ marginBottom: "20px" }}
    >
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          React-Hooks
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navigation.map((item) => (
              <li key={item.name} className="nav-item">
                <NavLink
                  to={item.href}
                  className={({ isActive }) => {
                    return "nav-link active" + (isActive ? "" : "active");
                  }}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
