import { Folder, SubdirectoryArrowRight } from '@material-ui/icons';
import React, { useState } from 'react';
import SideBarRow from './SideBarRow';

const SideBar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className="sidebar">
             <div className="mb-2" onClick={() => setToggle(!toggle)}><SideBarRow selected Icon={Folder} title="Files" /></div>
            {
                toggle && <div>
                    <SideBarRow Icon={SubdirectoryArrowRight} title="categories" />
                    <SideBarRow Icon={SubdirectoryArrowRight} title="customer" />
                    <SideBarRow Icon={SubdirectoryArrowRight} title="empolyee-teri" />
                    <SideBarRow Icon={SubdirectoryArrowRight} title="categories" />
                    <SideBarRow Icon={SubdirectoryArrowRight} title="categories" />
                    <SideBarRow Icon={SubdirectoryArrowRight} title="categories" />
                    <SideBarRow Icon={SubdirectoryArrowRight} title="categories" />
                    <SideBarRow Icon={SubdirectoryArrowRight} title="categories" />
                    <SideBarRow Icon={SubdirectoryArrowRight} title="categories" />
                    <SideBarRow Icon={SubdirectoryArrowRight} title="categories" />
                    <SideBarRow Icon={SubdirectoryArrowRight} title="categories" />
                </div>
            }
        </div>
    );
};

export default SideBar;