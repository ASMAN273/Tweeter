import React from 'react';
import {Button, Grid} from "@material-ui/core";
import useStyles from "../Style";
const Newtweet = () => {
    const classes = useStyles();
    return (
        <div style={{backgroundColor:"white"}} >
            <Grid container >
                <Grid>
                    <img src={"images/user img.png"} style={{width: "max-content", padding:"0.5rem"}} />
                </Grid>
                <textarea className={classes.newtweet} placeholder={"توییت کن ..."}/>
            </Grid>
            <Grid container direction={"row-reverse"}>
                <Button variant={"contained"} color={"primary"} className={classes.buttont}>توییت</Button>
            </Grid>
        </div>

    );
};

export default Newtweet;