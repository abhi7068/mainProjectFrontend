import React, { Component } from 'react';
import { getUsers } from '../../services/UserService';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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

export default class ListUsers extends Component {
  constructor() {
    super();
    this.state = { users: [] };
  }

  componentDidMount() {
    getUsers().then((res) => {
      this.setState({ users: res.data });
    });
  }

  render() {
    return (
      <TableContainer /* style={{ margin: '15% auto', width: '700px' }} */>
        <Table style={{ marginTop: '7%', marginLeft: '192px', width: '84.8%' }}>
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Email Id</StyledTableCell>
              <StyledTableCell align="center">Yoyo Balance</StyledTableCell>
              <StyledTableCell align="center">Is Admin?</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.users.map((user, key) => (
              <StyledTableRow key={key}>
                <StyledTableCell align="center"> {user.name}</StyledTableCell>
                <StyledTableCell align="center">{user.email}</StyledTableCell>
                <StyledTableCell align="center">
                  {user.yoyobalance}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {user.isAdmin ? 'yes' : 'No'}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
