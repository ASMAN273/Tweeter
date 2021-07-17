import React from 'react';
import {Button, Grid, Typography} from "@material-ui/core";
import useStyles from "../Style";

const Tweetlist = ({text,name}) => {
    const classes = useStyles();
    return (
        <div className={classes.divlist}>
                <Grid container>
                    <img src={"images/user img.png"} style={{height: "max-content", padding: "0.5rem"}}/>
                    <Grid container item direction={"column"} className={classes.gridtweet}>
                        <Grid container item>
                            <Typography className={classes.nametweet}>{name}</Typography>
                            <Typography className={classes.idtweet}>Mojediyan@</Typography>
                        </Grid>
                        <Grid container direction={"column"}>
                            <Typography className={classes.listtweet}>{text}</Typography>
                        </Grid>
                    </Grid>

                </Grid>
        </div>
    );
};

export default Tweetlist;