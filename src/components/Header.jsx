import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
        <nav className="navbar fixed-top p-0 navbar-expand-md navbar-light">
            <div className="container-fluid d-flex justify-content-between align-items-center px-3 py-2 bg-primary">
                <div className="navbar-brand text-white fs-4 pt-0">
                    Discover<span className="text-warning">Angola</span>
                </div>
                <div id="btnIcon" className="">
                    <button className="rounded-1" onClick={handleMenu}>
                        {!isMenuOpen ? (
                            <FaBars className="fas fa-bars text-secondary text-3xl" />
                        ) : (
                            <FaTimes className="fas fa-times text-secondary text-3xl" />
                        )}
                    </button>
                </div>
                <ul id="large" className="">
                    <li>
                        <NavLink to="/"
                            className={({ isActive }) => isActive
                                ? "text-white"
                                : "text-white"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about"
                            className={({ isActive }) => isActive
                                ? "text-white"
                                : "text-white"
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/discovery"
                            className={({ isActive }) => isActive
                                ? "text-white"
                                : "text-white"
                            }
                        >
                            Discovery
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/hotels"
                            className={({ isActive }) => isActive
                                ? "text-white"
                                : "text-white"
                            }
                        >
                            Hotels
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact"
                            className={({ isActive }) => isActive
                                ? "text-white"
                                : "text-white"
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            {isMenuOpen ? (
                <ul id="responsive" className="d-flex flex-column justify-content-start bg-info w-100 fw-bold py-3">
                    <li>
                        <NavLink to="/"
                            className={({ isActive }) => isActive
                                ? "text-warning"
                                : "text-white"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about"
                            className={({ isActive }) => isActive
                                ? "text-warning"
                                : "text-white"
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/discovery"
                            className={({ isActive }) => isActive
                                ? "text-warning"
                                : "text-white"
                            }
                        >
                            Discovery
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/hotels"
                            className={({ isActive }) => isActive
                                ? "text-warning"
                                : "text-white"
                            }
                        >
                            Hotels
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact"
                            className={({ isActive }) => isActive
                                ? "text-warning"
                                : "text-white"
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            ) : null}
        </nav>
    </div>
  )
}

export default Header;