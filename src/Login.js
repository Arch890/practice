import React, { useState, useEffect, ChangeEvent } from "react";
import { makeStyles } from "@material-ui/core/styles";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import "./login.css";
import { Form, Formik } from "formik";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Link from "@material-ui/core/Link";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";

import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import logo from "./logo.svg";
import {
  Button,
  Checkbox,
  Container,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@material-ui/core";

// import { spacing } from "@material-ui/system";
import Select from "react-select";
import * as Yup from "yup";
import VirtualizedAutocomplete from "./pages/Employees/Customselect";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: 8,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  },
}));

const Login = () => {
  const initialValues = {
    branch: "",
    user_name: "",
    password: "",
    remember_me: false,
  };
  //validation rule for the form field in formik
  const validationSchema = Yup.object().shape({
    branch: Yup.string().required("Branch is required"),
    user_name: Yup.string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters")
      .matches(
        /(?=.*^[A-Za-z_]\w).*$/,
        "Username should begin with _ or alphabet "
      ),
    password: Yup.string()
      .required("Please Enter your password")
      .min(4, "Password should be at least 4 characters"),
    remember_me: Yup.bool(),
  });
  const onSubmit = (values) => {
    const { remember_me, user_name, password } = values;
    localStorage.setItem("remember_me", remember_me.toString());
    localStorage.setItem("user_name", remember_me ? user_name : "");
    const data = { user_name, password };
  };
  useEffect(() => {
    localStorage.removeItem("url");
  }, []);

  const [state, setState] = React.useState({
    checkedB: true,
  });
  const [age, setAge] = React.useState("");
  const handleChange = (prop) => (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    setValues({ ...values, [prop]: event.target.value });
    setAge(event.target.value);
  };
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <>
      <Grid item md={12} className="mui-row">
        <Grid className="login_wrapper">
          <Grid className="login_container">
            <Grid className="mui-row">
              <Grid item md={7} className="paddingnonert">
                <Grid className="left_side_bg">
                  <Grid className="login_form">
                    <Grid className="login_head_sec">
                      <h1 className="login__heading">Log In.</h1>
                      <p className="login__details">
                        Login with your correct data{" "}
                      </p>
                    </Grid>
                  </Grid>
                  <form className={classes.root} noValidate autoComplete="off">
                    <Grid container spacing={2} className="login_innerform">
                      <Grid item xs={12}>
                        {/* <VirtualizedAutocomplete/> */}
                        <FormControl
                          variant="outlined"
                          className={classes.formControl}
                        >
                          <InputLabel id="demo-simple-select-outlined-label"></InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value=""
                            onChange={handleChange}
                            label="Age"
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          id="outlined-basic"
                          size="small"
                          label="UserName"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl
                          className={clsx(classes.margin, classes.textField)}
                          variant="outlined"
                        >
                          <InputLabel htmlFor="outlined-adornment-password">
                            Password
                          </InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? "text" : "password"}
                            value={values.password}
                            onChange={handleChange("password")}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {values.showPassword ? (
                                    <Visibility />
                                  ) : (
                                    <VisibilityOff />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                            labelWidth={70}
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControlLabel
                          className="checkbox_spacing"
                          control={
                            <Checkbox
                              checked={state.checkedB}
                              onChange={handleChange}
                              name="checkedB"
                              color="default"
                            />
                          }
                          label="Rememeber Me"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          className="login_btn"
                        >
                          {" "}
                          Log in{" "}
                        </Button>
                      </Grid>
                      <Grid item xs={12} className="text_center">
                        <Link
                          href="./forget.js"
                          color="inherit"
                          onClick={preventDefault}
                        >
                          Forgot Password?
                        </Link>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
              </Grid>
              <Grid item md={5} className="paddingnonert">
                <Grid className="right_side_bg">
                  <Grid className="right_txt">
                    <Grid>
                      <img src={logo} className="logo_login" />
                    </Grid>
                    <h1 className="margin_none">EASY CARE</h1>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Typography color="initial" className="login_copyright">
            Copyright ©2021 Soori Technologies.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default React.memo(Login);
