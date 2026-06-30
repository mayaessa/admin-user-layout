import { Link } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaCog,
  FaPalette,
  FaTimes
} from "react-icons/fa";

import "../styles/sidebar.css";

function Sidebar({ open, setOpen }) {
  return (
    <aside className={open ? "sidebar active" : "sidebar"}>
    
    <button
           className="close-btn"
            onClick={() => setOpen(false)}
        >
    <FaTimes />
    </button>

      <div className="sidebar-logo">
        <h2>AlphaBit</h2>
      </div>

      <ul className="sidebar-menu">

        <li>
          <FaHome />
          <span>Dashboard</span>
        </li>

        <li>
          <FaUsers />
          <span>Users</span>
        </li>

        <li>
          <FaCog />
          <span>Settings</span>
        </li>

        <li>
          <FaPalette />
          <span>Themes</span>
        </li>

      </ul>

      <div className="sidebar-footer">
        <Link to="/">
          User Page
        </Link>
      </div>

    </aside>
  );
}

export default Sidebar;