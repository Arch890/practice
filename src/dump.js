import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { Button } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Card, CardContent, Divider, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  full_width: {
    width: "100% !important",
  },
  text_center: {
    textAlign: "center",
  },
}));

export default function PermissionForm() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    Role: "",
    module: "",
    checkedA: true,
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
      <Card>
        <div className="card__header">
          <Typography variant="h6" component="h6">
            Add Permission
          </Typography>
        </div>
        <Divider />
        <CardContent>
          <Grid container spacing={1}>
            <Grid item md={12}>
              <form
                className={classes.full_width}
                noValidate
                autoComplete="off"
              >
                <Grid container spacing={1}>
                  <Grid item md={2}>
                    <FormControl variant="outlined" size="small">
                      <InputLabel htmlFor="outlined-Role-native-simple">
                        Role
                      </InputLabel>
                      <Select
                        native
                        value={state.Role}
                        onChange={handleChange}
                        label="Role"
                        inputProps={{
                          name: "Role",
                          id: "outlined-Role-native-simple",
                        }}
                      >
                        <option aria-label="None" value="" />
                        <option value={10}>Admin</option>
                        <option value={20}>Accountant</option>
                        <option value={30}>Customer</option>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item md={4}>
                    <FormControl variant="outlined" size="small">
                      <InputLabel htmlFor="outlined-module-native-simple">
                        Module
                      </InputLabel>
                      <Select
                        native
                        value={state.module}
                        onChange={handleChange}
                        label="module"
                        inputProps={{
                          name: "module",
                          id: "outlined-module-native-simple",
                        }}
                      >
                        <option aria-label="None" value="" />
                        <option value={10}>Admin</option>
                        <option value={20}>Accountant</option>
                        <option value={30}>Customer</option>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </form>
            </Grid>
            <Grid item md={12}>
              <Typography variant="h6" color="initial">
                Permission List:
              </Typography>
              <Grid container>
                <Grid item md={2}>
                  <FormControlLabel
                    control={<Checkbox name="checkedA" color="default" />}
                    label="Edit"
                  />
                </Grid>
                <Grid item md={2}>
                  <FormControlLabel
                    control={<Checkbox name="checkedA" color="default" />}
                    label="Delete"
                  />
                </Grid>
                <Grid item md={2}>
                  <FormControlLabel
                    control={<Checkbox name="checkedA" color="default" />}
                    label="User-list"
                  />
                </Grid>
                <Grid item md={2}>
                  <FormControlLabel
                    control={<Checkbox name="checkedA" color="default" />}
                    label="User-List"
                  />
                </Grid>
                <Grid item md={2}>
                  <FormControlLabel
                    control={<Checkbox name="checkedA" color="default" />}
                    label="Role Edit"
                  />
                </Grid>
                <Grid item md={2}>
                  <FormControlLabel
                    control={<Checkbox name="checkedA" color="default" />}
                    label="Post-list"
                  />
                </Grid>
                <Grid item md={2}>
                  <FormControlLabel
                    control={<Checkbox name="checkedA" color="default" />}
                    label="Post-create"
                  />
                </Grid>

                <Grid item md={2}>
                  <FormControlLabel
                    control={<Checkbox name="checkedA" color="default" />}
                    label="Post-list"
                  />
                </Grid>
                <Grid item md={2}>
                  <FormControlLabel
                    control={<Checkbox name="checkedA" color="default" />}
                    label="Edit"
                  />
                </Grid>
                <Grid item md={2}>
                  <FormControlLabel
                    control={<Checkbox name="checkedA" color="default" />}
                    label="Delete"
                  />
                </Grid>
                <Grid item md={2}>
                  <FormControlLabel
                    control={<Checkbox name="checkedA" color="default" />}
                    label="User-list"
                  />
                </Grid>
                <Grid item md={2}>
                  <FormControlLabel
                    control={<Checkbox name="checkedA" color="default" />}
                    label="User-List"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
