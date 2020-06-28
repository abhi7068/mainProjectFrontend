import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import Box from '@material-ui/core/Box';
import EmailIcon from '@material-ui/icons/Email';
import './profile.css';
import SaveIcon from '@material-ui/icons/Save';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import TabPanel from '../../atoms/TabPanel';
import {
  getUserById,
  UpdateById,
  updateProfilePic,
} from '../../services/UserService';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import ImageUpload from '../../molecules/ImageUpload';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import DialogBox from '../../organisms/DialogBox';
const useStyles = {
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
  },

  font_Design: {
    color: 'text.primary',
  },
  tab_design: {
    color: 'black',
    height: 20,
    padding: '0 30px',
    margin: '0 20px',
  },
  show: {
    cursor: 'initial',
  },
  root: {
    flexGrow: 1,
    display: 'flex',
    height: 500,
    tecolor: 'white',
    align: 'center',
    padding: '50px 40px',
    // borderTop: '20px solid #313a43',
    // borderBottom: '20px solid #313a43',
    margin: 2,
  },
  text: {
    minWidth: 150,
    display: 'flex',
    border: '0 0 0 0',
    color: 'black',
    padding: 100,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};
class Profie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      openDialog: false,
      data: {},
      hidden: true,
    };
    this.onModelChange = this.onModelChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.sendDetails = this.sendDetails.bind(this);
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
    UpdateById(getResponseDetailsAfterParse.id, this.state.data);
    setTimeout(() => this.closeDialogBox(), 1000);
  }

  sendDetails() {
    const getResponseDetails = localStorage.getItem('storeResponseDetails');
    const getResponseDetailsAfterParse = JSON.parse(getResponseDetails);
    UpdateById(getResponseDetailsAfterParse.id, this.state.data);
  }

  showEdit() {
    const { hidden } = this.state;
    this.setState({
      hidden: !hidden,
    });
  }

  handleChange(event, newValue) {
    event.preventDefault();
    this.setState({
      value: newValue,
    });
  }

  onModelChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ data: { ...this.state.data, [name]: value } });
  }

  componentDidMount() {
    const getResponseDetails = localStorage.getItem('storeResponseDetails');

    if (getResponseDetails === null) {
    } else {
      const getResponseDetailsAfterParse = JSON.parse(getResponseDetails);

      if (
        getResponseDetailsAfterParse.isAdmin === false &&
        getResponseDetailsAfterParse.status === true
      ) {
        getUserById(getResponseDetailsAfterParse.id).then((res) => {
          this.setState({
            data: res.data,
          });
        });
      }
    }
  }

  render() {
    const { value, data } = this.state;
    //
    const { showEdit } = this;
    const { handleChange, sendDetails, onModelChange } = this;
    const { classes } = this.props;
    return (
      <div className="root" style={useStyles.root}>
        <Tabs
          className="tab"
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs"
        >
          <Tab
            className={classes.tab_design}
            label={
              <Typography className="a">
                {' '}
                Welcome <br />
                <hr />
                <hr />
                {data.name}
              </Typography>
            }
          />
          <Tab
            className={classes.tab_design}
            label={<a className="a">Edit Your profile</a>}
          />
          <Tab
            label={<a className="a">yoyo balance</a>}
            className={classes.tab_design}
          />
          <Tab
            className={classes.tab_design}
            label={<a className="a">sent order</a>}
          />
          <Tab
            className={classes.tab_design}
            label={<a className="a">recieved history</a>}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Grid container spacing={3} alignItems="flex-end">
            <Grid item style={{ float: 'right' }}>
              <Avatar
                alt="Cindy Baker"
                type=""
                // src={data.profilePictrue}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSkkolxSNKrb80PEcRLo2ocTotIoM1TmxA_U02TJrM0UGSdwP9H&usqp=CAU"
                style={{ width: '90px', height: '100px', float: 'right' }}
                onChange={onModelChange}
                placeholder="Cindy Baker"
              />
            </Grid>
          </Grid>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Gift the products as a gift card! When you purchase, there wil
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            be a form to indicate who the gift is for, and you can send gift
            cards to
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            your friend. Buying for a member or not a member, do not worry we
            will send them{' '}
            <span style={{ color: 'skyblue' }}>registration link </span>
            also.
          </Typography>
          <Typography variant="body2" component="p">
            <br />
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div>
            <Grid container spacing={3} alignItems="flex-end">
              <Grid item style={{ float: 'right' }}>
                <Avatar
                  alt="Cindy Baker"
                  type=""
                  src={data.profilePictrue}
                  /* src="https://thumbs.dreamstime.com/z/default-avatar-placeholder-profile-icon-male-eps-file-easy-to-edit-default-avatar-placeholder-profile-icon-male-139556753.jpg" */
                  style={{ width: '90px', height: '100px', float: 'right' }}
                  onChange={onModelChange}
                  placeholder="Cindy Baker"
                />
              </Grid>
              <Grid>
                {this.state.hidden ? (
                  <IconButton
                    tooltip="Description here"
                    hoveredStyle={classes.show}
                  >
                    <EditIcon onClick={showEdit}>Edit</EditIcon>
                  </IconButton>
                ) : (
                  <ImageUpload
                    imgData={data.profilePictrue}
                    changeUrl={(newUrl) => {
                      const getResponseDetails = localStorage.getItem(
                        'storeResponseDetails'
                      );
                      const getResponseDetailsAfterParse = JSON.parse(
                        getResponseDetails
                      );
                      updateProfilePic(getResponseDetailsAfterParse.id, newUrl);
                      this.setState({
                        data: {
                          ...this.state.data,
                          profilePictrue: newUrl.urlLink,
                        },
                        hidden: true,
                      });
                      console.log(
                        'Your profile pic that needs to be updated',
                        newUrl,
                        'data'
                      );
                    }}
                  />
                )}
              </Grid>
            </Grid>
          </div>
          <div>
            <br />
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>

              <Grid item>
                <TextField
                  name="name"
                  type="text"
                  onChange={onModelChange}
                  placeholder="Name"
                  value={data.name}
                />
              </Grid>
            </Grid>
            {/* <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>

              <Grid item>
                <TextField
                  name="password"
                  type="text"
                  hidden={true}
                  secureTextEntry={true}
                  onChange={onModelChange}
                  placeholder="password"
                  // value={data.password}
                />
            </Grid>
              </Grid> */}
          </div>

          {/* <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <LocalPhoneIcon />
              </Grid>
              <Grid item>
                <TextField
                  name="phone"
                  type="number"
                  // onChange={onModelchange}
                  placeholder="Phone"
                />
              </Grid>
            </Grid>
          </div> */}

          <div className>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <EmailIcon />
              </Grid>
              <Grid item>
                <TextField
                  id="input-with-icon-grid"
                  name="email"
                  type="text"
                  onChange={onModelChange}
                  placeholder="Email"
                  value={data.email}
                />
              </Grid>
            </Grid>
          </div>

          <br />
          <Button
            style={{ float: 'right', backgroundColor: 'skyblue' }}
            className={classes.button}
            onClick={sendDetails}
            variant="contained"
            size="small"
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
        </TabPanel>
        <TabPanel value={value} spacing={2} index={0}></TabPanel>
        <TabPanel value={value} index={2}>
          <Typography>
            YOYO Balance
            <br /> {data.yoyobalance}
            <br />
            <br />
            <Button
              className={classes.button}
              style={{ float: 'right', backgroundColor: 'skyblue' }}
              variant="contained"
              size="small"
              onClick={this.openDialogBox}
            >
              Add Points
            </Button>
          </Typography>
          <DialogBox
            open={this.state.openDialog}
            closeDialogBox={this.closeDialogBox}
            updatePoints={this.updatePoints}
          ></DialogBox>
        </TabPanel>
        <TabPanel value={value} index={3}>
          {data.sentdHistory ? (
            <Typography>{data.sentdHistory}</Typography>
          ) : (
            <div>
              <Grid container spacing={3} alignItems="flex-end">
                <Grid item style={{ float: 'right' }}>
                  <Avatar
                    type=""
                    // src={data.profilePictrue}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSkkolxSNKrb80PEcRLo2ocTotIoM1TmxA_U02TJrM0UGSdwP9H&usqp=CAU"
                    style={{ width: '90px', height: '100px' }}
                  />
                  <br />
                  <Typography className={classes.title} gutterBottom>
                    You have not sent any gift card! Please send .
                    <hr />
                    <br />
                    <Button
                      className={classes.button}
                      style={{ float: 'right', backgroundColor: 'skyblue' }}
                      variant="contained"
                      size="small"
                    >
                      click for send
                    </Button>
                  </Typography>
                </Grid>
              </Grid>
            </div>
          )}
        </TabPanel>
        <TabPanel value={value} index={4}>
          {data.receivedHistory ? (
            <Typography>{data.receivedHistory}</Typography>
          ) : (
            <Typography className={classes.title} color="primary" gutterBottom>
              You have not sent any gift card! Please send .
              <hr />
              <br />
            </Typography>
          )}
        </TabPanel>
      </div>
    );
  }
}
Profie.propTypes = {
  classes: PropTypes.object,
  root: PropTypes.object,
  margin: PropTypes.object,
  tab_design: PropTypes.string,
  newUrl: PropTypes.object,
};

export default withStyles(useStyles)(Profie);
