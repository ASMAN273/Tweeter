import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({

    root: {
        width: "20%",
        backgroundColor: "white !important",
        padding: "1.5rem 1rem !important"
    },
    profile: {
        width: "max-content !important",
        paddingLeft: "0.7rem !important",
        direction: "ltr"
    },
    profname: {
        flex: 1,
        fontFamily: "shabnam !important",
        fontWeight: "600  !important"

    },
    profid: {
        flex: "1 !important",
        color: "#cecbcb !important",
        fontSize: "0.75rem !important"
    },
    tweetertitle:{
        paddingTop:"2rem !important",
        paddingRight:"1rem !important",
        fontWeight:"600 !important",
        fontSize:"larger !important",
        fontFamily:"shabnam !important"
    },
    tweetsub:{
        width: "max-content !important",
        paddingRight: "0.7rem !important",
    },
    tweeter:{
        paddingTop:"0.01rem"

    }


});
export default useStyles;