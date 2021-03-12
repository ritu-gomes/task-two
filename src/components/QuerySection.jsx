import React from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { Fab } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

function QuerySection({
  tablename,
  isExecuted,
  setExecuted,
  setTablename,
  setFab,
}) {
  const [open, setOpen] = React.useState(false);
  const handleExecStop = () => {
    setExecuted(false);
    setTablename("");
    setFab(false);
  };

  const handleExceStart = () => {
    if (tablename) {
      setExecuted(true);
    } else {
      handleSnackBar();
    }
  };

  const handleSnackBar = () => {
    setOpen(true);
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <div className="querySection">
        <div className="query__section" contentEditable="true">
          <span>SELECT * FROM {tablename}</span>
        </div>
        <div className="querySection__footer">
          <Fab
            color="primary"
            aria-label="add"
            onClick={() => (isExecuted ? handleExecStop() : handleExceStart())}
          >
            {tablename && isExecuted ? <ClearIcon /> : <PlayArrowIcon />}
          </Fab>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Choose one Table Name from SideBar"
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </>
  );
}

export default QuerySection;
