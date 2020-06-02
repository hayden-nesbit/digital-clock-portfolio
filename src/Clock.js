import React, { useState, useEffect } from 'react';

function Clock() {

  const [date, setDate] = useState(new Date())


  useEffect(() => {
    const interval = setInterval(() => {
      count()
    }, 1000);
    return () => clearInterval(interval)
  }, []);


  function count() {
    setDate(new Date())
  }


  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col-12 text-center mt-5">
        <div className="p-5">
          <h1 className="text-dark display-2"><b>{date.toLocaleTimeString()}</b></h1>
          <h4 className="text-danger"><b>{date.toLocaleDateString()}</b></h4>
        </div>
        </div>
      </div>
    </div>
  );
}


export default Clock;