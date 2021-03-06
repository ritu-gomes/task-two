import Main from "./components/Main";
import Navbar from "./components/Navbar";
import "./App.css";
import { useState } from "react";
import SideBar from "./components/SideBar";
import React from "react";
function App() {
  const [isSidebar, setSidebar] = useState(false);
  const [tablename, setTablename] = useState("Categories");
  const [isExecuted, setExecuted] = React.useState(false);
  const [dataFile, setDataFile] = useState("categories.csv");
  return (
    <div>
      <Navbar isSidebar={isSidebar} setSidebar={setSidebar} />
      <SideBar
        isSidebar={isSidebar}
        tablename={tablename}
        setTablename={setTablename}
        setExecuted={setExecuted}
        setDataFile={setDataFile}
      />
      <Main
        tablename={tablename}
        setTablename={setTablename}
        isExecuted={isExecuted}
        setExecuted={setExecuted}
        isSidebar={isSidebar}
        setSidebar={setSidebar}
        dataFile={dataFile}
      />
    </div>
  );
}

export default App;
