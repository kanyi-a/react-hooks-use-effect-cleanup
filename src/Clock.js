import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);
   //RETURNING A CLEANUP FUNCTION
   return function cleanup() {
     clearInterval(timerID);
   }
  },[]);

  return <div>{time.toString()}</div>;
}


export default Clock;
