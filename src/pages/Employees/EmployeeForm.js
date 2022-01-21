import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Button, Typography } from "@material-ui/core";
import Select from "react-select";

import AddIcon from "@material-ui/icons/Add";

import Tooltip from "@material-ui/core/Tooltip";

import Fab from "@material-ui/core/Fab";
import DemoMui from "./tableDemo";

import AddDialogs from "./addmodal";

import Autocomplete from "@material-ui/lab/Autocomplete";
import VirtualizedAutocomplete from "./Customselect";
import Box from "@material-ui/core/Box";
import { blue, green, grey, orange, red } from "@material-ui/core/colors";
import Modalnew from "./ModalNew";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paddingGrid: {
    padding: "0 30px",
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  paddingTopBtn: {
    padding: "10px !important",
  },
  BoxLegendRed: {
    height: 16,
    width: 18,
    margin: "6px 0px 6px 0px",
    borderRadius: 3,
    clear: "both",
    backgroundColor: "#e73427",
  },
  BoxLegendBlue: {
    height: 16,
    width: 18,
    margin: "6px 0px 6px 0px",
    clear: "both",
    borderRadius: 3,
    backgroundColor: "#0a5682",
  },
  BoxLegendGreen: {
    height: 16,
    width: 18,
    margin: "6px 0px 6px 0px",
    clear: "both",
    borderRadius: 3,
    backgroundColor: "#037807",
  },
  BoxLegendGrey: {
    height: 16,
    width: 18,
    margin: "6px 0px 6px 0px",
    clear: "both",
    borderRadius: 3,
    backgroundColor: "#484545",
  },
  BoxLegendOrange: {
    height: 16,
    width: 18,
    margin: "6px 0px 6px 0px",
    clear: "both",
    borderRadius: 3,
    backgroundColor: "#e35e00",
  },
  displayFlex: {
    display: "flex",
    float: "right",
  },
  floatRight: {
    float: "right",
  },
  marginBottom: {
    marginBottom: 20,
  },
  legend_tittle: {
    margin: "3px 12px 0px 4px",
  },
}));

export default function EmployeeForm1() {
  const classes = useStyles();
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div className={classes.root}>
      <form className={classes.root} noValidate autoComplete="off">
        <Grid container item className="CustomMuiGrid-spacing-xs-1">
          <Grid item xs={12} md={12} className={classes.marginBottom}>
            <Grid className={classes.displayFlex}>
              <Box className={classes.BoxLegendRed}></Box>
              <Typography className={classes.legend_tittle}>
                Discountable
              </Typography>
              <Box className={classes.BoxLegendBlue}></Box>
              <Typography className={classes.legend_tittle}>Taxable</Typography>
              <Box className={classes.BoxLegendGreen}></Box>
              <Typography className={classes.legend_tittle}>Expired</Typography>
              <Box className={classes.BoxLegendGrey}></Box>
              <Typography className={classes.legend_tittle}>
                Expirable
              </Typography>
              <Box className={classes.BoxLegendOrange}></Box>
              <Typography className={classes.legend_tittle}>
                Out of Stock
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item className="CustomMuiGrid-grid-lg-1">
            <Autocomplete
              id="tags-outlined"
              options={BranchList}
              getOptionLabel={(option) => option.title}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Pay Type"
                  placeholder="Select"
                  size="small"
                />
              )}
            />
          </Grid>
          <Grid item className="CustomMuiGrid-grid-lg-2">
            <Grid container spacing={1}>
              <Grid item xs={9} md={9}>
                <Autocomplete
                  id="tags-outlined"
                  options={BranchList}
                  getOptionLabel={(option) => option.title}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="Supplier"
                      placeholder="Select"
                      size="small"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={3} md={3} className={classes.paddingTopBtn}>
                <Grid>
                  <Tooltip title="Add" placement="top" aria-label="Delete">
                    <button className="BtnPrimary">
                      <AddIcon />
                    </button>
                  </Tooltip>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className="CustomMuiGrid-grid-lg-1">
            <TextField
              id="outlined-basic"
              size="small"
              label="Bill No."
              variant="outlined"
            />
          </Grid>
          <Grid item className="CustomMuiGrid-grid-lg-1">
            <TextField
              id="outlined-basic"
              size="small"
              label="Bill Date(B.S)"
              variant="outlined"
            />
          </Grid>
          <Grid item className="CustomMuiGrid-grid-lg-1">
            <TextField
              id="outlined-basic"
              size="small"
              label="Chalan No."
              variant="outlined"
            />
          </Grid>
          <Grid item className="CustomMuiGrid-grid-lg-1">
            <TextField
              id="outlined-basic"
              size="small"
              label="Due Date (B.S)"
              variant="outlined"
            />
          </Grid>
          <Grid item className="CustomMuiGrid-grid-lg-2">
            <Grid container spacing={1}>
              <Grid item md={9}>
                <Autocomplete
                  id="tags-outlined"
                  options={BranchList}
                  getOptionLabel={(option) => option.title}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="Dis Scheme"
                      placeholder="Select"
                      size="small"
                    />
                  )}
                />
              </Grid>
              <Grid item md={3} className={classes.paddingTopBtn}>
                <Tooltip title="Add" placement="top" aria-label="Delete">
                  <button className="BtnPrimary">
                    <AddIcon />
                  </button>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className="CustomMuiGrid-grid-lg-3">
            <Modalnew/>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item className="CustomMuiGrid-grid-lg-2">
            <TextField
              id="outlined-basic"
              size="small"
              label="Name"
              variant="outlined"
            />
          </Grid>
          <Grid item className="CustomMuiGrid-grid-lg-1">
            <TextField
              id="outlined-basic"
              size="small"
              label="P. Cost"
              variant="outlined"
            />
          </Grid>
          <Grid item className="CustomMuiGrid-grid-lg-1">
            <TextField
              id="outlined-basic"
              size="small"
              label="S. Cost"
              variant="outlined"
            />
          </Grid>
          <Grid item className="CustomMuiGrid-grid-lg-1">
            <TextField
              id="outlined-basic"
              size="small"
              label="Exp. Date"
              variant="outlined"
            />
          </Grid>
          <Grid item className="CustomMuiGrid-grid-lg-1">
            <TextField
              id="outlined-basic"
              size="small"
              label="Batch"
              variant="outlined"
            />
          </Grid>
          <Grid item className="CustomMuiGrid-grid-lg-1">
            <TextField
              id="outlined-basic"
              size="small"
              label="Net Qty"
              variant="outlined"
            />
          </Grid>
          <Grid item className="CustomMuiGrid-grid-lg-1">
            <TextField
              id="outlined-basic"
              size="small"
              label="Dis %"
              variant="outlined"
            />
          </Grid>
          <Grid item className="CustomMuiGrid-grid-lg-1">
            <TextField
              id="outlined-basic"
              size="small"
              label="Dis (A)"
              variant="outlined"
            />
          </Grid>
          <Grid item className="CustomMuiGrid-grid-lg-1">
            <TextField
              id="outlined-basic"
              size="small"
              label="Tax %"
              variant="outlined"
            />
          </Grid>
          <Grid item className="CustomMuiGrid-grid-lg-1">
            <TextField
              id="outlined-basic"
              size="small"
              label="Tax(A)"
              variant="outlined"
            />
          </Grid>
          <Grid item className="CustomMuiGrid-grid-lg-1">
            <TextField
              id="outlined-basic"
              size="small"
              label="Gross(A)"
              variant="outlined"
            />
          </Grid>
          <Grid item className="CustomMuiGrid-grid-lg-1">
            <TextField
              id="outlined-basic"
              size="small"
              label="Net(A)"
              variant="outlined"
            />
          </Grid>
          <Grid item className="CustomMuiGrid-grid-lg-1">
            <TextField
              id="outlined-basic"
              size="small"
              label="F. Qty"
              variant="outlined"
            />
          </Grid>
          <Grid item className="CustomMuiGrid-grid-lg-1">
            <TextField
              id="outlined-basic"
              size="small"
              label="Net F. Qty"
              variant="outlined"
            />
          </Grid>
          <Grid item className="CustomMuiGrid-grid-lg-1">
            <Button variant="contained" className="BtnPrimary">
              Add
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

// slect places list
const BranchList = [
  { title: "Cash" },
  { title: "Cheque" },
  { title: "Card" },
  { title: "Fonpay" },
  { title: "Esewa" },
  { title: "Mobile Banking" },
];
