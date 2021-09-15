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
import { Button, Grid } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { Modal } from "antd";
import ApplicantDetail from "./ApplicantDetail";
import { connect } from 'react-redux'
import { fetchOrgs } from "../../../redux/ActionCreators/orgActions";
import { useEffect } from "react";
import { Alert, AlertTitle } from '@material-ui/lab';
import { CircularProgress, Container, Portal } from "@material-ui/core";

const mapStateToProps = (state) => {
  return {
    Organizations: state.Organizations,
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchOrgs: () => dispatch(fetchOrgs()),
})


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
    id: "org_Name",
    numeric: false,
    disablePadding: false,
    label: "Org Name",
  },

  {
    id: "phone",
    numeric: true,
    disablePadding: false,
    label: "Phone Number",
  },
  { id: "email", numeric: true, disablePadding: false, label: "Email address" },
  { id: "address", numeric: true, disablePadding: false, label: "address" },
  {
    id: "legalDoc",
    numeric: false,
    disablePadding: false,
    label: "Legal Document ",
  },
  {
    id: "locations",
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
      <Typography
        className={classes.title}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Organization
      </Typography>
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

function Applicants(props) {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [selectedRow, setSelectedRow] = React.useState();

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = props.Organizations.organizations.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };
  useEffect(() => {
    props.fetchOrgs()
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
    rowsPerPage - Math.min(rowsPerPage, props.Organizations.organizations.length - page * rowsPerPage);
  const [visible, setVisible] = useState(false);
  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };
  if (props.Organizations.errMess) return (
    <Container style={{ marginTop: "100px", backgroundColor: "#FCFAFB" }}>
      <div className='container'>
        <div className='row' style={{ display: 'flex', justifyContent: 'center', }}>
          <Alert style={{ margin: '50px', padding: '50px' }} severity="error">
            <AlertTitle style={{ fontWeight: 'bold' }}>Error</AlertTitle>
            <strong>{props.Organizations.errMess}</strong>
          </Alert>
        </div>
      </div>

    </Container >

  )
  else if (props.Organizations.isLoading) return (
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

  else if (props.Organizations.organizations.filter(org => !org.isApproved).length >= 1) return  (
    <div className={classes.root}>
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
              rowCount={props.Organizations.organizations.length}
            />
            <TableBody>
              {stableSort(props.Organizations.organizations.filter(org => !org.isApproved), getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(index);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <>
                      <TableRow
                        // clicking the row set the modal visible
                        onClick={() => {
                          setVisible(true);
                          setSelectedRow(row);
                        }}
                        hover
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row._id}
                        selected={isItemSelected}

                      >
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.phoneNumber}</TableCell>
                        <TableCell align="right">{row.emailAddress}</TableCell>
                        <TableCell align="right">{row.address.city}</TableCell>
                        <TableCell align="center">
                          {<a href={row.legalDoc}>Legal Doc</a>}
                        </TableCell>
                        <TableCell display="flex">
                          <Button type="primary" style={{backgroundColor:"green"}}>Approve</Button>
                        </TableCell>
                      </TableRow>
                    </>
                  );
                })}
              {/* this modal pops up when the row is cliked*/}
              {selectedRow && <div>
                <Portal>
                  <div>
                    <Modal
                      // closable
                      title="Organization Detail..."
                      style={{alignSelf:'flex-end'}}
                      onClose={handleClose}
                      visible={visible}
                      onOk={() => setVisible(false)}
                      onCancel={() => setVisible(false)}
                      width={900}
                    >
                      <ApplicantDetail org={selectedRow} />
                    </Modal>
                  </div>
                </Portal>
              </div>}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={props.Organizations.organizations.length}
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
          <strong>No Organizations Found!</strong>
        </Alert>
      </div>
    </div>

  </Container >
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(Applicants)