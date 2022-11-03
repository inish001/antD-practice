import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
import PaginationFunctionality from "./PaginationFunctionality";
import Posts from "./Posts";

const Pagination = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);
  console.log(posts);

  // get Current posts

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // changing page number

  const handleClk = (number) => {
    setCurrentPage(number);
  };
  return (
    <>
      <h2 className="my-3">Pagination </h2>
      <div className="my-3">
        <Posts posts={currentPosts} loading={loading} />
        <PaginationFunctionality
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          handleClk={handleClk}
        />
      </div>
    </>
  );
};

export default Pagination;
