import * as React from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Card } from "antd";

function CharacterDetails() {
  const { characterId } = useParams();

  const [data, setData] = React.useState([]);
  const getData = async () => {
    try {
      const res = await axios.get(
        `https://rickandmortyapi.com/api/character/${characterId}`
      );
      // console.log(res);
      // console.log(res.data.name);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  React.useEffect(() => {
    getData();
  }, []);

  // console.log(data);
  // console.log("-----------------status",data.status)
  // if(data.status==="Alive"){
  //   console.log("Alive")
  // }else if(data.status === "Dead"){
  //   console.log("Dead")
  // }else if(data.status==="unknown"){
  //   console.log("Unknown")
  // }
  return (
    <div>
      {data.length === 0 ? 
      <p>Loading...</p>:
      (<div>
        <Card
      hoverable
      style={{ width: 240,
      margin:"20px 0px 0px 10px"
      }}
      cover={<img alt="example" src={data.image}/>}
    >
      <Card.Meta title={data.name} description={data.status} />
    </Card> 
        </div>
      ) 
     
    }
    </div>
  );
}

export default CharacterDetails;
