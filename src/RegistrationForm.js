import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { Box } from "@material-ui/core";
import { Height } from "@material-ui/icons";
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

export default function RegistrationForm() {
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
  };

  return (
    <div className={classes.root}>
      <form className={classes.full_width} noValidate autoComplete="off">
        <Grid container spacing={2}>
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
          <Grid item md={2}>
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
                <option value={10}>Female</option>
                <option value={20}>Male</option>
                <option value={30}>Others</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={2}>
            <TextField
              id="outlined-basic"
              size="small"
              label="Contact No."
              variant="outlined"
            />
          </Grid>
          <Grid item md={2}>
            <TextField
              id="outlined-basic"
              size="small"
              label="Address"
              variant="outlined"
            />
          </Grid>
          <Grid item md={2}>
            <TextField
              id="outlined-basic"
              size="small"
              label="Account No."
              variant="outlined"
            />
          </Grid>
          <Grid item md={2}>
            <TextField
              id="outlined-basic"
              size="small"
              label="Municipality"
              variant="outlined"
            />
          </Grid>
          <Grid item md={2}>
            <TextField
              id="outlined-basic"
              size="small"
              label="Ward No"
              variant="outlined"
            />
          </Grid>
          <Grid item md={4}>
            <Box m={1} className="box_div">
                img here
            </Box>
          </Grid>
          <Grid item md={4}>
            <Box m={1} className="box_div">
                Left Finger Print
            </Box>
          </Grid>
          <Grid item md={4}>
            <Box m={1} className="box_div">
                Right Finger Print
            </Box>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
