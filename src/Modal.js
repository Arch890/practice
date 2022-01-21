import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

import TextField from "@material-ui/core/TextField";

import EmployeeForm1 from "./pages/Employees/EmployeeForm";
import { useGlobalCss } from "./globalCss";
import Grid from "@material-ui/core/Grid";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import DemoMui from "./pages/Employees/tableDemo";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  modalBody: {
    padding: "1rem",
  },
  textCenter: {
    textAlign: "center",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        size="small"
        className={classes.BtnPrimary}
        onClick={handleClickOpen}
        direction="row"
      >
        Add New
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Purchase Order
            </Typography>
            {/* <Button autoFocus color="inherit" variant="contained" size="small"  onClick={handleClose}>
              save
            </Button> */}
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Grid container className={classes.modalBody}>
          <EmployeeForm1 />
          <DemoMui />
          <Grid container spacing={1}>
            <Grid item md={6}></Grid>
            <Grid item md={3}>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Sub Total"
                    size="small"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Non Taxable Amount"
                    size="small"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Discountable Amount"
                    size="small"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Taxable Amount"
                    size="small"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Discount Rate"
                    size="small"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Total Tax"
                    size="small"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Total Discount"
                    size="small"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Additional Charge"
                    size="small"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Paying Amount"
                    size="small"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Grand Total"
                    size="small"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={3}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextareaAutosize
                    aria-label="minimum height"
                    minRows={4}
                    placeholder="Enter Remarks"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={12} className={classes.textCenter}>
                  <Button className="BtnOutlinePrimary" variant="outlined">
                    <AddIcon />
                    Payment Details
                  </Button>
                  &nbsp;
                  <Button className="BtnOutlinePrimary" variant="outlined">
                    <AddIcon />
                    Additional Charge
                  </Button>
                </Grid>
                <Grid item xs={12} className={classes.textCenter}>
                  <Button className="BtnPrimary" variant="contained" size="large">
                    <AddIcon />
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}
