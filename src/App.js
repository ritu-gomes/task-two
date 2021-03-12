import Main from "./components/Main";
import Navbar from "./components/Navbar";
import "./App.css";
import { useState } from "react";
import SideBar from "./components/SideBar";

function App() {
  const [isSidebar, setSidebar] = useState(false);
  const [tablename, setTablename] = useState("Categories");
  return (
    <div>
      <Navbar isSidebar={isSidebar} setSidebar={setSidebar} />
      <SideBar
        isSidebar={isSidebar}
        tablename={tablename}
        setTablename={setTablename}
      />
      <Main tablename={tablename} />
    </div>
  );
}

export default App;
