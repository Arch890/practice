import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { Button } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  full_width: {
    width: "100% !important",
  },
  text_center: {
    textAlign: "center",
  },
}));

export default function MainForm() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    Gender: "",
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
          <Grid item md={4}>
            <TextField
              id="outlined-basic"
              size="small"
              label="Company"
              variant="outlined"
            />
          </Grid>
          <Grid item md={4}>
            <TextField
              id="outlined-basic"
              size="small"
              label="Username(Case insensitive)*"
              variant="outlined"
            />
          </Grid>
          <Grid item md={4}>
            <TextField
              id="outlined-basic"
              size="small"
              label="Email Address"
              variant="outlined"
            />
          </Grid>
          <Grid item md={4}>
            <TextField
              id="outlined-basic"
              size="small"
              label="First Name"
              variant="outlined"
            />
          </Grid>
          <Grid item md={4}>
            <TextField
              id="outlined-basic"
              size="small"
              label="Middle Name"
              variant="outlined"
            />
          </Grid>
          <Grid item md={4}>
            <TextField
              id="outlined-basic"
              size="small"
              label="Last Name"
              variant="outlined"
            />
          </Grid>
          <Grid item md={4}>
            <TextField
              id="outlined-basic"
              size="small"
              label="User Role"
              variant="outlined"
            />
          </Grid>
          <Grid item md={4}>
            <TextField
              id="outlined-basic"
              size="small"
              label="Address"
              variant="outlined"
            />
          </Grid>
          <Grid item md={4}>
            <TextField
              id="outlined-basic"
              size="small"
              label="Birth Date"
              variant="outlined"
            />
          </Grid>
          <Grid item md={4}>
            <TextField
              id="outlined-basic"
              size="small"
              label="Contact Number"
              variant="outlined"
            />
          </Grid>
          <Grid item md={4}>
            <FormControl variant="outlined" size="small">
              <InputLabel htmlFor="outlined-Gender-native-simple">
                Gender
              </InputLabel>
              <Select
                native
                value={state.Gender}
                onChange={handleChange}
                label="Gender"
                inputProps={{
                  name: "Gender",
                  id: "outlined-Gender-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option value={10}>Male</option>
                <option value={20}>Female</option>
                <option value={30}>Other</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={4}>
            <TextField
              id="outlined-basic"
              size="small"
              label="Start Date"
              variant="outlined"
            />
          </Grid>
          <Grid item md={12}>
            <Grid className="details_profile">
              <Button variant="contained" className="BtnPrimary">
                Update
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
