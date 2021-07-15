import React, {useState} from 'react';
import useStyles from "./Style";
import {ButtonBase, Divider, Grid, Typography} from "@material-ui/core";

const data = [
    {
        name: "mohammad",
        id: "@Mojeidyan",
        img: "images/samsung.png"
    },
    {
        name: "asman",
        id: "@mohajer",
        img: "images/mike.png"
    },
    {
        name: "test",
        id: "@mojj",
        img: "images/shily.png"
    }
];
const Tweeter = ({name, id, img}) => {

    const classes = useStyles();
    return <ButtonBase style={{width: "100%",color:"#043100"}}>
        <Grid container direction={"row"} className={classes.tweeter}>
            <img src={img} style={{width: 40}}/>
            <Grid container item direction={"column"} className={classes.tweetsub}>
                <Typography className={classes.profname}>{name}</Typography>
                <Typography className={classes.profid}>{id}</Typography>
            </Grid>
        </Grid>
    </ButtonBase>
}

const Leftsidebar = () => {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Grid container direction={"row-reverse"}>
                <img src={"images/user img.png"} style={{width: "max-content"}}/>
                <Grid container item direction={"column"} className={classes.profile}>
                    <Typography className={classes.profname}>محمد مهدی مجدیان</Typography>
                    <Typography className={classes.profid}>Mojediyan</Typography>
                </Grid>
            </Grid>
            <Grid container item>
                <Typography className={classes.tweetertitle}>
                    بهترین خبرنگاران
                </Typography>
            </Grid>
            <Divider style={{margin: "1rem"}}/>
            {data.map((item, index) => <React.Fragment>
                <Tweeter name={item.name} id={item.id} img={item.img}/>
                {index !== data.length - 1 &&
                <Divider style={{margin: "1rem"}}/>
                }
            </React.Fragment>)}

        </div>
    );
};

export default Leftsidebar;