import React, { Fragment, useEffect, useState } from "react";
import { Button, Card } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const res = await axios.get("https://rickandmortyapi.com/api/character");
      console.log(res);
      setData(res.data.results);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  //   console.log(data);


  // const handleClk = id =>{

  //   console.log(id);
  //   const filterData = data?.filter(e=> e.id === id )
  //   console.log(filterData[0]?.status);

  // }

  // console.log("-------------------",data[2]?.status)
  const statusClass = (character) => {
    if (character === "Alive") {
      console.log("if",character)
      return "alive";
    } else if (character === "Dead") {
      return "dead";
    }else if(character==="unknown"){
      return "unknown"
    }
  };
  return (
    <>
      <h1 className="title">The Rick And Morty Api</h1>
      <div className="container">
        {data &&
          data?.map((character) => (
            <Fragment key={character.id}>
              <Card
                hoverable
                style={{
                  width: 300,
                  padding: 10,
                  margin: "20px 0px 0px 10px",
                }}
                cover={<img alt="example" src={character.image} />}
              >
                <Link to={`/home/${character.id}`}>
                  <Card.Meta
                    title={character.name}
                    description={character.status}
                    className={statusClass(character.status)}
                  />
                </Link>
              </Card>{" "}
            </Fragment>
          ))}
        <Button type="primary" className="btn">
          Next
        </Button>
        <Button type="primary" className="btn">
          Previous
        </Button>
      </div>
    </>
  );
}

export default Home;
