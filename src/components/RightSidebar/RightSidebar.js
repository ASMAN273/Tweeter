import React from 'react';
import useStyles from "./Style";
import {ButtonBase, Grid, Typography} from "@material-ui/core";

const RightSidebar = () => {
    const data = ["پرچم_دار_جدید", "کرونا_ویروس", "روحانی", "انتخابات_رئیسی"];
    const classes = useStyles();
    return (
        <div className={classes.right}>
            <Grid container direction={"row"}>
                <Grid item>
                    <img src={"images/logo.png"}/>
                </Grid>
                <Grid item>
                    <Typography className={classes.logotype}>توییتر فارسی</Typography>
                </Grid>
            </Grid>
            <Typography className={classes.hashtagtitle}> داغ ترین هشتگ ها</Typography>
            <Grid container direction={"column"}>
                {data.map(item =>
                    <ButtonBase className={classes.hashtagbutton}>
                    <Grid container item alignItems={"center"}>
                            <img src={"images/hashtag.png"}/>
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