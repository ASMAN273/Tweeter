import React from 'react';
import useStyles from "./Style";
import HomeIcon from '@material-ui/icons/Home';
import {Grid, Typography} from "@material-ui/core";
import Newtweet from "./components/Newtweet";
import Header from "../header/Header";
import Tweetlist from "./components/Tweetlist";
import {tweets} from "../../data.js";
const Home = () => {
    console.log(tweets.map((item,key)=> key))
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <Header title={"خانه"} icon={<HomeIcon/>} />
            <Newtweet/>
            {tweets.map(sender=>  <Tweetlist name={sender.name}   text={sender.text}   id={sender.id}/>)}




        </div>

    );
};

export default Home;