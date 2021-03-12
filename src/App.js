import Main from "./components/Main";
import Navbar from "./components/Navbar";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("./data/categories.csv")
//     .then(res => {
//       setData(res)
//       console.log(res);
//     })
//   },[])
  return (
    <div>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
