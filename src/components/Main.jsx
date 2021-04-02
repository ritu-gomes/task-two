import React from "react";
import QuerySection from "./QuerySection";
import Table from "./Table";
import empty from "../empty.svg";
import { Fab } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";


function Main({
  tablename,
  setTablename,
  isExecuted,
  setExecuted,
  isSidebar,
  setSidebar,
  dataFile,
}) {
  /*Initial State for Edit Fab Button */
  const [isFab, setFab] = React.useState(false);

  /*Handler to Close the Sidebar if we click on Main UI if the sidebar is in active state */

  const handleSidebar = () => {
    if (isSidebar) {
      setSidebar(false);
    }
  };

  /* Change page title dynamically based on tablename selected */
  document.title = tablename ? tablename.toUpperCase() : "Live SQL";
  return (
    <div
      className={`main__ui ${!isExecuted && "centered__ui"} ${!isFab && "centered__ui__extended"
        }`}
      onClick={handleSidebar}
    >
      {isFab && (
        <QuerySection
          tablename={tablename}
          isExecuted={isExecuted}
          setExecuted={setExecuted}
          setTablename={setTablename}
          setFab={setFab}
        />
      )}
      <div className="result__table__section">
        <>
          {isExecuted ? (
            <Table dataFile={dataFile} />
          ) : (
            <img src={empty} alt="Blank__Result" className="blank__query" />
          )}
        </>
      </div>
      {/*Edit FAB Button by clicking this the Query Input Enabled */}
      {!isExecuted && (
        <div className="edit__fab">
          <Fab
            color="primary"
            onClick={() => (isFab ? setFab(false) : setFab(true))}
          >
            {!isFab ? <AddIcon /> : <CloseIcon />}
          </Fab>
        </div>
      )}
    </div>
  );
}

export default Main;
