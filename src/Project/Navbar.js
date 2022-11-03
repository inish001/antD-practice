import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../components/auth";
import "./project.css";
const Navbar = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      padding: (12, 12),
      marging: (12, 12),
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  const contextAuth = useContext(AuthContext);
  return (
    <nav
      style={{
        backgroundColor: "black",
        color: "#fff",
        padding: (32, 32),
        fontSize: "34px",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <NavLink style={navLinkStyle} to="/home">
        Home
      </NavLink>{" "}
      <NavLink style={navLinkStyle} to="/users">
        Users
      </NavLink>{" "}
      <NavLink style={navLinkStyle} to="/characters">
        Characters
      </NavLink>
      <NavLink style={navLinkStyle} to="/pagination">
        Pagination
      </NavLink>
      <NavLink style={navLinkStyle} to="/infintescrolling">
        Infinite Scrolling
      </NavLink>
      <NavLink style={navLinkStyle} to="/profile">
        Profile
      </NavLink>
      {!contextAuth.user && (
        <NavLink style={navLinkStyle} to="/login">
          Login
        </NavLink>
      )}
    </nav>
  );
};
export default Navbar;
