import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {

        color: 'white',
        height: "100vh",
        display:'flex',
        width:"100%",
        overflow:"hidden"

    },
    right:{
        backgroundColor:"white",
        width:"18%",
        padding:"1.5rem 1rem"
    },
    logotype:{
      fontSize:"1.5rem !important",
        marginRight:"1rem !important",
        color:"black  !important",
        fontWeight:"600  !important"
    },
    left:{
        backgroundColor:"white",
        width:"25%"
    },

    main:{
        flex:1,
    },

    hashtagtitle:{
        fontSize:"1.5rem !important",
        marginRight:"1rem !important",
        marginTop:"2rem !important",
        color:"black !important",
        fontWeight:"600 !important",
        marginBlockEnd:"1rem  !important"
    },
    hashtag:{
        fontSize:"1rem !important",
        marginRight:"1rem !important",
        color:"black !important"
    },
    hashtagbutton:{
        marginBottom:"0.5rem !important",
        paddingRight:"0.5rem",
        color:"#043100"
    }



});
export default useStyles;