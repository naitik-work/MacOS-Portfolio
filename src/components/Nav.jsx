import DateTime from "./DateTime";
import "./nav.scss";

const Nav = () => {
  return (
    <nav>
      <div className="left">
        <div className="apple-icon">
          <img src="./navbar-icons/apple.svg" alt="apple-loading..." />
        </div>
        <div className="nav-item">
          <p>Hamza Khan</p>
        </div>
        <div className="nav-item">
          <p>File</p>
        </div>
        <div className="nav-item">
          <p>Window</p>
        </div>
        <div className="nav-item">
          <p>Terminal</p>
        </div>
      </div>

      <div className="right">
        <div className="nav-icon">
          <img src="./navbar-icons/wifi.svg" alt="wifi-loading..." />
        </div>
        <DateTime />
      </div>
    </nav>
  );
};

export default Nav;
