import React from 'react';
import HomeIcon from "@material-ui/icons/Home";
import Header from "../header/Header";
import LabelIcon from '@material-ui/icons/Label';
const TewwtHashTag = () => {
    return (
        <div>
            <Header title={"هشتگ های توییتر"} icon={<LabelIcon/>} />
        </div>
    );
};

export default TewwtHashTag;