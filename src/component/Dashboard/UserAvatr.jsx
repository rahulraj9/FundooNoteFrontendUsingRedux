import React from 'react'
// import  from "@material-ui/core/IconButton";
import Avatar from '@material-ui/core/Avatar';
import { Button, Paper,IconButton ,Menu,ListItem} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from '@material-ui/core/colors';

// import  from "@material-ui/core/ListItem";
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({

    root: {
        display: "flex",
    },
    large: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
        width: theme.spacing(11),
        height: theme.spacing(11),
    },
    settingMenu: {
        marginTop: theme.spacing(6),

    },
}));

function UserAvatr(props) {
    const history  =  new useHistory()
    const classes = useStyles();
    const [anchor, setAnchor] = React.useState(null);
    const profileHandleOpen = (event) => {
        setAnchor(event.currentTarget);
    };

    const profileHandleClose = () => {
        setAnchor(null);
    };

   
    const logOut = () => {
        localStorage.removeItem("fundooUsertoken")
        localStorage.removeItem("fundooUserFName")
        localStorage.removeItem("fundooUserLName")
        localStorage.removeItem("fundooUserEmail")
        localStorage.removeItem("fundooUsertoken")
        history.push('../login');
    };
    return (
        <div className="buttonContainer">
            <IconButton className={classes.appBarButton} onClick={profileHandleOpen} edge="start">
                <Avatar></Avatar>
            </IconButton>
            <div className="ProfilePaper">
                <div className="ProfilePaperContainer">
                    <Paper>
                        <Menu
                            className={classes.settingMenu}
                            anchorEl={anchor}
                            open={Boolean(anchor)}
                            onClose={profileHandleClose}
                        >
                            <div className="ProfileHandler">
                                <div className="ProfileHandlerAvatar"> <Avatar className={classes.large}></Avatar></div>

                                <div className="ProfileHandler">
                                    <ListItem >
                                        {props.userDeatils.data.data.firstName}
                                        {props.userDeatils.data.data.lastName}
                                    </ListItem>
                                </div>
                                <ListItem>
                                {props.userDeatils.data.data.email}
                                </ListItem>
                                <div className="ProfileHandlerLogOut">
                                    <Button variant="outlined" onClick={logOut}>LogOut</Button>
                                </div>
                            </div>
                        </Menu>
                    </Paper>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps=(state)=>{
    console.log('state',state);
    return{
       userDeatils:state.loginDetails.userDetails
    }
}
export default connect(mapStateToProps)(UserAvatr)