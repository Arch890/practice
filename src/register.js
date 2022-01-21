import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import LayoutMui from "./Layout";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import RegistrationListing from './tableListing';
import RegistrationModal from './ModalRegistration';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor:"#f7fcff",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
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
  BottomNavigation:{
    padding:"16px 12px 8px",
  },
}));
function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Registration() {
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
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card>
                <div className="card__header">
                  <Typography variant="h6" component="h6">
                    Registration List
                  </Typography>
                  <RegistrationModal/>
                </div>
                <Divider />
                <CardContent>
                  <RegistrationListing/>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
            className={classes.root}
          >
             <Typography variant="p" color="initial" className={classes.BottomNavigation}> Copyright ©2021 Soori Technologies.</Typography>
            {/* <BottomNavigationAction label="Copyright ©2021 Soori Technologies."/> */}
          </BottomNavigation>
      </main>
    </div>
  </ThemeProvider>
  );
}
