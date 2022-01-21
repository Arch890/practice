
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Button } from '@material-ui/core';
import Select from 'react-select';
import VirtualizedAutocomplete from "./Customselect";
import MultipleImageUploadComponent from "./upload";
import { DropzoneArea } from 'material-ui-dropzone';
import SelectBox from './select';

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
              <SelectBox />
            </Grid>
           
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <DropzoneArea onChange={(files) => console.log('Files:', files)} />
                {/* <MultipleImageUploadComponent/> */}
              </Grid>
              
            </Grid>
        </Grid>
        </div>
    </form>
  );
}