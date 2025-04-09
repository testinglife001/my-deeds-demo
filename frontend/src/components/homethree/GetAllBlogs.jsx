import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { getBlog } from "../App/feature/blog/blogSlice.js";
// import { backend_url } from "../server.js";

function GetAllBlogs() {
 

  



  return (
    <div className="container py-4">
      {/* Blog List */}

          <div

            className={`d-flex gap-3 px-4 py-4 align-items-start hover-bg-light `}
          >
            {/* Author Section */}
            <div className="flex-grow-1">
              <div className="d-flex align-items-center gap-2 mb-1">
                <img
                  src=""
                  alt="blog"
                  className="rounded-circle"
                  style={{ width: "32px", height: "32px" }}
                />
                <div className="text-muted small">
                  Authorized by Mr. blog creator username
                </div>
              </div>

              <Link to="/" className="text-decoration-none">
                <h2 className="h5 text-dark fw-bold mb-1">blog title</h2>
              </Link>

              <p className="text-muted mb-2">
                blog description
              </p>

              {/* Meta */}
              <div className="text-muted small d-flex align-items-center gap-2">
                <span> blog createdAt split</span>
                <span>•</span>
                <span> blog views views</span>
                <span>•</span>
                <span>blog comments || 0 comments</span>
              </div>
            </div>

            {/* Thumbnail */}
            <div className="d-none d-lg-block" style={{ height: "100%" }}>
              <img
                src=""
                alt="blog"
                className="rounded"
                style={{
                  width: "300px",
                  height: "130px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        
        <div>No blogs available.</div>
      

      {/* Pagination Controls */}
      <div className="d-flex justify-content-center mt-4">
        <nav>
          <ul className="pagination mb-0">
            <li >
              <button className="page-link" 
                //onClick={handlePreviousPage}
                >
                Previous
              </button>
            </li>
            <li className="page-item disabled">
              <span className="page-link">
                currentPage of totalPages
              </span>
            </li>
            <li >
              <button className="page-link" 
                // onClick={handleNextPage}
                >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default GetAllBlogs;
