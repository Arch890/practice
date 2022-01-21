import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Pagination from "@material-ui/lab/Pagination";
import Prof from "./2.png"
import { Grid, Typography } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    "@media (max-width: 1920px)": {
      minHeight: 640,
      maxHeight: 640,
    },
    "@media (max-width: 1680px)": {
      minHeight: 610,
      maxHeight: 610,
    },
    "@media (max-width: 1440px)": {
      minHeight: 460,
      maxHeight: 460,
    },
    "@media (max-width: 1366px)": {
      minHeight: 325,
      maxHeight: 325,
    },
  },
  BtnPrimary: {
    backgroundColor: "#274255",
    border: "none",
    borderRadius: "4px",
    color: "white",
  },
  PaginateTable: {
    padding: " 19px 0px 12px 0px",
    float: "right",
  },
  BtnSuccess: {
    backgroundColor: "#28c800",
    color: "white",
    "&:hover": {
      backgroundColor: "#2ca60e",
    },
  },
});

const columns = [
  
    {
        id: "serialNumber",
        label: "S/N",
        minWidth: 35,
        align: "left",
    },
    { 
        id: "name", 
        label: "Name", 
        minWidth: 250,
        align: "center",
    },
    { 
        id: "Phone", 
        label: "Phone", 
        minWidth: 100,
        align: "center",
    },
    { 
      id: "Chips", 
      label: "chip", 
      minWidth: 100,
      align: "center",
  },
    {
        id: "address",
        label: "Address",
        minWidth: 170,
        align: "center",
    },
    {
        id: "TokenNo",
        label: "Token No.",
        minWidth: 75,
        align: "center",
    },
];

function createData(serialNumber, name, Phone, chip, address, TokenNo) {
  return { serialNumber, name, Phone, chip, address, TokenNo };
}

const rows = [
  createData(
    "1",
    <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof}/>
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
    <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof}/>
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
    <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof}/>
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
    <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof}/>
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
    <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof}/>
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
    <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof}/>
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
    <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof}/>
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
    <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof}/>
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
    <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof}/>
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
    <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof}/>
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
    <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof}/>
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
    <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof}/>
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
    <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof}/>
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
    <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof}/>
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
    <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof}/>
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
    <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof}/>
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),createData(
    "1",
    <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof}/>
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
    <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof}/>
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
    <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof}/>
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
    <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof}/>
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
   <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof} />
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
   <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof} />
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
   <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof} />
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
   <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof} />
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
   <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof} />
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
    <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof} />
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
    <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof} />
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
    <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof} />
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
    <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof} />
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
    <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof} />
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
    <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof} />
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
    <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof} />
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
    <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof} />
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
    <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof} />
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
    <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof} />
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
    <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof} />
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
   <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof} />
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
    <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof} />
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
   <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof} />
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
    <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof} />
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
    <div>
    <Grid className="img_prof">
      <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof} />
       <Typography className="prof_Name"> Ram Shrestha</Typography>
    </Grid>
  </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
   <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof} />
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
   <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof} />
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
    <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof} />
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
    <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof} />
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
    <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof} />
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
    <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof} />
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
    <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof} />
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
  createData(
    "1",
    <div>
      <Grid className="img_prof">
        <Avatar alt="profile image" className="MuiAvatar_custom" src={Prof} />
         <Typography className="prof_Name"> Ram Shrestha</Typography>
      </Grid>
    </div>,
    "9802345679",
    "Kathmandu, Baneshowr",
    "e20123",
  ),
];
export default function RegistrationListing() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <grid className={classes.PaginateTable}>
        <Pagination count={10} />
      </grid>
    </div>
  );
}
