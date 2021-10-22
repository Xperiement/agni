import React from "react";
import { HashLink } from "react-router-hash-link";

export default function NotFound() {
  return (
    <div className="notfound">
      <div className="head">404</div>
      <div className="subHead">The thing you are looking for is not found.</div>
      <div className="cont">
        <HashLink smooth to="/#home">
          Go Home
        </HashLink>
        <HashLink smooth to="/downloads">
          Check Downloads
        </HashLink>
      </div>
    </div>
  );
}
