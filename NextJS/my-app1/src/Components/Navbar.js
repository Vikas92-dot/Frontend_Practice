import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light 
            bg-primary  bg-opacity-75 text-light">
                <div className="container">
                    <div className="collapse navbar-collapse"
                     id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link
                                    href="/"
                                    className="nav-item nav-link text-light"
                                    style={{ fontSize: "30px" }}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href="/about"
                                    className="nav-item nav-link text-light"
                                    style={{ fontSize: "30px" }}
                                >
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href="/contact"
                                    className="nav-item nav-link text-light"
                                    style={{ fontSize: "30px" }}
                                >
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href="services"
                                    className="nav-item nav-link text-light"
                                    style={{ fontSize: "30px" }}
                                >
                                    Sevices
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;