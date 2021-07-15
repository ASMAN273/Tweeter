import React from 'react';
import Leftsidebar from "../leftSidebar/Leftsidebar";
import RightSidebar from "../rightSidebar/RightSidebar";
import useStyles from "./Style";
import {Divider} from "@material-ui/core";
import Home from "../home/Home";

const Layout = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <RightSidebar/>
            <Divider orientation={"vertical"}  className={classes.divider}/>
                <Home/>
            <Divider orientation={"vertical"}  className={classes.divider}/>
            <Leftsidebar />

        </div>
    );
};

export default Layout;