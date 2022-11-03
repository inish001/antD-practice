import axios from "axios";
import  { useEffect, useState } from "react";

const UseSearch = (query, pageNumber) => {
    const[loading,setLoading] = useState(true)
    const[error,setError] = useState(false)
    const[data,setData] = useState([])
    const[hasMore,setHasMore] = useState(false)

    useEffect(()=>{
        setData([])
    },[query])
  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel;
    const getBooks = async () => {
      try {
        const res = await axios.get(
          "http://openlibrary.org/search.json?q=the+lord+of+the+rings",
          {
            params: { q: query, page: pageNumber },
            cancelToken: new axios.CancelToken((c)=>cancel =c)
          }
        );
        setData(res.data.docs)
        setHasMore(res.data.docs.length > 0)
        setLoading(false)
        console.log(res?.data);
      } catch (err) {
        if (!axios.isCancel(err)) {
            setError(true)
          console.log(err);
        } else return;
      }
    };
    getBooks();

    return () => cancel();
  }, [query, pageNumber]);
  console.log("/////////////////",data)
  return {loading,error, data, hasMore}
};

export default UseSearch;
