import React from 'react';
import Leftsidebar from "../leftSidebar/Leftsidebar";
import RightSidebar from "../rightSidebar/RightSidebar";
import useStyles from "./Style";
import {Divider} from "@material-ui/core";
import Home from "../home/Home";
import TweettHashTag from "../tweetHashTag/TweettHashTag";
const Layout = (props) => {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <RightSidebar/>
            <Divider orientation={"vertical"}  className={classes.divider}/>
            <div style={{flex:1,overflowY:"auto"}}>
                {props.children}
            </div>
            <Divider orientation={"vertical"}  className={classes.divider}/>
            <Leftsidebar />

        </div>
    );
};

export default Layout;