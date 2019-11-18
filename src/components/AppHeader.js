import React from "react";

const AppHeader = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark default-color">
        <a class="navbar-brand" href="https://visioncollege.ac.nz/">
          <strong>Vision College Dad Jokes</strong>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="https://visioncollege.ac.nz/">
                College Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://visioncollege.ac.nz/study/information-technology/"
              >
                Information Technology Courses
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
