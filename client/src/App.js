import "./App.css";
import Chart from "./Chart";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/data", { method: "GET", redirect: "follow" })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>Chart</h1>
      <Chart
        labels={data.length === 0 ? ["pink"] : data[0].labels}
        data1={data.length === 0 ? [0, 0, 0, 0, 0, 0] : data[0].data[0].values}
        data2={data.length === 0 ? [0, 0, 0, 0, 0, 0] : data[0].data[1].values}
      />
      <button onClick={() => window.location.reload()}>Refresh Chart</button>
    </div>
  );
}

export default App;
