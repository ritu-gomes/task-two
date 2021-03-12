import React from "react";
import QuerySection from "./QuerySection";
import Table from "./Table";
function Main({ tablename, setTablename, isExecuted, setExecuted }) {
  return (
    <div className="main__ui">
      <QuerySection
        tablename={tablename}
        isExecuted={isExecuted}
        setExecuted={setExecuted}
        setTablename={setTablename}
      />
      <div className="result__table__section">
        <>{isExecuted ? <Table /> : null}</>
      </div>
    </div>
  );
}

export default Main;
