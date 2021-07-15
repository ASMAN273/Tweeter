import React from 'react';
import Leftsidebar from "../LeftSidebar/Leftsidebar";
import RightSidebar from "../RightSidebar/RightSidebar";
import useStyles from "./Style";
import {Divider} from "@material-ui/core";

const Layout = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <RightSidebar/>
            <Divider orientation={"vertical"}  className={classes.divider}/>
            <div className={classes.main}>slam</div>
            <Divider orientation={"vertical"}  className={classes.divider}/>
            <Leftsidebar />

        </div>
    );
};

export default Layout;