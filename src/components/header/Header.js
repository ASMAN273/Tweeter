import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import useStyles from "./Style";
const Header = ({title,icon}) => {
    const classes = useStyles();

    return (
        <Grid container direction={"row"} className={classes.main}>
            {icon}
            <Typography className={classes.title}>{title}</Typography>
        </Grid>
    );
};

export default Header;