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
import ProjectDetail from "./ProjectDetail";
import { deleteProject, fetchProjects } from "../../../redux/ActionCreators/projectActions";
import { connect } from 'react-redux'
import { useEffect } from "react";
import { Alert, AlertTitle } from '@material-ui/lab';
import { CircularProgress, Container, Portal } from "@material-ui/core";
import { Dialog } from '@material-ui/core';
import { DialogActions } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { DialogContentText } from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';
import { Slide } from '@material-ui/core';

function createData(
  projectName,
  postedDate,
  PostedBy,
  deadline,
  location,
  activeVolunteers,
  applicant
) {
  return {
    projectName,
    postedDate,
    PostedBy,
    deadline,
    location,
    activeVolunteers,
    applicant,
  };
}

const rows = [
  createData("teaching", "today", "AAu", "today", "addis ababa", 100, 100),
  createData("teaching", "today", "AAu", "today", "addis ababa", 100, 100),
  createData("teaching", "today", "AAu", "today", "addis ababa", 100, 100),
  createData("teaching", "today", "AAu", "today", "addis ababa", 100, 100),
  createData("teaching", "today", "AAu", "today", "addis ababa", 100, 100),
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
    id: "Project Name",
    numeric: false,
    disablePadding: true,
    label: "Project Name",
  },

  {
    id: "Owner Organization",
    numeric: true,
    disablePadding: false,
    label: "Owner Organization",
  },
  {
    id: "Posted On",
    date: true,
    disablePadding: false,
    label: "Posted On",
  },
  { id: "Location", numeric: true, disablePadding: false, label: "Location" },
  { id: "Start Date", numeric: true, disablePadding: false, label: "Start Date" },
  { id: "End Date", numeric: true, disablePadding: false, label: "End Date" },


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
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
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
          Projects
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
    Projects: state.Projects,
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => dispatch(fetchProjects()),
  deleteProject: (projectId) => dispatch(deleteProject(projectId))
})
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function Projects(props) {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [selectedRow, setSelectedRow] = React.useState();
  const [open, setOpen] = React.useState(false)
  //const [selectedRow, setSelectedRow] = React.useState()
  
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleDialogClose = () => {
    setOpen(false)
  }

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
  useEffect(() => {
    props.fetchProjects()
  }, [])

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
  if (props.Projects.errMess) return (
    <Container style={{ marginTop: "100px", backgroundColor: "#FCFAFB" }}>
      <div className='container'>
        <div className='row' style={{ display: 'flex', justifyContent: 'center', }}>
          <Alert style={{ margin: '50px', padding: '50px' }} severity="error">
            <AlertTitle style={{ fontWeight: 'bold' }}>Error</AlertTitle>
            <strong>{props.Projects.errMess}</strong>
          </Alert>
        </div>
      </div>

    </Container >

  )
  else if (props.Projects.isLoading) return (
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

  else if (props.Projects.projects.length >= 1) return (
    <div className={classes.root}>
      {selectedRow &&
        <Dialog
          open={open}
          TransitionComponent={Transition}
          //keepMounted
          onClose={handleDialogClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Remove Item?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Do you really want to remove this item?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose}>CANCEL</Button>
            <Button onClick={() => {
              props.deleteProject(selectedRow._id)
              handleDialogClose()
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
            <TableBody>
              {stableSort(props.Projects.projects, getComparator(order, orderBy))
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
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ "aria-labelledby": labelId }}
                          onClick={(event) => handleClick(event, index)}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={row._id}
                        scope="row"
                        padding="none"
                      >
                        {row.name}
                      </TableCell>

                      <TableCell align="right">{row.ownerOrg.name}</TableCell>
                      <TableCell align="right">{new Date(row.createdAt).toDateString()}</TableCell>
                      <TableCell align="right">{row.location.city}</TableCell>
                      <TableCell align="right">{new Date(row.startDate).toDateString()}</TableCell>
                      <TableCell align="right">{new Date(row.endDate).toDateString()}</TableCell>
                      <TableCell>
                      <Button
                          type="primary"
                          onClick={() => {
                            setVisible(true);
                            setSelectedRow(row);
                          }}>
                          detail
                        </Button>

                      </TableCell>
                      <TableCell>
  
                        <Button

                          onClick={() => {
                            setSelectedRow(row)
                            handleClickOpen()
                          }
                          }
                          variant="contained"
                          color="secondary">
                          Delete
                        </Button>

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
          </Table>
        </TableContainer>
        {selectedRow && <Modal
          title="project detail"
          //centered
          visible={visible}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          width={800}
        >
          <ProjectDetail project={selectedRow} />
        </Modal>
        }
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
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  )
  else return (
    <Container style={{ marginTop: "100px", backgroundColor: "#FCFAFB" }}>
      <div className='container'>
        <div className='row' style={{ display: 'flex', justifyContent: 'center', }}>
          <Alert style={{ margin: '50px', padding: '50px' }} severity="error">
            <AlertTitle style={{ fontWeight: 'bold' }}>Error</AlertTitle>
            <strong>No Projects Found!</strong>
          </Alert>
        </div>
      </div>

    </Container >
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Projects)