import React from "react";

function Option({ title, Icon, tablename, setTablename }) {
  // Change active option by click on option
  const handleOptionChange = (e) => {
    setTablename(e.target.textContent);
  };
  return (
    <div
      className={`sidenav__option ${
        tablename.toUpperCase() === title.toUpperCase() && "option__active"
      }`}
      onClick={handleOptionChange}
    >
      {<Icon />}
      {title}
    </div>
  );
}

export default Option;
