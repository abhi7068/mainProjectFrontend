import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  getProducts,
  deleteProductById,
} from '../../../services/productService';
import { IconButton } from '@material-ui/core';

import SnackBar from '../../../atoms/SnackBar';
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
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);
export default class index extends Component {
  constructor() {
    super();
    this.state = { products: [], open: false, disabled: false };
  }

  deleteProduct(id) {
    deleteProductById(id).then(
      this.setState({
        open: true,
        disabled: true,
      })
    );
  }

  componentDidMount() {
    getProducts().then((res) => {
      this.setState({ products: res.data });
    });
  }

  render() {
    return (
      <>
        {this.state.open && (
          <SnackBar path="/admin/dashboard" name="Product deleted" />
        )}
        <TableContainer /* style={{ marginLeft: '17.5% ', marginTop: '7%' }} */>
          <Table
            style={{ marginTop: '7%', marginLeft: '250px', width: '75.8%' }}
          >
            <TableHead>
              <TableRow>
                <StyledTableCell>Product Name</StyledTableCell>
                <StyledTableCell align="center">Description</StyledTableCell>
                <StyledTableCell align="center">Price</StyledTableCell>
                <StyledTableCell align="center">Discount</StyledTableCell>
                <StyledTableCell align="center">Category</StyledTableCell>
                <StyledTableCell align="center">Edit</StyledTableCell>
                <StyledTableCell align="center">Remove</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.products.map((product, key) => (
                <StyledTableRow key={key}>
                  <StyledTableCell align="center">
                    {' '}
                    {product.product_name}
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    {product.description}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {product.price}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {product.discount}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {product.category ? product.category.title : ''}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Link to={`/admin/updateproduct/${product._id}`}>
                      <EditIcon />
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <IconButton
                      button
                      disabled={this.state.disabled}
                      onClick={this.deleteProduct.bind(this, product._id)}
                    >
                      <RemoveCircleOutlineIcon name="delete" />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
}
