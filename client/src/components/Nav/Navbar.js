import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
    <ul className="nav justify-content-center">
        <li className="nav-item">
            <Link
                to="/"
                className={
                    window.location.pathname === "/" ? "nav-link disabled" : "nav-link"
                }
            >
                Home
            </Link>
        </li>
        <li className="nav-item">
            <Link
                to="/saved"
                className={
                    window.location.pathname === "/saved" ? "nav-link disabled" : "nav-link"
                }
            >
                Saved
            </Link>
        </li>
    </ul>
);

export default Header;
