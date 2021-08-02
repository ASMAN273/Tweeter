import React from 'react';
import useStyles from "./Style";
import HomeIcon from '@material-ui/icons/Home';
import Newtweet from "./components/Newtweet";
import Header from "../header/Header";
import Tweetlist from "./components/Tweetlist";
import {tweets} from "../../data.js";
const Home = (props) => {

    const classes = useStyles();
    return (
        <div className={classes.main}>
            <Header title={"خانه"} icon={<HomeIcon/>} />
            <Newtweet/>
            {tweets.map(i=>(
                <Tweetlist name={i.name}   text={i.text}   id={i.id} img={i.img}/>)
            )}


        </div>

    );
};

export default Home;