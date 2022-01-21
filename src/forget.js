import React, { useState, useEffect, ChangeEvent } from "react";
import { makeStyles } from "@material-ui/core/styles";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import "./login.css";
import { Form, Formik } from "formik";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Link from '@material-ui/core/Link';

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

const ForgetPassword = () => {
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
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    setAge(event.target.value);
  };

  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <>
      <Grid item md={12} className="mui-row">
        <Grid className="Forgetlogin_wrapper">
          <Grid className="login_container">
            <Grid className="mui-row">
              <Grid item md={12} className="paddingnonert">
                <Grid className="left_side_bg">
                  <Grid className="login_form">
                    <Grid className="login_head_sec">
                      <h2 className="login__heading , text_center" color="initial">Forget Password ?</h2>
                    </Grid>
                  </Grid>
                  <form className={classes.root} noValidate autoComplete="off">
                  <Grid container spacing={2} className="login_innerform">
                      <Grid item xs={12}>
                        <TextField
                          id="outlined-basic"
                          size="small"
                          label="Email Address"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          className="login_btn"
                        >
                          {" "}
                          Submit{" "}
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
              </Grid>
              {/* <Grid item md={5} className="paddingnonert">
                <Grid className="right_side_bg">
                  <Grid className="right_txt">
                    <Grid>
                      <img src={logo} className="logo_login" />
                    </Grid>
                    <h1 className="margin_none">EASY CARE</h1>
                  </Grid>
                </Grid>
              </Grid> */}
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
export default React.memo(ForgetPassword);
