import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    main: {

        padding: "1rem",
        overflowY:"auto"
    },
    newtweet: {
        padding: "1rem",
        flex: 1,
        border: "none",
        "&:focus": {
            outline: "unset"
        }
    },
    buttont: {
        borderRadius: "1rem",
        minHeight: "30px",
        height: "30px",
        fontFamily: "shabnam",
        marginTop: "1rem",
    },
    nametweet: {
        fontFamily: "shabnam",
        paddingLeft: "1rem",
        fontWeight: "500",
        fontSize: "small"

    },
    idtweet: {
        fontSize: "x-small",
        color: "#b6b5b5"
    },
    gridtweet: {
        flex: 1,
        paddingRight: "0.5rem !important",
        paddingTop: "0.5rem"

    },
    listtweet: {
        padding: "1rem",
        fontFamily: "shabnam",
        direction: "rtl"
    },
    divlist:{
        backgroundColor:"#FFF",
        marginTop:"1rem",
        paddingTop:"0.5rem"
    }
});
export default useStyles;