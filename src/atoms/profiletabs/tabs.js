import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { Avatar } from '@material-ui/core';
// import Typography from '@material-ui/core/Typography';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import CallReceivedIcon from '@material-ui/icons/CallReceived';
import TabPanel from '../../atoms/TabPanel';
import './tabs.css';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
/* eslint-disable no-unused-vars */
// import * as moment from 'moment';
/* eslint-enable no-unused-vars */
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    width: '600px',
    marginTop: '20px',
    padding: '0px 0px 0px 0px',
    color: theme.palette.text.secondary,
  },
  papers: {
    padding: theme.spacing(2),
    textAlign: 'center',
    width: '600px',
    color: theme.palette.text.secondary,
  },
  paper3: {
    fontSize: '1rem',

    color: 'grey',
  },
}));

function IconLabelTabs(props) {
  const classes = useStyles();
  function time(date) {
    //   console.log("")
    var d = new Date(Date.parse(date)).toString();

    var index = d.lastIndexOf(':') - 5;
    return d.substring(0, index);
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let i = 1;
  let j = 1;

  return (
    <>
      {/* <Paper style={{ width: '100%' }} className={classes.root}> */}
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg" className={classes.root}>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Grid item xs direction="column" spacing={3}>
              <Grid item xs>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  // variant="fullWidth"
                  indicatorColor="secondary"
                  textColor="secondary"
                  aria-label="icon label tabs example"
                >
                  <Tab icon={<BookmarkBorderIcon />} label="SendHistory" />
                  <Tab icon={<CallReceivedIcon />} label="RecievedHistory" />
                </Tabs>
                <TabPanel className="tabPanel" value={value} index={0}>
                  {props.singleUser.data.sentHistory &&
                  props.singleUser.data.sentHistory.length <= 0 ? (
                      <paper className={classes.paper3}>
                      Opps send history is empty
                      </paper>
                    ) : (
                      <div className={classes.root}>
                        <Grid
                          container
                          // spacing={2}
                          item
                          xs
                          direction="row"
                          spacing={3}
                        >
                          <Grid item xs={12} lg={12} sm={12} className="grid">
                            <ThemeProvider>
                              {' '}
                              {/* <Paper
                  className={classes.papers}
                  style={{ width: '550px', marginTop: '15px' }}
                ></Paper> */}
                              {props.singleUser.data.sentHistory ? (
                                <>
                                  {props.singleUser.data.sentHistory.map(
                                    (item) => (
                                      <div key={item._id}>
                                        {item.products.map((sub, index) => {
                                        // console.log("")
                                        // console.log("")
                                          return (
                                            <div key={sub._id}>
                                              {sub.product &&
                                            sub.product.reviews ? (
                                                  <div key={sub.product._id}>
                                                    <Grid container spacing={0}>
                                                      <Grid item xs={12}>
                                                        <Typography
                                                          style={{
                                                            textAlign: 'left',
                                                          }}
                                                        >
                                                          <span>
                                                            {' '}
                                                        Order No - {i++}
                                                          </span>
                                                          <div>
                                                        Date:{' '}
                                                            {time(item.sent_at)}
                                                          </div>
                                                        </Typography>
                                                      </Grid>
                                                    </Grid>
                                                    <TableBody>
                                                      <Avatar
                                                        style={{
                                                          height: '100px',
                                                          width: '100px',
                                                        }}
                                                        type=""
                                                        src="https://thumbs.dreamstime.com/z/default-avatar-placeholder-profile-icon-male-eps-file-easy-to-edit-default-avatar-placeholder-profile-icon-male-139556753.jpg"
                                                        placeholder="Cindy Baker"
                                                      />

                                                      <TableCell
                                                        className="table-text"
                                                        style={{
                                                          borderBottom: 'none',
                                                          verticalAlign: 'textTop',
                                                        }}
                                                      >
                                                        <span className="text-design">
                                                          {sub.product.product_name}
                                                        </span>
                                                      </TableCell>
                                                      <TableRow>
                                                        <TableCell
                                                          style={{
                                                            borderBottom: 'none',
                                                            verticalAlign:
                                                          'textTop',
                                                            textDecoration: 'none',
                                                          }}
                                                        >
                                                          <span>Discription</span>{' '}
                                                          <br />
                                                          {sub.product.description}
                                                        </TableCell>
                                                        <TableCell
                                                          style={{
                                                            borderBottom: 'none',
                                                          }}
                                                        >
                                                          <span>price</span> <br />
                                                          {sub.product.price}
                                                        </TableCell>
                                                      </TableRow>
                                                      {/* </paper> */}
                                                    </TableBody>
                                                    <hr />
                                                  </div>
                                                ) : null}
                                            </div>
                                          );
                                        })}
                                      </div>
                                    )
                                  )}
                                </>
                              ) : (
                                <div>
                                  <Typography>
                                  You have not sent any gift card! Please send .
                                    <hr />
                                  </Typography>
                                </div>
                              )}
                            </ThemeProvider>
                          </Grid>
                        </Grid>
                      </div>
                    )}
                </TabPanel>
                {/* This is received history details */}
                <TabPanel className="tabPanel" value={value} index={1}>
                  {props.singleUser.data.receivedHistory &&
                  props.singleUser.data.receivedHistory.length <= 0 ? (
                      <paper className={classes.paper3}>
                      Opps received history is empty
                      </paper>
                    ) : (
                      <div className={classes.root}>
                        <Grid container spacing={2} alignItems="flex-end">
                          <Grid item xs={12} lg={12} sm={8} className="grid">
                            {' '}
                            {/* <Paper
                  className={classes.papers}
                  style={{ width: '550px', marginTop: '15px' }}
                ></Paper> */}
                            {props.singleUser.data.receivedHistory ? (
                              <div>
                                {props.singleUser.data.receivedHistory.map(
                                  (item) => (
                                    <div key={item._id}>
                                      {item.products.map((sub) => {
                                      // console.log("")
                                      // console.log("")
                                        return (
                                          <div key={sub._id}>
                                            {sub.product &&
                                          sub.product.reviews ? (
                                                <div key={sub.product._id}>
                                                  <Grid
                                                    container
                                                    spacing={0}
                                                    alignItems="flex-end"
                                                  >
                                                    <Grid item xs={12}>
                                                      <Typography
                                                        style={{
                                                          textAlign: 'left',
                                                        }}
                                                      >
                                                        <span>
                                                          {' '}
                                                      Order No - {j++}
                                                        </span>
                                                        <div>
                                                      Date:{' '}
                                                          {time(item.redeemedAt)}
                                                        </div>
                                                      </Typography>
                                                    </Grid>
                                                  </Grid>
                                                  <TableBody>
                                                    <Avatar
                                                      style={{
                                                        height: '100px',
                                                        width: '100px',
                                                      }}
                                                      type=""
                                                      src="https://thumbs.dreamstime.com/z/default-avatar-placeholder-profile-icon-male-eps-file-easy-to-edit-default-avatar-placeholder-profile-icon-male-139556753.jpg"
                                                      // onChange={onModelChange}
                                                      placeholder="Cindy Baker"
                                                    />
                                                    <paper className="tableRow">
                                                      <TableCell
                                                        className="table-text"
                                                        style={{
                                                          borderBottom: 'none',
                                                          verticalAlign: 'textTop',
                                                        }}
                                                      >
                                                        <span className="text-design">
                                                          {/* Product Name */}

                                                          {sub.product.product_name}
                                                        </span>
                                                      </TableCell>

                                                      <TableRow>
                                                        <TableCell
                                                          style={{
                                                            borderBottom: 'none',
                                                            verticalAlign:
                                                          'textTop',
                                                            textDecoration: 'none',
                                                          }}
                                                        >
                                                          <span>Discription</span>{' '}
                                                          <br />
                                                          {sub.product.description}
                                                        </TableCell>
                                                        <TableCell
                                                          style={{
                                                            borderBottom: 'none',
                                                            verticalAlign:
                                                          'textTop',
                                                            textDecoration: 'none',
                                                          }}
                                                        >
                                                          <span>price</span> <br />
                                                          {sub.product.price}
                                                        </TableCell>

                                                        {/*  <TableCell
                                                      style={{
                                                        borderBottom: 'none',
                                                        verticalAlign:
                                                          'textTop',
                                                        textDecoration: 'none',
                                                      }}
                                                    >
                                                      <span>Redeemed</span>{' '}
                                                      <br />
                                                      {item.redeemedAt}
                                                    </TableCell> */}
                                                      </TableRow>
                                                    </paper>
                                                  </TableBody>
                                                  <hr />
                                                </div>
                                              ) : null}
                                          </div>
                                        );
                                      })}
                                    </div>
                                  )
                                )}
                              </div>
                            ) : (
                              <div>
                                <Typography>
                                You do not have any received gifts .
                                  <hr />
                                  <br />
                                </Typography>
                              </div>
                            )}
                          </Grid>
                        </Grid>
                      </div>
                    )}
                </TabPanel>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    </>
  );
}

function mapStateToProps(state) {
  // console.log("")
  return {
    cart: state.cart,
    userDetails: state.userDetails,
    singleUser: state.singleUserDetail,
  };
}
IconLabelTabs.propTypes = {
  history: PropTypes.object,
  dispatch: PropTypes.func,
  classes: PropTypes.object,
  singleUser: PropTypes.array,
};
export default connect(mapStateToProps)(IconLabelTabs);
