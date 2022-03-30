import './Dashboard.css'
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import icon from "../Assets/keepIcon.png"
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { deepPurple } from '@material-ui/core/colors';

import GetNote from '../Notes/GetNote';
import Notes from '../Notes/Notes';
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";


import React from 'react';
import UserAvtar from './UserAvatr';
import AddNotes from '../Notes/AddNotes';




const useStyles = makeStyles((theme) => ({

    root: {
        display: "flex",
    },
    appBar: {
        backgroundColor: "#ffff",
        borderBottom: "lightgray solid 1px",
        boxShadow: "none",
    },
    topBar: {
        backgroundColor: "#ffff",
        display: "flex",
        justifyContent: "space-between",
    },
    hide: {
        display: "none",
    },

    appBarButton: {
        [theme.breakpoints.down("xs")]: {
            padding: "8px 8px 8px 8px"
        },
    },
    drawer: {
        top: "70px",
        whiteSpace: "nowrap",
    },
    drawerOpen: {

        width: "230px",
        borderRight: "lightgray solid 1px",
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        [theme.breakpoints.down("xs")]: {
            width: "180px",
        },
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        borderRight: "none",
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(8) + 1,
        },
    },
    drawerButton: {
        borderTopRightRadius: "70px",
        borderBottomRightRadius: "70px",
        borderTopLeftRadius: "70px",
        borderBottomLeftRadius: "70px",

    },
    searchInput: {
        marginLeft: "8px",
        width: "80%"
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
    content: {
        width: "95%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    main: {
        marginTop: "80px",
        marginLeft: "100px",
        zIndex: "-1",
        minHeight: "100vh",
    },
}));

 export default function Dashboard(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [note, setNote] = React.useState(true)
    const [reminder, setReminder] = React.useState(false)
    const [editLabel, setEditLabel] = React.useState(false)
    const [archive, setArchive] = React.useState(false)
    const [trash, setTrash] = React.useState(false);
    


    const drawerOpen = () => {
        setOpen(true);
    };
    const drawerClose = () => {
        setOpen(false);
    };
    const drawerOpenClose = () => {
        setOpen(!open);
    };
    React.useEffect(() => {
        noteSelect();
    }, []);

    const noteSelect = () => {
        setNote(true);
        setReminder(false);
        setEditLabel(false);
        setArchive(false);
        setTrash(false);
        // nextPath("/dashboard/notes");
    };
    const reminderSelect = () => {
        setNote(false);
        setReminder(true);
        setEditLabel(false);
        setArchive(false);
        setTrash(false);

    };

    const labelSelect = () => {
        setNote(false);
        setReminder(false);
        setEditLabel(true);
        setArchive(false);
        setTrash(false);
    };
    const archiveSelect = () => {
        setNote(false);
        setReminder(false);
        setEditLabel(false);
        setArchive(true);
        setTrash(false);
        // nextPath("/dashboard/archive");
    };
    const trashSelect = () => {
        setNote(false);
        setReminder(false);
        setEditLabel(false);
        setArchive(false);
        setTrash(true);
        // nextPath("/dashboard/trash");
    };

    return (
        <div className={classes.root} >
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.topBar}>
                    <span className="leftOptions">
                        <div className="startOptions">
                            <div className="menuButton">
                                <IconButton className={classes.appBarButton} onClick={drawerOpenClose} edge="start">
                                    <MenuIcon className={classes.iconLogo} />
                                </IconButton>
                            </div>
                            <div>
                                <img className="headerIcon" src={icon} alt="imh" />
                            </div>
                            <div className="headerTitle">Fundoo</div>
                        </div>

                        <div className="search">
                            <div className="searchIcon">
                                <div className="searchIcon">
                                    <SearchIcon />
                                </div>
                            </div>
                            <InputBase
                                className={classes.searchInput}
                                placeholder="Search…"
                                inputProps={{ "aria-label": "search" }}
                            />
                        </div>
                    </span>
                    <span className="rightOption">
                        <UserAvtar />
                    </span>
                </Toolbar>
            </AppBar>

            <div>
                <Drawer
                    onMouseOver={drawerOpen}
                    onMouseLeave={drawerClose}
                    variant="permanent"
                    color="transparent"

                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    })}
                    classes={{
                        paper: clsx(classes.drawer, {
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        }),
                    }}
                >
                    <div className="drawerList">
                        <List>
                            <div className="drawerButton" onClick={noteSelect}>
                                <ListItem
                                    button
                                    className={classes.drawerButton}
                                    style={{ backgroundColor: note ? "#feefc3" : "transparent" }}

                                >
                                    <ListItemIcon>
                                        <svg height="28" viewBox="0 0 24 24">
                                            <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path>
                                        </svg>
                                    </ListItemIcon>
                                    <ListItemText primary="Notes" />
                                </ListItem>
                            </div>
                            <div className="drawerButton" onClick={reminderSelect}>
                                <ListItem
                                    button
                                    className={classes.drawerButton}
                                    style={{ backgroundColor: reminder ? "#feefc3" : "transparent" }}

                                >
                                    <ListItemIcon>
                                        <svg width="28" height="28" viewBox="0 0 24 24">
                                            <path d="M18 17v-6c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v6H4v2h16v-2h-2zm-2 0H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zm-4 5c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z"></path>
                                        </svg>
                                    </ListItemIcon>
                                    <ListItemText primary="Reminder" />
                                </ListItem>
                            </div>
                            <div className="drawerButton" onClick={labelSelect}>
                                <ListItem
                                    button
                                    className={classes.drawerButton}
                                    style={{ backgroundColor: editLabel ? "#feefc3" : "transparent" }}
                                >
                                    <ListItemIcon>
                                        <svg width="28" height="28" viewBox="0 0 24 24">
                                            <path d="M20.41 4.94l-1.35-1.35c-.78-.78-2.05-.78-2.83 0L13.4 6.41 3 16.82V21h4.18l10.46-10.46 2.77-2.77c.79-.78.79-2.05 0-2.83zm-14 14.12L5 19v-1.36l9.82-9.82 1.41 1.41-9.82 9.83z"></path>
                                        </svg>
                                    </ListItemIcon>
                                    <ListItemText primary="Edit labels" />
                                </ListItem>
                            </div>
                            <div className="drawerButton" onClick={archiveSelect}>
                                <ListItem
                                    button
                                    className={classes.drawerButton}
                                    style={{ backgroundColor: archive ? "#feefc3" : "transparent" }}
                                >
                                    <ListItemIcon>
                                        <svg width="28" height="28" viewBox="0 0 24 24">
                                            <path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 19V8h14v11H5zm11-5.5l-4 4-4-4 1.41-1.41L11 13.67V10h2v3.67l1.59-1.59L16 13.5z"></path>
                                        </svg>
                                    </ListItemIcon>
                                    <ListItemText primary="Archive" />
                                </ListItem>
                            </div>
                            <div className="drawerButton" onClick={trashSelect}>
                                <ListItem
                                    button
                                    className={classes.drawerButton}
                                    style={{ backgroundColor: trash ? "#feefc3" : "transparent" }}
                                >
                                    <ListItemIcon>
                                        <svg width="28" height="28" viewBox="0 0 24 24">
                                            <path d=" M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z"></path>
                                        </svg>
                                    </ListItemIcon>
                                    <ListItemText primary="trash" />
                                </ListItem>
                            </div>
                        </List>
                    </div>
                </Drawer>
            </div>
            <Notes/>
{/* kasjkdj */}
    <div>helolone</div>
    <div>2nd commit</div>
    <div>ddj</div>

        </div>
    );
}

