import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import DemoMui from "./tableDemo";
import LayoutMui from "./Layout";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CustomizedDialogs from "./Modal";
import Divider from "@material-ui/core/Divider";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import MainLayout from "./pages/Employees/main";
import PermissionForm from "./permission";
import ReportDialog from "./Report-Moda";
import { render } from "react-dom";
import Demo from "./chart";
import { PieChart } from "@material-ui/icons";
import Demo1 from "./yearChart";
import {
  CardHeader,
  Avatar,
  IconButton,
  Box,
  Fab,
  Button,
} from "@material-ui/core";
import ShowChartIcon from "@material-ui/icons/ShowChart";

const drawerWidth = 240;
const theme = createTheme({
  palette: {
    mainprimary: {
      main: "#274255",
    },
    alternateTextColor: {
      main: "#174A84",
    },
    secondary: {
      main: "#AAFFBE",
    },
    warning: {
      main: "#ff9800",
    },
    danger: {
      main: "#f44336",
    },
    success: {
      main: "#4caf50",
    },
    info: {
      main: "#2196f3",
    },
    grey: {
      main: "#A8A8A8",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#f7fcff",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    padding: theme.spacing(3),
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  palette: {
    textColor: "#000",
    primary1Color: "#274255",
    accent1Color: "#274255",
    pickerHeaderColor: "#274255",
    alternateTextColor: "#274255",
  },
  BottomNavigation: {
    padding: "16px 12px 8px",
  },
}));
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function DashboardMui() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [value, setValue] = React.useState(0);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <LayoutMui />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Card>
                    <CardContent className="height-dash">
                      <div className="cardheader-dash">
                      <Typography color="initial" className="cardDash-Font">
                          Total Customer
                        </Typography>
                        <Button
                          className="BtnPrimary"
                          variant="contained"
                          color="default"
                          size="small"
                        >
                          Monthly
                        </Button>
                      </div>
                      <div className="cardheader-dash">
                        <Typography
                          variant="h6"
                          color="initial"
                          className="number-dash"
                        >
                          40
                        </Typography>
                      </div>
                    </CardContent>

                    <CardActions>
                      <div className="cardheader-dash">
                        <Typography color="initial">
                          <span className="number-countSuccess">+14%</span>Since last
                          Week
                        </Typography>
                      </div>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card>
                    <CardContent className="height-dash">
                      <div className="cardheader-dash">
                        <Typography color="initial" className="cardDash-Font">
                          Products Sold
                        </Typography>
                        <Button
                          className="BtnPrimary"
                          variant="contained"
                          color="default"
                          size="small"
                        >
                          Monthly
                        </Button>
                      </div>
                      <div>
                        <Typography
                          variant="h6"
                          color="initial"
                          className="number-dash"
                        >
                          1000
                        </Typography>
                      </div>
                    </CardContent>
                    <CardActions>
                      <div className="cardheader-dash">
                        <Typography color="initial">
                          <span className="number-countSuccess">+24%</span>Since last
                          Week
                        </Typography>
                      </div>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card>
                    <CardContent className="height-dash">
                      <div className="cardheader-dash">
                        <Typography color="initial" className="cardDash-Font">
                          Total Earning
                        </Typography>
                        <Button
                          className="BtnPrimary"
                          variant="contained"
                          color="default"
                          size="small"
                        >
                          Yearly
                        </Button>
                      </div>
                      <div>
                        <Typography
                          variant="h6"
                          color="initial"
                          className="number-dash"
                        >
                          20%
                        </Typography>
                      </div>
                    </CardContent>
                       <CardActions>
                      <div className="cardheader-dash">
                        <Typography color="initial">
                          <span className="number-countDanger">-4%</span>Since last
                          Week
                        </Typography>
                      </div>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card>
                    <CardContent className="height-dash">
                      <div className="cardheader-dash">
                        <Typography color="initial" className="cardDash-Font">
                          Total Order
                        </Typography>
                        <Button
                          className="BtnPrimary"
                          variant="contained"
                          color="default"
                          size="small"
                        >
                          Monthly
                        </Button>
                      </div>
                      <div>
                        <Typography
                          variant="h6"
                          color="initial"
                          className="number-dash"
                        >
                          40
                        </Typography>
                      </div>
                    </CardContent>
                       <CardActions>
                      <div className="cardheader-dash">
                        <Typography color="initial">
                          <span className="number-countDanger">-20%</span>Since last
                          Week
                        </Typography>
                      </div>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Demo />
            </Grid>
          </Grid>
          {/* <PermissionForm/> */}
          {/* <MainLayout/> */}
          {/* <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card>
                <div className="card__header">
                  <Typography variant="h6" component="h6">
                    Employee List <em>(19)</em>
                  </Typography>
                  
                  <ReportDialog />
                </div>
                <Divider />
                <CardContent>
                  <DemoMui/>
                </CardContent>
              </Card>
            </Grid>
          </Grid> */}
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
            className={classes.root}
          >
            <Typography
              variant="p"
              color="initial"
              className={classes.BottomNavigation}
            >
              {" "}
              Copyright ©2021 Soori Technologies.
            </Typography>
            {/* <BottomNavigationAction label="Copyright ©2021 Soori Technologies."/> */}
          </BottomNavigation>
        </main>
      </div>
    </ThemeProvider>
  );
}
