import React, { Component } from 'react';
import Tabs from '../../atoms/profiletabs/tabs';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import DialogBox from '../../organisms/DialogBox';
import ImageUpload from '../../molecules/ImageUpload';
import {
  getUserById,
  updateyoyobalance,
  updateProfilePic,
} from '../../services/UserService';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import {
  CardHeader,
  Typography,
  CardContent,
  Card,
  IconButton,
  Button,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DialogEdit from '../../atoms/PopUpProfile';
import { dialogOpen } from '../../store/actions/PopUpAction';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
// import { getUserById } from '../../services/UserService';
/* import CardMedia from '@material-ui/core/CardMedia'; */
import Spinner from '../../atoms/Spinner';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
// import { initializeApp } from 'firebase';
import Container from '@material-ui/core/Container';
import './profile.css';
const styles = (theme) => ({
  root: {
    //  maxWidth: 500,
    //  minWidth: '900px',
  },
});

class pro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialog: false,
      hidden: true,
      data: { yoyobalance: '' },
    };
    this.showEdit = this.showEdit.bind(this);
    this.closeDialogBox = this.closeDialogBox.bind(this);
    this.openDialogBox = this.openDialogBox.bind(this);
    this.updatePoints = this.updatePoints.bind(this);
  }

  closeDialogBox() {
    this.setState((prevState) => ({ ...prevState, openDialog: false }));
  }

  openDialogBox() {
    this.setState((prevState) => ({ ...prevState, openDialog: true }));
  }

  updatePoints(newPoints) {
    this.setState((prevState) => {
      return {
        ...prevState,
        data: {
          ...prevState.data,
          yoyobalance: +prevState.data.yoyobalance + +newPoints,
        },
      };
    });

    const getResponseDetails = localStorage.getItem('storeResponseDetails');
    const getResponseDetailsAfterParse = JSON.parse(getResponseDetails);
    // UpdateById(getResponseDetailsAfterParse.id, this.state.data);
    updateyoyobalance(getResponseDetailsAfterParse.id, this.state.data);
    setTimeout(() => this.closeDialogBox(), 1000);
  }

  // const classes = useStyles();
  componentDidMount() {
    const getResponseDetails = localStorage.getItem('storeResponseDetails');

    if (getResponseDetails === null) {
    } else {
      const getResponseDetailsAfterParse = JSON.parse(getResponseDetails);

      if (
        getResponseDetailsAfterParse.isAdmin === false &&
        getResponseDetailsAfterParse.status === true
      ) {
        this.props.dispatch(getUserById(getResponseDetailsAfterParse.id));
      }
    }
  }

  componentDidUpdate(nextProps) {
    if (
      this.props.singleUser.data.yoyobalance !==
      nextProps.singleUser.data.yoyobalance
    ) {
      this.setState((prevState) => {
        return {
          ...prevState,
          data: {
            ...prevState.data,
            yoyobalance: this.props.singleUser.data.yoyobalance,
          },
        };
      });
    }
  }

  showEdit() {
    const { hidden } = this.state;
    this.setState({
      hidden: !hidden,
    });
  }

  render() {
    const { classes } = this.props;
    const { showEdit } = this;

    const {
      singleUser: { data, status },
    } = this.props;
    return (
      <>
        <DialogEdit />
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="sm">
            <Grid style={{ marginTop: '3%' }} container spacing={3}>
              <Grid item xs={3}>
                <img
                  className="image"
                  src={data.profilePictrue}
                  alt="Cindy Baker"
                ></img>
                {this.state.hidden ? (
                  <IconButton
                    class="edit-icon"
                    tooltip="Description here"
                    //   hoveredStyle={classes.show}
                  >
                    <EditIcon onClick={showEdit}>Edit</EditIcon>
                  </IconButton>
                ) : (
                  <ImageUpload
                    imgData={data.profilePictrue}
                    changeUrl={(newUrl) => {
                      /*  window.location.reload(false); */
                      const getResponseDetails = localStorage.getItem(
                        'storeResponseDetails'
                      );
                      const getResponseDetailsAfterParse = JSON.parse(
                        getResponseDetails
                      );
                      updateProfilePic(getResponseDetailsAfterParse.id, newUrl);

                      console.log(
                        'Your profile pic that needs to be updated',
                        newUrl,
                        'data'
                      );
                    }}
                  />
                )}
              </Grid>
              <Grid item>
                {status === 'LOADING' ? (
                  <Spinner />
                ) : (
                  <>
                    <Card className={classes.root}>
                      <CardHeader
                        /// className="card"
                        titleTypographyProps={{ variant: 'h5' }}
                        subheaderTypographyProps={{ variant: 'h5' }}
                        style={{
                          textAlign: 'left',
                        }}
                        title={data.name}
                        subheader={data.email}
                        avatar={
                          <IconButton
                            onClick={() => this.props.dispatch(dialogOpen())}
                          >
                            <EditIcon />
                          </IconButton>
                        }
                      />

                      <CardContent style={{ textAlign: 'left' }}>
                        <Typography
                          variant="body2"
                          color="secondary"
                          component="p"
                        >
                          <List>
                            <ListItem>
                              <ListItemIcon>
                                <AccountBalanceWalletIcon />
                              </ListItemIcon>
                              <ListItemText
                                primary={`Yoyobalance ${this.state.data.yoyobalance}`}
                              />
                            </ListItem>

                            <ListItem button>
                              {' '}
                              <Button
                                data-testId="button"
                                size="small"
                                variant="contained"
                                style={{ backgroundColor: 'skyBlue' }}
                                onClick={this.openDialogBox}
                              >
                                ADD MORE
                              </Button>
                              <DialogBox
                                open={this.state.openDialog}
                                closeDialogBox={this.closeDialogBox}
                                updatePoints={this.updatePoints}
                              ></DialogBox>
                            </ListItem>
                          </List>
                        </Typography>
                      </CardContent>
                    </Card>
                  </>
                )}
              </Grid>
            </Grid>
            <Grid style={{ marginTop: '3%' }} container spacing={3}>
              <Grid item xs={5}>
                <Tabs className="card7" />
              </Grid>
            </Grid>
          </Container>
        </React.Fragment>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    userDetails: state.userDetails,
    singleUser: state.singleUserDetail,
  };
}
pro.propTypes = {
  history: PropTypes.object,
  dispatch: PropTypes.func,
  classes: PropTypes.object,
  singleUser: PropTypes.array,
};

export default connect(mapStateToProps)(withStyles(styles)(pro));
