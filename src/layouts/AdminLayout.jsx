import Sidebar from "../components/Sidebar";
import ColorButtons from "../components/ColorButtons";
import "../styles/layout.css";
import { useState } from "react";

function AdminLayout({ bgColor, setBgColor }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="admin-layout">
       <button
            className="menu-btn"
             onClick={() => setOpen(!open)}
         >
          ☰
        </button>

        <Sidebar open={open} setOpen={setOpen} /> 

      <main
        className="admin-content"
        style={{ backgroundColor: bgColor }}
      >

        <div className="dashboard-header">

          <h1>Dashboard</h1>

          <p>Welcome Back 👋</p>

        </div>

        <div className="cards">

          <div className="card">
            <h3>Total Users</h3>
            <h2>120</h2>
          </div>

          <div className="card">
            <h3>Projects</h3>
            <h2>24</h2>
          </div>

          <div className="card">
            <h3>Revenue</h3>
            <h2>$12K</h2>
          </div>

          <div className="card">
            <h3>Messages</h3>
            <h2>85</h2>
          </div>

        </div>

        <div className="theme-box">

          <h2>Theme Settings</h2>

          <p>Select your preferred dashboard color.</p>

          <ColorButtons setBgColor={setBgColor} />

        </div>

      </main>

    </div>
  );
}

export default AdminLayout;