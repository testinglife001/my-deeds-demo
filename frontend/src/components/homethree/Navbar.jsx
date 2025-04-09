import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useLocation } from "react-router-dom";
import { Facebook, Linkedin, Twitter, Youtube, Search } from "react-bootstrap-icons";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { Dropdown, Nav, Navbar, Container } from "react-bootstrap";

// import { backend_url } from "../server.js";
// import SearchComp from "./Search/SearchComp";



function Navbar () {

  //  const { user } = useSelector((state) => state.user);
   const location = useLocation();
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const handleSearchBox = () => setSearchOpen(!searchOpen);
  // const [open, setOpen] = useState(false);

  const handleChange = () => setOpen(!open);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
        <div className="container-fluid px-4 py-3">
          <Link to="/" className="navbar-brand fw-bold text-decoration-underline text-primary">
            RUNO
          </Link>

          <button className="navbar-toggler" type="button" 
                 onClick={handleChange}
                >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${open ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${location.pathname === "/" ? "text-primary" : "text-white"}`}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/blogs"
                  className={`nav-link ${location.pathname === "/create-blog" ? "text-primary" : "text-white"}`}
                >
                   "Write" : "Blogs"
                </Link>
              </li>
              
             
                <li className="nav-item">
                  <Link
                    to="/user-blogs"
                    className={`nav-link ${location.pathname === "/user-blogs" ? "text-primary" : "text-white"}`}
                  >
                    My Articles
                  </Link>
                </li>
              
              
            </ul>

            <div className="d-none d-lg-flex align-items-center gap-3 mx-3">
              <a href="#" className="text-white"><Twitter className="hover-text-primary" /></a>
              <a href="#" className="text-white"><Linkedin className="hover-text-primary" /></a>
              <a href="#" className="text-white"><Facebook className="hover-text-primary" /></a>
              <a href="#" className="text-white"><Youtube className="hover-text-danger" /></a>
            </div>

            {!searchOpen ? (
              <Search className="text-white cursor-pointer d-none d-lg-block mx-3" onClick={handleSearchBox} />
            ) : (
              <Search className="text-primary cursor-pointer d-none d-lg-block mx-3" />
            )}

            
                
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                  <img src="https://github.com/shadcn.png" className="rounded-circle" width="40" height="40" alt="User" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><Link className="dropdown-item" to="/profile">My Account</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><button className="dropdown-item" >Logout</button></li>
                </ul>
              </div>
         
              <Link to="/login">
                <img src="https://github.com/shadcn.png" className="rounded-circle" width="40" height="40" alt="Login" />
              </Link>
            
            
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
