import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import "../styles/navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="navbar">

      <div className="nav-logo">

        <h2>AlphaBit</h2>

      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
           <button
                  className="close-nav"
                   onClick={() => setMenuOpen(false)}
               >
             <FaTimes />
            </button>
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#">About</a>
        </li>

        <li>
          <a href="#">Services</a>
        </li>

        <li>
          <Link to="/admin">
            Admin
          </Link>
        </li>

      </ul>

      <button className="admin-btn">

        <Link to="/admin">

          Dashboard

        </Link>

      </button>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >

        {menuOpen ? <FaTimes /> : <FaBars />}

      </div>

    </nav>

  );

}

export default Navbar;