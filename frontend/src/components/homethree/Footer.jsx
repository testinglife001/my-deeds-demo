import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-white py-5">
      <div className="container text-center pb-4">
        <h2 className="fw-bold text-dark display-5">Create Your Story Today</h2>
        <p className="mx-auto mt-3 text-muted w-50">
          Join our community of creators and share your unique perspective.
        </p>
        <Link
          to="/create-blog"
          className="btn btn-outline-primary rounded-pill mt-3"
        >
          Get Started
        </Link>
      </div>

      <div className="container mt-5 border-top pt-4 d-flex flex-column flex-sm-row justify-content-between align-items-center">
        <ul className="list-unstyled d-flex flex-wrap gap-3 justify-content-center mb-3 mb-sm-0">
          <li>
            <Link to="/" className="text-muted text-decoration-none">
              Runo
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="text-muted text-decoration-none">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/" className="text-muted text-decoration-none">
              About
            </Link>
          </li>
        </ul>

        <div className="d-flex align-items-center gap-2 text-muted">
          <span>Developed by Hammad</span>
          <a
            href="https://github.com/ChaudaryHammad"
            rel="noreferrer"
            target="_blank"
            className="text-dark text-decoration-none"
          >
            <span className="visually-hidden">GitHub</span>
            <svg
              className="bi bi-github"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.86 2.33.66.07-.52.28-.86.51-1.06-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.58.82-2.14-.08-.2-.36-1.02.08-2.13 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.51.56.82 1.27.82 2.14 0 3.07-1.87 3.74-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
