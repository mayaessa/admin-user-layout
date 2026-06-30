import Navbar from "../components/Navbar";
import ColorButtons from "../components/ColorButtons";
import "../styles/layout.css";

function UserLayout({ bgColor, setBgColor }) {
  return (
    <div
      className="user-layout"
      style={{ backgroundColor: bgColor }}
    >
      <Navbar />

      <section className="hero">

        <div className="hero-content">

          <h1>
            Welcome To
            <span> AlphaBit</span>
          </h1>

          <p>
            Build modern web applications using React.
            Customize your dashboard theme with one click.
          </p>

          <ColorButtons setBgColor={setBgColor} />

        </div>

      </section>

      <section className="info-section">

        <div className="info-card">
          <h2>Fast</h2>
          <p>Optimized React Components.</p>
        </div>

        <div className="info-card">
          <h2>Responsive</h2>
          <p>Works perfectly on Desktop & Mobile.</p>
        </div>

        <div className="info-card">
          <h2>Modern</h2>
          <p>Clean UI with reusable components.</p>
        </div>

      </section>

      <footer className="footer">
        © 2025 AlphaBit - React Task
      </footer>

    </div>
  );
}

export default UserLayout;