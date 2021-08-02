import React from 'react';
import HomeIcon from "@material-ui/icons/Home";
import Header from "../header/Header";
import LabelIcon from '@material-ui/icons/Label';
import {Link} from "react-router-dom";
const TweettHashTag = ({item,props}) => {
    return (
        <div>
            <Header title={"هشتگ های توییتر"} icon={<LabelIcon/>} />
            <p>{item}</p>

            <Link to={"/"}>بازگشت به خانه</Link>
        </div>
    );
};

export default TweettHashTag;