import React from "react";
// import { Link } from "react-router-dom";

const PaginationFunctionality = ({ postsPerPage, totalPosts,handleClk }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <nav>
        <ul className="pagination">
          {pageNumbers &&
            pageNumbers?.map((number) => (
              <li key={number} className="page-item">
               <a onClick={()=>handleClk(number)} href="#" className="page-link">{number} </a>
              </li>
            ))}
        </ul>
      </nav>
    </>
  );
};

export default PaginationFunctionality;
