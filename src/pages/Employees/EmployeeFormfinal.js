
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Button } from '@material-ui/core';
import Select from 'react-select';
import VirtualizedAutocomplete from "./Customselect";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paddingGrid: {
    padding: '0 30px',
  },

}));


export default function EmployeeForm1() {
  const classes = useStyles();
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  
  return (
    <form className={classes.root} noValidate autoComplete="off">
        <div className={classes.root}>
        <Grid container spacing={1}>
            <Grid item xs={4}>
              <TextField id="outlined-basic" size="small" label="First Name" variant="outlined" />
            </Grid>
            <Grid item xs={4}>
              <TextField id="outlined-basic" size="small" label="Middle Name" variant="outlined" />
            </Grid>
            <Grid item xs={4}>
              <TextField id="outlined-basic" size="small" label="Last Name" variant="outlined" />
            </Grid>
            <Grid item xs={2}>
              <TextField id="outlined-basic" size="small" label="Joining Date" variant="outlined" />
            </Grid>
            <Grid item xs={2}>
              <TextField id="outlined-basic" size="small" label="Tittle" variant="outlined" />
            </Grid>
            <Grid item xs={4}>
              <TextField id="outlined-basic" size="small" label="Address" variant="outlined" />
            </Grid>
            <Grid item xs={4}>
              <TextField id="outlined-basic" size="small" label="Email" variant="outlined" />
            </Grid>
            <Grid item xs={6}>
              <TextField id="outlined-basic" size="small" label="Phone" variant="outlined" />
            </Grid>
            <Grid item xs={6}>
              <TextField id="outlined-basic" size="small" label="Municipality" variant="outlined" />
            </Grid>
            <Grid item xs={3}>
              <TextField id="outlined-basic" size="small" label="District" variant="outlined" />
            </Grid>
            <Grid item xs={3}>
              <TextField id="outlined-basic" size="small" label="City" variant="outlined" />
            </Grid>
            <Grid item xs={3}>
              <TextField id="outlined-basic" size="small" label="Ward" variant="outlined" />
            </Grid>
            <Grid item xs={6}>
              < VirtualizedAutocomplete/>
            </Grid>
        </Grid>
        </div>
    </form>
  );
}