import { Link } from "react-router-dom";

function PageNavbar({ title }) {
  return (
    <nav className="p-0 navbar navbar-expand border-bottom">
      <div className="p-0 container-fluid justify-content-start">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link py-3" aria-label="Back to tasks"><i className="bi bi-arrow-left-circle"></i></Link>
          </li>
        </ul>

        <span className="navbar-brand ms-3 mb-0 h3">{ title }</span>
      </div>
    </nav>
  );
}

export default PageNavbar;