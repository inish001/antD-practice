// import React from 'react'
// import {Button, DatePicker} from "antd"

// function AntD() {
//   return (
//     <div>
//         <DatePicker/>
//         <Button type='primary'>Primary Button</Button>
//     </div>
//   )
// }

// export default AntD

// using and modifying components from Antd
import React, { useState } from "react";
import "antd/dist/antd.css";
import { Alert, DatePicker, message } from "antd";

const AntD = () => {
    let myStyle ={
        color:"red",
        backgroundColor:"black"
    }
  const [date, setDate] = useState(null);
  const handleChange = (value) => {
    message.info(`Selected Date${value ? value.format("YYYY-MM-DD") : "None"}`);
    setDate(value);
  };
  return (
    <div>
      <DatePicker style={myStyle} onChange={handleChange} />
      {/* Selected Date: {date ? date.format("YYYY-MM-DD") : "None"} */}
      <Alert message ="Selected Date" description = {date? date.format("YYYY-MM-DD"):"None"} />
    </div>
  );
};
export default AntD;
