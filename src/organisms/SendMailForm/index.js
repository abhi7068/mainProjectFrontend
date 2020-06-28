import React, { Component } from 'react';
import { Button, Card, TextField } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { withStyles } from '@material-ui/styles';
import { withRouter } from 'react-router-dom';
import { sendGift } from '../../services/giftService';
import SnackBar from '../../atoms/SnackBar';
import PropTypes from 'prop-types';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const styles = {
  root: {
    width: '300px',
    height: '300px',
    margin: '10% auto',
  },
  label: {
    textTransform: 'capitalize',
  },
  display: {
    margin: '5% ',
  },
};

class Forms extends Component {
  constructor(props) {
    super();
    this.state = {
      open: false,
      disabled: false,
    };
  }

  render() {
    return (
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required')
            .max(35, 'Email must contain no more then 35 characters')
            .matches(
              /^[A-Za-z].*$/,
              'Email should not start with number orspecial character'
            ),
        })}
        onSubmit={(values) => {
          const {
            match: {
              params: { balance },
            },
          } = this.props;

          const details = JSON.parse(
            localStorage.getItem('storeResponseDetails')
          );
          sendGift(details.id, values.email, balance).then((res) => {
            this.setState({ open: res.data.success, disabled: true });
          });
        }}
      >
        {() => {
          return (
            <div>
              {this.state.open && (
                <SnackBar path="/" name="Successfully sent" />
              )}
              <Card
                classes={{
                  root: this.props.classes.root,
                }}
              >
                <CardHeader title="GIFT CARD" />
                <Form>
                  <Field
                    as={TextField}
                    name="email"
                    label="Email"
                    variant="outlined"
                  />

                  <ErrorMessage
                    name="email"
                    component="div"
                    style={{ color: 'red' }}
                  />
                  <CardContent>
                    <Button
                      data-testId="button"
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={this.state.disabled}
                    >
                      Send
                    </Button>
                  </CardContent>
                </Form>
              </Card>
            </div>
          );
        }}
      </Formik>
    );
  }
}
Forms.propTypes = {
  classes: PropTypes.object,
  root: PropTypes.object,
  display: PropTypes.object,
  history: PropTypes.object,
  match: PropTypes.object,
};
export default withRouter(withStyles(styles)(Forms));
