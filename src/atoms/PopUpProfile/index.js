import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { connect } from 'react-redux';
import { Alert, AlertTitle } from '@material-ui/lab';

import { dialogClose } from '../../store/actions/PopUpAction';
import { UpdateById, UpdateByName } from '../../services/UserService';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import InputComponent from '../InputComponent';
import './index.css';
class FormDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      data: {},
      error: '',
    };
    // this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClose() {
    this.props.dispatch(dialogClose());
  }

  handleSubmit(values) {
    //
    const getResponseDetails = localStorage.getItem('storeResponseDetails');
    const getResponseDetailsAfterParse = JSON.parse(getResponseDetails);
    if (
      values.name !== this.props.singleUser.data.name &&
      values.email === this.props.singleUser.data.email
    ) {
      UpdateByName(getResponseDetailsAfterParse.id, values.name);
      this.props.history.push('/profile');
      this.props.dispatch(dialogClose());
    } else {
      UpdateById(getResponseDetailsAfterParse.id, values).then((res) => {
        if (res.data.status === false) {
          this.setState({
            error: 'user',
          });
          setTimeout(() => {
            this.setState({
              error: '',
            });
          }, 2000);
        } else {
          return (
            this.props.history.push('/profile'),
            this.props.dispatch(dialogClose())
          );
        }
      });
    }

    // UpdateById(getResponseDetailsAfterParse.id,data);
  }

  //
  render() {
    //  const { handleChange } = this;
    const { error } = this.state;
    const getResponseDetails = localStorage.getItem('storeResponseDetails');
    const getResponseDetailsAfterParse = JSON.parse(getResponseDetails);
    return (
      <div>
        {/* {console.log(isopen.isAuthUIOpened)} */}

        <Dialog
          open={this.props.isopen.isDialog}
          // onClose={handleClose}

          aria-labelledby="form-dialog-title"
        >
          {/* <DialogTitle id="form-dialog-title">Subscribe</DialogTitle> */}
          <DialogContent className="root">
            {error === 'user' ? (
              <Alert severity="error">
                <AlertTitle>Email already exist</AlertTitle>
                {/* {message.error} */}
              </Alert>
            ) : (
              ''
            )}
            {/* <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText> */}
            {/* <TextField
              value={data.name}
              onChange={handleChange}
              margin="dense"
              name="name"
              id="name"
              label="NAME"
              type="email"
              fullWidth
            />
            <TextField
              // autoFocus
              name="email"
              onChange={handleChange}
              value={data.email}
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            /> */}
            <Formik
              initialValues={{
                email: this.props.singleUser.data.email,
                name: this.props.singleUser.data.name,
              }}
              validationSchema={Yup.object().shape({
                name: Yup.string('Name is invalid')
                  .min(2, 'Name must contain at least 2 characters')
                  .max(30, 'Name must contain no more then 30 characters')
                  .matches('^[a-z  A-Z]*$', 'Name is invalid')
                  .required('Name is required'),
                email: Yup.string('Enter your email')
                  .email('Enter a valid email')
                  .required('Email is required')
                  .max(35, 'Email is more then 35 characters')
                  .matches(/^[A-Za-z].*$/, 'Email is Invalid'),
              })}
              //   handleChange={()=>console.log("adsadd")}
              onSubmit={this.handleSubmit}
            >
              {({ dirty, isValid, touched, errors, handleChange }) => (
                <Form>
                  <Field
                    as={InputComponent}
                    // as={InputComponent}
                    type="text"
                    name="name"
                    label="Name"
                    fullWidth
                    error={errors.name}
                    helperText={<ErrorMessage name="name" />}
                  />
                  <br />
                  <Field
                    as={InputComponent}
                    // as={InputComponent}
                    disabled={
                      getResponseDetailsAfterParse.check === 200
                    }
                    type="email"
                    name="email"
                    label="Email"
                    fullWidth
                    error={errors.email}
                    helperText={<ErrorMessage name="email" />}
                  />
                  <Button
                    data-testid="Cancel"
                    onClick={this.handleClose}
                    color="primary"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={!dirty || !isValid}
                    // onClick={this.handleSubmit}
                    color="primary"
                  >
                    Update
                  </Button>
                </Form>
              )}
            </Formik>
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>
      </div>
    );
  }
}
FormDialog.propTypes = {
  history: PropTypes.object,
  dispatch: PropTypes.func,
  isopen: PropTypes.object,
  singleUser: PropTypes.array,
};
function mapStateToProps(state) {
  console.log(state);
  return {
    isopen: state.dialog,
    singleUser: state.singleUserDetail,
  };
}

export default withRouter(connect(mapStateToProps)(FormDialog));
