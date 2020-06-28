import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import SnackBar from '../../atoms/SnackBar';
import { deleteCategory, getCategories } from '../../services/categoryServices';
import { connect } from 'react-redux';
import Spinner from '../../atoms/Spinner';
import IconButton from '@material-ui/core/IconButton';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      //   backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);
class index extends Component {
  constructor() {
    super();
    this.state = { categories: [], open: false, disabled: false };
  }
  /* delet=(id)=>{
    deleteCategory(id);
} */

  componentDidMount() {
    this.props.dispatch(getCategories());
  }

  render() {
    const {
      categories: { data, status },
    } = this.props;

    return (
      /*  <TableContainer>
        <Table
          style={{ margin: '10% auto', width: '500px' }}
          aria-label="customized table"
        > */
      <>
        {this.state.open && (
          <SnackBar path="/admin/dashboard" name="Category deleted" />
        )}
        {status === 'LOADING' ? (
          <Spinner />
        ) : (
          <TableContainer /* style={{ marginLeft: '17% ', marginTop: '7%' }} */>
            <Table
              style={{ marginTop: '7%', marginLeft: '250px', width: '76.8%' }}
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell data-testid="title" align="center">
                    Title
                  </StyledTableCell>
                  <StyledTableCell align="center">Edit</StyledTableCell>
                  <StyledTableCell align="center">Remove</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((category, key) => (
                  <StyledTableRow key={key}>
                    <StyledTableCell align="center">
                      {category.title}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Link
                        data-testid="linkToUpdate"
                        to={`/admin/update-category/${category._id}`}
                      >
                        <EditIcon name="update" />
                      </Link>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {/* <List align="right"> */}
                      {/* <ListItem
                      button
                      onClick={() => {
                        deleteCategory(category._id).then(
                          this.setState({
                            open: true,
                          })
                        );
                      }}
                    > */}
                      <IconButton
                        button
                        disabled={this.state.disabled}
                        onClick={() => {
                          deleteCategory(category._id).then(
                            this.setState({
                              open: true,
                              disabled: true,
                            })
                          );
                        }}
                      >
                        <RemoveCircleOutlineIcon />
                      </IconButton>
                      {/* </ListItem> */}
                      {/* </List> */}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories,
  };
}

export default withRouter(connect(mapStateToProps)(index));
index.propTypes = {
  history: PropTypes.object,
  categories: PropTypes.object,
  dispatch: PropTypes.func,
};
