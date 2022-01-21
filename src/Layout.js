import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import LayersIcon from "@material-ui/icons/Layers";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";

import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import InputBase from "@material-ui/core/InputBase";
import logo from "./logo.svg";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    backgroundColor: "white",
    minHeight: "72px",
    '@media (max-width: 1366px)' : {
      minHeight: '48px',
    }
  },
  toolbarIcon: {
    color: "white",
    justifyContent: "flex-end",
    textAlign: "center",
    padding: "12px",
    alignItems: "center",
    minHeight: "72px",
    fontWeight: "bold",
    ...theme.mixins.toolbar,
    paddingBottom: "24px",
    paddingTop: "24px",
  },
  appBar: {
    zIndex: theme.zIndex.drawer,
    width: "97%",
    color: "rgba(0, 0, 0, 0.87)",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: 14,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    margin: "0px 0 0px 13px",
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    background: "linear-gradient(93deg, #274255 30%, #3a6b8e 90%)",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "",
    overflow: "auto",
  },
  
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  sidebarList: {
    color: "white",
  },
  ListItemhover: {
    "&:hover": {
      backgroundColor: "#203752",
      color: "#fff",
    },
  },
  Iconbg: {
    color: "#fff",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "rgb(255 255 255 / 33%)",
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(0),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  searchAppbar: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#f0f7fd",
    borderRadius: "14px",
    "&:hover": {
      borderColor: "#a4adb2",
    },
    width: "25% !important",
    marginLeft: 0,
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(0),
      width: "auto",
    },
    '@media (max-width: 1366px)' : {
      height: '20%',
      margin: 4,
    }
  },
  searchIconAbppbar: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "1000",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: "10px 10px 10px 0",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    // [theme.breakpoints.up('sm')]: {
    //   width: '12ch',
    //   '&:focus': {
    //     width: '20ch',
    //   },
    // },
  },
  logo: {
    maxWidth: 50,
    marginRight: "10px",
  },
}));
// function ListItemLink(props: ListItemProps<"a", { button?: true }>) {
//   return <ListItem button component="a" {...props} />;
// }

const LayoutMui = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [people, setPeople] = React.useState(false);
  const [item, setItem] = React.useState(false);

  const peopleClick = () => {
    setPeople(!people);
  };

  const itemClick = () => {
    setItem(!item);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={clsx(classes.appBar, open && classes.appBarShift)}
          id="app_barvg"
        >
          <Toolbar className={classes.toolbar}>
            <div className="header__flex">
              <div>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  className={clsx(
                    classes.menuButton,
                    open && classes.menuButtonHidden
                  )}
                >
                  <MenuIcon style={{ fill: "black" }} />
                </IconButton>
                <Typography
                  component="h1"
                  variant="h6"
                  color="inherit"
                  noWrap
                  className={classes.title}
                >
                  <IconButton
                    className={clsx(
                      classes.menuButton,
                      !open && classes.menuButtonHidden,
                      classes.searchHidden
                    )}
                    onClick={handleDrawerClose}
                  >
                    <MenuIcon />
                  </IconButton>
                </Typography>
              </div>

              <div className={classes.searchAppbar}>
                <div className={classes.searchIconAbppbar}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
              <div className="icons__div">
                <IconButton color="inherit">
                  <Badge badgeContent={5} color="secondary">
                    <NotificationsIcon style={{ fill: "black" }} />
                  </Badge>
                </IconButton>
                <IconButton
                  color="inherit"
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <AccountCircle style={{ fill: "black" }} />
                </IconButton>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </div>
            </div>
          </Toolbar>
        </AppBar>
        <CssBaseline />
        <Drawer
          variant="permanent"
          anchor="left"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <div className="sidebar__logo">
              <img src={logo} className={classes.logo} />
              {open === true && <Typography variant="h5">WareHouse</Typography>}
            </div>
          </div>
          <Divider />
          <List className={classes.sidebarList}>
            <ListItem>
              {open === true && (
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ "aria-label": "search" }}
                  />
                </div>
              )}
            </ListItem>
            <ListItem className={classes.ListItemhover}>
              <ListItemIcon className={classes.Iconbg}>
                <DashboardIcon />
              </ListItemIcon>
              {/* <ListItemLink
                color="inherit"
                href="https://v4.mui.com/components/links/#links"
              > */}
              <ListItemText primary="Dashboard" />
              {/* </ListItemLink> */}
            </ListItem>
            <ListItem className={classes.ListItemhover}>
              <ListItemIcon className={classes.Iconbg}>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Employee" />
            </ListItem>
            <ListItem
              className={classes.ListItemhover}
              button
              onClick={peopleClick}
            >
              <ListItemIcon className={classes.Iconbg}>
                <LayersIcon />
              </ListItemIcon>
              <ListItemText primary="People" />
              {people ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={people} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem
                  className={classes.ListItemhover}
                  button
                  style={{ paddingLeft: "30px" }}
                >
                  <ListItemIcon className={classes.Iconbg}>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="People1" />
                </ListItem>
                <ListItem
                  className={classes.ListItemhover}
                  button
                  style={{ paddingLeft: "30px" }}
                >
                  <ListItemIcon className={classes.Iconbg}>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="People1" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem
              className={classes.ListItemhover}
              button
              onClick={itemClick}
            >
              <ListItemIcon className={classes.Iconbg}>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Item" />
              {item ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={item} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem className={classes.ListItemhover}>
                  <ListItemIcon className={classes.Iconbg}>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Item1" />
                </ListItem>
              </List>
            </Collapse>
            {/* Nested ended */}
          </List>
        </Drawer>
      </div>
    </>
  );
};
export default LayoutMui;
