import React from "react";

export default function NavBar() {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark px-3 ">
          <div className="container-fluid">
            <a className="navbar-brand text-white fw-bold" href="/">
              HeadLines 24
            </a>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/business">
                    Business
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/entertainment">
                    Entertainment
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/general">
                    General
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/health">
                    Health
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/science">
                    Science
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/sports">
                    Sports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/technology">
                    Technology
                  </a>
                </li>
              </ul>
              {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-success text-white" type="submit">Search</button>
              </form> */}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
