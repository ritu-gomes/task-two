import React from 'react';

const SideBarRow = ({selected,Icon,title}) => {
    return (
        <div className={`sidebarRow ${selected && "selected"}`}>
            <Icon className="sidebarRow__icon"/>
            <h3 className="sidebarRow__title">{title}</h3>
        </div>
    );
};

export default SideBarRow;