import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import { Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import FilterListIcon from "@material-ui/icons/FilterList";
import { Modal } from "antd";
import EvalueateVolunteers from "./EvaluateVolunteers";
import { approveApp, fetchApplications } from "../../../redux/ActionCreators/appActions";
import { connect } from 'react-redux'
import { useEffect } from "react";
import { Alert, AlertTitle } from '@material-ui/lab';
import { CircularProgress, Container, Portal } from "@material-ui/core";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function createData(firstName, lastName, phone, email, address, skill, areas) {
  return { firstName, lastName, phone, email, address, skill, areas };
}

const customeStyle = {
  content: {
    top: "auto",
    left: "auto",
    right: "auto",
    bottom: "0",
    marginRight: "auto",
    width: "100%",
  },
  overlay: {
    backdropFilter: "blur(5px)",

    backgroundColor: "rgba(253,255,255,0.44)",
  },
};

const rows = [
  createData(
    "Mehammed",
    "Teshome",
    "0923191253",
    "checoslbches@gmail.com",
    "addis ababa",
    "it",
    "tech"
  ),
  createData(
    "Mehammed",
    "Teshome",
    "0923191253",
    "checoslbches@gmail.com",
    "addis ababa",
    "it",
    "tech"
  ),
  createData(
    "Mehammed",
    "Teshome",
    "0923191253",
    "checoslbches@gmail.com",
    "addis ababa",
    "it",
    "tech"
  ),
  createData(
    "Mehammed",
    "Teshome",
    "0923191253",
    "checoslbches@gmail.com",
    "addis ababa",
    "it",
    "tech"
  ),
  createData(
    "Mehammed",
    "Teshome",
    "0923191253",
    "checoslbches@gmail.com",
    "addis ababa",
    "it",
    "tech"
  ),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "Name",
    numeric: true,
    disablePadding: false,
    label: "Name",
  },
  {
    id: "phone",
    numeric: true,
    disablePadding: false,
    label: "Phone",
  },
  { id: "email", numeric: true, disablePadding: false, label: "Email" },
  { id: "address", numeric: true, disablePadding: false, label: "Address" },

  {
    id: "actions",
    numeric: false,
    disablePadding: false,
    label: "Evaluate",
  },
];

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead style={{ paddingLeft: "20px" }}>
      <TableRow>
        {/* <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
          />
        </TableCell> */}
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "center" : "center"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  title: {
    flex: "1 1 100%",
  },
  HeaderIcons: {
    display: "flex",
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Volunteers
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },

  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

const mapStateToProps = (state) => {
  return {
    Applications: state.Applications,
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchApplications: () => dispatch(fetchApplications()),
  approveApp: (app) => dispatch(approveApp(app))
})
function Volunteers(props) {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [selectedVol, setSelectedVol] = React.useState()
  // const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const { projectId } = useParams()
  useEffect(() => {
    props.fetchApplications()
  }, [])
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, index) => {
    console.log(index);
    const selectedIndex = selected.indexOf(index);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, index);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // const handleChangeDense = (event) => {
  //   setDense(event.target.checked);
  // };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  const [visible, setVisible] = useState(false);
  if (props.Applications.errMess) return (
    <Container style={{ marginTop: "100px", backgroundColor: "#FCFAFB" }}>
      <div className='container'>
        <div className='row' style={{ display: 'flex', justifyContent: 'center', }}>
          <Alert style={{ margin: '50px', padding: '50px' }} severity="error">
            <AlertTitle style={{ fontWeight: 'bold' }}>Error</AlertTitle>
            <strong>{props.Applications.errMess}</strong>
          </Alert>
        </div>
      </div>

    </Container >

  )
  else if (props.Applications.isLoading) return (
    <Container style={{ marginTop: "100px", backgroundColor: "#FCFAFB" }}>
      <div class='container'>
        <div className='row'>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px', marginBottom: '75px' }}>
            <CircularProgress size={'50px'} />

          </div>
          <p style={{ textAlign: 'center', fontSize: '25px', fontWeight: 'bold' }}>Loading...</p>
        </div>
      </div>
    </Container>
  )
  else if (props.Applications.applications) {
    const applications = props.Applications.applications.filter(app => app.project._id === projectId && app.accepted)
    if (applications.length >= 1)
      return (
        <div className="container" style={{ marginTop: "10%" }}>
          <div className={classes.root}>
            <Paper className={classes.paper}>
              <EnhancedTableToolbar numSelected={selected.length} />
              <TableContainer>
                <Table
                  className={classes.table}
                  aria-labelledby="tableTitle"
                  // size={dense ? "small" : "medium"}
                  aria-label="enhanced table"
                >
                  <EnhancedTableHead
                    classes={classes}
                    numSelected={selected.length}
                    order={order}
                    orderBy={orderBy}
                    onSelectAllClick={handleSelectAllClick}
                    onRequestSort={handleRequestSort}
                    rowCount={rows.length}
                  />
                  <TableBody style={{ paddingLeft: "20px" }}>
                    {stableSort(applications, getComparator(order, orderBy))
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row, index) => {
                        const isItemSelected = isSelected(index);
                        const labelId = `enhanced-table-checkbox-${index}`;

                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            aria-checked={isItemSelected}
                            tabIndex={-1}
                            key={index}
                            selected={isItemSelected}
                          >
                            {/* <TableCell padding="checkbox">
                          <Checkbox
                            checked={isItemSelected}
                            inputProps={{ "aria-labelledby": labelId }}
                            onClick={(event) => handleClick(event, index)}
                          />
                        </TableCell> */}
                            <TableCell align="center">{row.volunteer.firstName + ' ' + row.volunteer.lastName}</TableCell>
                            <TableCell align="center">{row.volunteer.phoneNumber}</TableCell>
                            <TableCell align="center">{row.volunteer.emailAddress}</TableCell>
                            <TableCell align="center">{row.volunteer.address.city}</TableCell>
                            <TableCell>
                              <Button
                                variant="contained" color="primary"

                                onClick={() => {
                                  setSelectedVol(row)
                                  setVisible(true)
                                }
                                }
                              >
                                Evaluate
                              </Button>

                            </TableCell>
                          </TableRow>
                        );
                      })}
                    {/* {emptyRows > 0 && (
                  <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )} */}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
              {
                selectedVol &&
                <Modal
                  title="Evaluate Volunteer"
                  centered
                  visible={visible}
                  // mask={false}
                  maskStyle={{
                    backgroundColor: "rgba(0, 0, 0, 0.25)",
                  }}
                  destroyOnClose
                  onOk={() => setVisible(false)}
                  onCancel={() => setVisible(false)}
                  width={700}
                  footer={null}
                >
                  <EvalueateVolunteers app={selectedVol} />
                </Modal>
              }
            </Paper>
            {/* <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Dense padding"
        /> */}
          </div>
        </div>
      );
    else return (
      <Container style={{ marginTop: "100px", backgroundColor: "#FCFAFB" }}>
        <div className='container'>
          <div className='row' style={{ display: 'flex', justifyContent: 'center', }}>
            <Alert style={{ margin: '50px', padding: '50px' }} severity="info">
              <AlertTitle style={{ fontWeight: 'bold' }}>Oops..!</AlertTitle>
              <strong>No Applicants Found!</strong>
            </Alert>
          </div>
        </div>

      </Container >
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Volunteers)
