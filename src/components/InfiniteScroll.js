import React, { useState } from "react";
import UseSearch from "./UseSearch";
import { useRef, useCallback } from "react";

const InfiniteScroll = () => {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, error, data, hasMore } = UseSearch(query, pageNumber);

  const observer = useRef();
  const lastBookRef = useCallback((node) => {
    console.log("pp", node);
    if(loading) return
    if(observer.current) observer.current.disconnect()

    observer.current = new IntersectionObserver(entries=>{
      console.log(observer.current);
        if(entries[0].isIntersecting && hasMore){
             console.log("Visible", entries)

            setPageNumber(prevPageNumber=> prevPageNumber+1)
        }
    })
    if(node) observer.current.observe(node)
    // console.log(node);
  },[loading,hasMore]);
  const handleChange = (e) => {
    setQuery(e.target.value);
    setPageNumber(1);
  };
  console.log("infinitescroll", data);
  return (
    <>
      <h2 style={{ marginLeft: "34px" }}>Infinite Scrolling</h2>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        className="input"
      />
      {data &&
        data?.map((ele, index) => {
          if (data.length === index + 1) {
            return (
              <div ref={lastBookRef} key={ele.key}>
                <li>{ele.title}</li>
              </div>
            );
          } else {
            return (
              <div key={ele.key}>
                <li>{ele.title}</li>
              </div>
            );
          }
        })}
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error "}</div>
    </>
  );
};

export default InfiniteScroll;
