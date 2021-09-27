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
import { Button, Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import FilterListIcon from "@material-ui/icons/FilterList";
import { Modal } from "antd";
import jwtDecode from "jwt-decode";
import ClearIcon from "@material-ui/icons/Clear";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import { Link } from "react-router-dom";
import { deleteProject, fetchProjects } from "../../redux/ActionCreators/projectActions";
import { connect } from "react-redux";
import { useEffect } from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import { CircularProgress, Container, Portal } from "@material-ui/core";
import { Dialog } from '@material-ui/core';
import { DialogActions } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { DialogContentText } from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';
import { Slide } from '@material-ui/core';

function createData(title, status, actions) {
  return { title, status, actions };
}

const rows = [
  createData("Teaching", "In Progress"),
  createData("Teaching", "In Progress"),
  createData("Teaching", "In Progress"),
  createData("Teaching", "In Progress"),
  createData("Teaching", "In Progress"),
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
    id: "Project-title",
    numeric: false,
    disablePadding: true,
    label: "Project Title",
  },

  { id: "status", numeric: true, disablePadding: false, label: "Start Date" },

  // {
  //   id: "areas",
  //   numeric: true,
  //   disablePadding: false,
  //   label: "applied to project- ",
  // },
  {
    id: "actions",
    numeric: false,
    disablePadding: false,
    label: "Actions ",
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
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.id === "actions" ? "center" : "left"}
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
  headerTooltip: {
    display: "flex",
    padding: "0 5px",
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
      {/* {numSelected > 0 ? (
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
          Applicants
        </Typography>
      )} */}

      {numSelected > 0 ? (
        <div className={classes.headerTooltip}>
          <Tooltip title="accept selected applicants">
            <IconButton aria-label="delete">
              <DoneAllIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="decline selected applicants">
            <IconButton aria-label="delete">
              <ClearIcon />
            </IconButton>
          </Tooltip>
        </div>
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
    maxWidth: "100%",
    // backgroundColor:"#e3e3e3"
    paddingLeft: "15px",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    // minWidth: "px",
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
    Projects: state.Projects,
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => dispatch(fetchProjects()),
  deleteProject: (projectId) => dispatch(deleteProject(projectId))
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function OrgProjectCard(props) {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [selectedRow, setSelectedRow] = React.useState();
  const [open, setOpen] = React.useState(false)
  // const [myProjects, setMyProjects] = useState([])
  const decoded = props.auth.token
    ? jwtDecode(props.auth.token)
    : { role: "" };
  //const [selectedRow, setSelectedRow] = React.useState()
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    props.fetchProjects()
    console.log(props.Projects.projects)
    // setMyProjects()
    console.log(myProjects)
  }, [])

  const myProjects = props.Projects.projects.filter(project =>
    project.ownerOrg._id === decoded._id
  )

  console.log({myProjects});
  console.log(props.Projects.projects);

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

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  const [visible, setVisible] = useState(false);
  if (props.Projects.errMess)
    return (
      <Container style={{ marginTop: "100px", backgroundColor: "#FCFAFB" }}>
        <div className="container">
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Alert style={{ margin: "50px", padding: "50px" }} severity="error">
              <AlertTitle style={{ fontWeight: "bold" }}>Error</AlertTitle>
              <strong>{props.Projects.errMess}</strong>
            </Alert>
          </div>
        </div>
      </Container>
    );
  else if (props.Projects.isLoading)
    return (
      <Container style={{ marginTop: "100px", backgroundColor: "#FCFAFB" }}>
        <div class="container">
          <div className="row">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "100px",
                marginBottom: "75px",
              }}
            >
              <CircularProgress size={"50px"} />
            </div>
            <p
              style={{
                textAlign: "center",
                fontSize: "25px",
                fontWeight: "bold",
              }}
            >
              Loading...
            </p>
          </div>
        </div>
      </Container>
    );
  else if (props.Projects.projects.length >= 1)
    return (
      <div className={classes.root}>
        {selectedRow &&
          <Dialog
            open={open}
            TransitionComponent={Transition}
            //keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"Remove Item?"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Do you really want to remove this item?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>CANCEL</Button>
              <Button onClick={() => {
                props.deleteProject(selectedRow._id)
                handleClose()
              }
              }>REMOVE</Button>
            </DialogActions>
          </Dialog>
        }

        <Paper className={classes.paper}>
          <EnhancedTableToolbar numSelected={selected.length} />
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
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
             {myProjects.length >= 1  &&
                <TableBody style={{ paddingLeft: "20px" }}>
                  {stableSort(
                    myProjects,
                    getComparator(order, orderBy)
                  )
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const isItemSelected = isSelected(index);
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <TableRow
                          onClick={() => {
                            setSelectedRow(row);
                          }}
                          hover
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          // onClick={() => setVisible(true)}
                          key={index}
                          selected={isItemSelected}
                        >
                          <TableCell
                          // style={{
                          //   cursor: "pointer",
                          // }}
                          // component="th"
                          // id={labelId}
                          // scope="row"
                          // onClick={() => setVisible(true)}
                          >
                            {row.name}
                          </TableCell>

                          <TableCell align="left">
                            {new Date(row.startDate).toDateString()}
                          </TableCell>

                          <TableCell
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <Grid
                              container
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <Grid
                                item
                                style={{
                                  // backgroundColor: "green",
                                  borderRadius: "5px",
                                }}
                              >
                                <Link
                                  to={`/organization/applicants/${row._id}`}
                                  style={{ textDecoration: "none" }}
                                >
                                  <Button
                                    style={{ borderRadius: 5 }}
                                    class="btn-outline-blue-sm"
                                    variant="contained"
                                    color="primary"
                                  >
                                    Applicants
                                  </Button>
                                </Link>
                              </Grid>

                              <Grid
                                item
                                style={{
                                  borderRadius: "5px",
                                  marginLeft: "5px",
                                }}
                              >
                                <Link
                                  to={`/organization/volunteers/${row._id}`}
                                  style={{ textDecoration: "none" }}
                                >
                                  <Button
                                    style={{ borderRadius: 5 }}
                                    class="btn-solid-sm"
                                    variant="contained"
                                    color="secondary"
                                  >
                                    Volunteers
                                  </Button>
                                </Link>
                              </Grid>
                              <Grid
                                item
                                style={{
                                  borderRadius: "5px",
                                  marginLeft: "5px",
                                }}
                              >
                                <span className="m-2">
                                  <Link to={`/organization/editProject/${row._id}`}>
                                    <EditIcon
                                      color="primary" />
                                  </Link>
                                </span>
                                <span style={{ cursor: 'pointer' }} className="m-2">
                                  <DeleteIcon
                                    onClick={() => {
                                      setSelectedRow(row)
                                      handleClickOpen()
                                    }
                                    }
                                    style={{ color: "orangered" }} />
                                </span>
                              </Grid>
                            </Grid>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              }
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
        </Paper>
        {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
      </div>
    );
  else
    return (
      <Container style={{ marginTop: "100px", backgroundColor: "#FCFAFB" }}>
        <div className="container">
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Alert style={{ margin: "50px", padding: "50px" }} severity="info">
              <AlertTitle style={{ fontWeight: "bold" }}>Oops..!</AlertTitle>
              <strong>No Projects Found!</strong>
            </Alert>
          </div>
        </div>
      </Container>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(OrgProjectCard);
