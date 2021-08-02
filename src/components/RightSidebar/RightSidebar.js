import React from 'react';
import useStyles from "./Style";
import {ButtonBase, Grid, Typography} from "@material-ui/core";
import {useHistory} from 'react-router-dom';
import {hashTags} from '../../data';
const RightSidebar = (props) => {


    const classes = useStyles();
    let history = useHistory();
    console.log(history)
    const handleurl = (key) => {
    history.push("/hash",key);

    }
    return (
        <div className={classes.right}>
            <Grid container direction={"row"}>
                <Grid item>
                    <img alt={"true"} src={"images/logo.png"}/>
                </Grid>
                <Grid item>
                    <Typography className={classes.logotype}>توییتر فارسی</Typography>
                </Grid>
            </Grid>
            <Typography className={classes.hashtagtitle}> داغ ترین هشتگ ها</Typography>
            <Grid container direction={"column"}>
                {hashTags.map((item,key) =>
                    <ButtonBase onClick={()=>handleurl(key)} className={classes.hashtagbutton}>
                        <Grid container item alignItems={"center"}>
                            <img alt={"true"} src={"images/hashtag.png"}/>
                            <Typography className={classes.hashtag}>
                                {item}
                            </Typography>
                        </Grid>
                    </ButtonBase>
                )}
            </Grid>
        </div>
    );
};

export default RightSidebar;