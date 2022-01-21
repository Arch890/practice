import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  full_width: {
    width: "100% !important",
  },
  text_center: {
    textAlign: "center",
  },
}));

export default function NewForm() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    User: "",
    Supplier: "",
    Purchase: "",
    Items: "",
    checkedF: true,
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.root}>
      <form className={classes.full_width} noValidate autoComplete="off">
        <Grid container spacing={1}>
        <Grid item md={3}>
            <FormControl variant="outlined" size="small">
              <InputLabel htmlFor="outlined-Gender-native-simple">
                User
              </InputLabel>
              <Select
                native
                value={state.User}
                onChange={handleChange}
                label="User"
                inputProps={{
                  name: "User",
                  id: "outlined-User-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option value={10}>1</option>
                <option value={20}>2</option>
                <option value={30}>3</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={3}>
            <FormControl variant="outlined" size="small">
              <InputLabel htmlFor="outlined-Gender-native-simple">
               Supplier
              </InputLabel>
              <Select
                native
                value={state.Supplier}
                onChange={handleChange}
                label="Supplier"
                inputProps={{
                  name: "Supplier",
                  id: "outlined-Supplier-native-simple",
                }}
              >
                 <option aria-label="None" value="" />
                <option value={10}>1</option>
                <option value={20}>2</option>
                <option value={30}>3</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={3}>
            <FormControl variant="outlined" size="small">
              <InputLabel htmlFor="outlined-Gender-native-simple">
                Purchase
              </InputLabel>
              <Select
                native
                value={state.Purchase}
                onChange={handleChange}
                label="Purchase"
                inputProps={{
                  name: "Purchase",
                  id: "outlined-Purchase-native-simple",
                }}
              >
                 <option aria-label="None" value="" />
                <option value={10}>1</option>
                <option value={20}>2</option>
                <option value={30}>3</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={3}>
            <FormControl variant="outlined" size="small">
              <InputLabel htmlFor="outlined-Gender-native-simple">
                Item
              </InputLabel>
              <Select
                native
                value={state.Item}
                onChange={handleChange}
                label="Item"
                inputProps={{
                  name: "Item",
                  id: "outlined-Item-native-simple",
                }}
              >
                 <option aria-label="None" value="" />
                <option value={10}>1</option>
                <option value={20}>2</option>
                <option value={30}>3</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={2}>
            <FormControlLabel control={<Checkbox name="checkedC"  color="default" />} label="A.D System" />
          </Grid>
          <Grid item md={4}>
            <TextField
              id="outlined-basic"
              size="small"
              label="Start Date"
              variant="outlined"
            />
          </Grid>
          <Grid item md={2}>
            <FormControlLabel control={<Checkbox name="checkedC"  color="default" />} label="B.S System" />
          </Grid>
          <Grid item md={4}>
            <TextField
              id="outlined-basic"
              size="small"
              label="End Date"
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} className="text_center">
            <FormControlLabel control={<Checkbox name="checkedC" color="primary" />} label="Quick Report" />
          </Grid>
          <Grid item md={6}>
           
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
