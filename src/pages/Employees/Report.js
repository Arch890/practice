import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import Tooltip from "@material-ui/core/Tooltip";
import { Box } from "@material-ui/core";

const columns = [
  { id: "sn", label: "S/N", minWidth: 20 },
  { id: "name", label: "Name", minWidth: 170 },
  { id: "email", label: "Email", minWidth: 100 },
  {
    id: "tittle",
    label: "Tittle",
    minWidth: 170,
    align: "left",
  },
  {
    id: "joiningDate",
    label: "Joining Date",
    minWidth: 170,
    align: "left",
  },
  {
    id: "ID",
    label: "Employee ID",
    minWidth: 170,
    align: "left",
  },
  {
    id: "property",
    label: "Properties",
    minWidth: 170,
    align: "left",
  },
  {
    id: "action",
    label: "Action",
    minWidth: 50,
    align: "left",
  },
];

function createData(sn,name, email, tittle, joiningDate, ID,property, action) {
  const EmployeeID = "";
  return { sn,name, email, tittle, joiningDate, ID,property, action };
}

const rows = [
  createData(
    "1",
    "Ram Shrestha",
    "example@email.com",
    "Branch Manager",
    "2011-01-01",
    "e20123",
    <div className="table_legend_flex">
       <Box className="Table_BoxLegendRed"></Box>
       <Box className="Table_BoxLegendRed"></Box>
    </div>,
    <div>
      <Tooltip title="Delete" aria-label="Delete">
        <button className="BtnDanger">
          <DeleteIcon />
        </button>
      </Tooltip>
    </div>
  ),
  createData(
    "1",
    "Hari Siwakoti",
    "example@email.com",
    "Branch Manager",
    "2011-01-01",
    "e20123",
     <div className="table_legend_flex">
       <Box className="Table_BoxLegendRed"></Box>
       <Box className="Table_BoxLegendRed"></Box>
    </div>,
    <div>
      <Tooltip title="Delete" aria-label="Delete">
        <button className="BtnDanger">
          <DeleteIcon />
        </button>
      </Tooltip>
    </div>
  ),
  createData(
    "1",
    "Sita Shrestha",
    "example@email.com",
    "Branch Manager",
    "2011-01-01",
    "e20123",
     <div className="table_legend_flex">
       <Box className="Table_BoxLegendRed"></Box>
       <Box className="Table_BoxLegendRed"></Box>
    </div>,
    <div>
      <Tooltip title="Delete" aria-label="Delete">
        <button className="BtnDanger">
          <DeleteIcon />
        </button>
      </Tooltip>
    </div>
  ),
  createData(
    "1",
    "Sita Shrestha",
    "example@email.com",
    "Branch Manager",
    "2011-01-01",
    "e20123",
     <div className="table_legend_flex">
       <Box className="Table_BoxLegendRed"></Box>
       <Box className="Table_BoxLegendRed"></Box>
    </div>,
    <div>
      <Tooltip title="Delete" aria-label="Delete">
        <button className="BtnDanger">
          <DeleteIcon />
        </button>
      </Tooltip>
    </div>
  ),
  createData(
    "1",
    "Sita Shrestha",
    "example@email.com",
    "Branch Manager",
    "2011-01-01",
    "e20123",
     <div className="table_legend_flex">
       <Box className="Table_BoxLegendRed"></Box>
       <Box className="Table_BoxLegendRed"></Box>
    </div>,
    <div>
      <Tooltip title="Delete" aria-label="Delete">
        <button className="BtnDanger">
          <DeleteIcon />
        </button>
      </Tooltip>
    </div>
  ),
  createData(
    "1",
    "Sita Shrestha",
    "example@email.com",
    "Branch Manager",
    "2011-01-01",
    "e20123",
     <div className="table_legend_flex">
       <Box className="Table_BoxLegendRed"></Box>
       <Box className="Table_BoxLegendRed"></Box>
    </div>,
    <div>
      <Tooltip title="Delete" aria-label="Delete">
        <button className="BtnDanger">
          <DeleteIcon />
        </button>
      </Tooltip>
    </div>
  ),
  createData(
    "1",
    "Sita Shrestha",
    "example@email.com",
    "Branch Manager",
    "2011-01-01",
    "e20123",
     <div className="table_legend_flex">
       <Box className="Table_BoxLegendRed"></Box>
       <Box className="Table_BoxLegendRed"></Box>
    </div>,
    <div>
      <Tooltip title="Delete" aria-label="Delete">
        <button className="BtnDanger">
          <DeleteIcon />
        </button>
      </Tooltip>
    </div>
  ),
  createData(
    "1",
    "Sita Shrestha",
    "example@email.com",
    "Branch Manager",
    "2011-01-01",
    "e20123",
     <div className="table_legend_flex">
       <Box className="Table_BoxLegendRed"></Box>
       <Box className="Table_BoxLegendRed"></Box>
    </div>,
    <div>
      <Tooltip title="Delete" aria-label="Delete">
        <button className="BtnDanger">
          <DeleteIcon />
        </button>
      </Tooltip>
    </div>
  ),
  createData(
    "1",
    "Sita Shrestha",
    "example@email.com",
    "Branch Manager",
    "2011-01-01",
    "e20123",
     <div className="table_legend_flex">
       <Box className="Table_BoxLegendRed"></Box>
       <Box className="Table_BoxLegendRed"></Box>
    </div>,
    <div>
      <Tooltip title="Delete" aria-label="Delete">
        <button className="BtnDanger">
          <DeleteIcon />
        </button>
      </Tooltip>
    </div>
  ),
  createData(
    "1",
    "Sita Shrestha",
    "example@email.com",
    "Branch Manager",
    "2011-01-01",
    "e20123",
     <div className="table_legend_flex">
       <Box className="Table_BoxLegendRed"></Box>
       <Box className="Table_BoxLegendRed"></Box>
    </div>,
    <div>
      <Tooltip title="Delete" aria-label="Delete">
        <button className="BtnDanger">
          <DeleteIcon />
        </button>
      </Tooltip>
    </div>
  ),
  createData(
    "1",
    "Sita Shrestha",
    "example@email.com",
    "Branch Manager",
    "2011-01-01",
    "e20123",
     <div className="table_legend_flex">
       <Box className="Table_BoxLegendRed"></Box>
       <Box className="Table_BoxLegendRed"></Box>
    </div>,
    <div>
      <Tooltip title="Delete" aria-label="Delete">
        <button className="BtnDanger">
          <DeleteIcon />
        </button>
      </Tooltip>
    </div>
  ),
  createData(
    "1",
    "Sita Shrestha",
    "example@email.com",
    "Branch Manager",
    "2011-01-01",
    "e20123",
     <div className="table_legend_flex">
       <Box className="Table_BoxLegendRed"></Box>
       <Box className="Table_BoxLegendRed"></Box>
    </div>,
    <div>
      <Tooltip title="Delete" aria-label="Delete">
        <button className="BtnDanger">
          <DeleteIcon />
        </button>
      </Tooltip>
    </div>
  ),
  createData(
    "1",
    "Ram Shrestha",
    "example@email.com",
    "Branch Manager",
    "2011-01-01",
    "e20123",
     <div className="table_legend_flex">
       <Box className="Table_BoxLegendRed"></Box>
       <Box className="Table_BoxLegendRed"></Box>
    </div>,
    <div>
      <Tooltip title="Delete" aria-label="Delete">
        <button className="BtnDanger">
          <DeleteIcon />
        </button>
      </Tooltip>
    </div>
  ),
  createData(
    "1",
    "Hari Siwakoti",
    "example@email.com",
    "Branch Manager",
    "2011-01-01",
    "e20123",
     <div className="table_legend_flex">
       <Box className="Table_BoxLegendRed"></Box>
       <Box className="Table_BoxLegendRed"></Box>
    </div>,
    <div>
      <Tooltip title="Delete" aria-label="Delete">
        <button className="BtnDanger">
          <DeleteIcon />
        </button>
      </Tooltip>
    </div>
  ),
  createData(
    "1",
    "Ram Shrestha",
    "example@email.com",
    "Branch Manager",
    "2011-01-01",
    "e20123",
     <div className="table_legend_flex">
       <Box className="Table_BoxLegendRed"></Box>
       <Box className="Table_BoxLegendRed"></Box>
    </div>,
    <div>
      <Tooltip title="Delete" aria-label="Delete">
        <button className="BtnDanger">
          <DeleteIcon />
        </button>
      </Tooltip>
    </div>
  ),
  createData(
    "1",
    "Hari Siwakoti",
    "example@email.com",
    "Branch Manager",
    "2011-01-01",
    "e20123",
     <div className="table_legend_flex">
       <Box className="Table_BoxLegendRed"></Box>
       <Box className="Table_BoxLegendRed"></Box>
    </div>,
    <div>
      <Tooltip title="Delete" aria-label="Delete">
        <button className="BtnDanger">
          <DeleteIcon />
        </button>
      </Tooltip>
    </div>
  ),
  createData(
    "1",
    "Sita Shrestha",
    "example@email.com",
    "Branch Manager",
    "2011-01-01",
    "e20123",
     <div className="table_legend_flex">
       <Box className="Table_BoxLegendRed"></Box>
       <Box className="Table_BoxLegendRed"></Box>
    </div>,
    <div>
      <Tooltip title="Delete" aria-label="Delete">
        <button className="BtnDanger">
          <DeleteIcon />
        </button>
      </Tooltip>
    </div>
  ),
  createData(
    "1",
    "Ram Shrestha",
    "example@email.com",
    "Branch Manager",
    "2011-01-01",
    "e20123",
     <div className="table_legend_flex">
       <Box className="Table_BoxLegendRed"></Box>
       <Box className="Table_BoxLegendRed"></Box>
    </div>,
    <div>
      <Tooltip title="Delete" aria-label="Delete">
        <button className="BtnDanger">
          <DeleteIcon />
        </button>
      </Tooltip>
    </div>
  ),
  createData(
    "1",
    "Ram Shrestha",
    "example@email.com",
    "Branch Manager",
    "2011-01-01",
    "e20123",
     <div className="table_legend_flex">
       <Box className="Table_BoxLegendRed"></Box>
       <Box className="Table_BoxLegendRed"></Box>
    </div>,
    <div>
      <Tooltip title="Delete" aria-label="Delete">
        <button className="BtnDanger">
          <DeleteIcon />
        </button>
      </Tooltip>
    </div>
  ),
  createData(
    "1",
    "Hari Siwakoti",
    "example@email.com",
    "Branch Manager",
    "2011-01-01",
    "e20123",
     <div className="table_legend_flex">
       <Box className="Table_BoxLegendRed"></Box>
       <Box className="Table_BoxLegendRed"></Box>
    </div>,
    <div>
      <Tooltip title="Delete" aria-label="Delete">
        <button className="BtnDanger">
          <DeleteIcon />
        </button>
      </Tooltip>
    </div>
  ),
];

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginTop:15,
    marginBottom:15,
  },
  container: {
    maxHeight: 300,
    "@media (max-width: 1366px)": {
      maxHeight: 250,
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

export default function StickyHeadTable() {
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
      {/* <TablePagination
        component="div"
        count={100}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </div>
  );
}
