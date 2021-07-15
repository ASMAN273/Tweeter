import React from 'react';
import useStyles from "./Style";
import HomeIcon from '@material-ui/icons/Home';
import {Grid, Typography} from "@material-ui/core";
const Home = () => {
    const classes = useStyles();
    return (

            <Grid container direction={"row"} className={classes.main}>
                <HomeIcon/>
                <Typography className={classes.title}>خانه</Typography>
            </Grid>
    );
};

export default Home;