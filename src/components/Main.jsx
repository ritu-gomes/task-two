import React from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { Fab } from "@material-ui/core";
import Table from "./Table";
function Main() {
  return (
    <div className="main__ui">
      <div className="sidenav">
        <div className="query__section" contentEditable="true">
          <span>Enter SQL Query</span>
        </div>
        <div className="sidenav__footer">
          <Fab color="primary" aria-label="add">
            <PlayArrowIcon />
          </Fab>
        </div>
      </div>
      <div className="result__table__section">
        <Table />
      </div>
    </div>
  );
}

export default Main;
