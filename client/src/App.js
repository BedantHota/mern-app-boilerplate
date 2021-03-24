import React, { useEffect, useState } from 'react';
import axios from "axios";

function App() {

  const [resData, setResData] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:8080/')
      .then((res) => {
        setResData(res.data);
      });
  });

  return (
    <div className="App">
      <center>
        <img alt="ReactImage" src="https://daviseford.com/blog/public/img/thumbnails/misc/react-logo.png" />
        <h1 style={{ color: "white" }}>{resData}</h1>
      </center>
    </div>
  );
}

export default App;
