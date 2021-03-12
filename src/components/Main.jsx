import React from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { Fab } from "@material-ui/core";
import Table from "./Table";
import SideBar from "./SideBar";

function Main() {
  return (
    <div className="main__ui">
      <div className="row">
        <div className="col-3">
          <SideBar></SideBar>
        </div>
        <div className="col-9">
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
      </div>
    </div>
  );
}

export default Main;
