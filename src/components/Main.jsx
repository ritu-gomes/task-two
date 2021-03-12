import React from "react";
import QuerySection from "./QuerySection";
import Table from "./Table";
function Main({ tablename }) {
  return (
    <div className="main__ui">
      <QuerySection tablename={tablename} />
      <div className="result__table__section">
        <Table />
      </div>
    </div>
  );
}

export default Main;
