import React from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { Fab } from "@material-ui/core";
function QuerySection({ tablename }) {
  return (
    <div className="querySection">
      <div className="query__section" contentEditable="true">
        <span>SELECT * FROM {tablename}</span>
      </div>
      <div className="querySection__footer">
        <Fab color="primary" aria-label="add">
          <PlayArrowIcon />
        </Fab>
      </div>
    </div>
  );
}

export default QuerySection;
