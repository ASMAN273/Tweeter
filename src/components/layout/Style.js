import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {


        height: "100vh",
        display:'flex',
        width:"100%",
        overflow:"hidden"

    },

    main:{
        flex:1,
    },
    divider:{
        height:'100%',
        width:1,
        backgroundColor:'#3d3de8'
    },

});
export default useStyles;