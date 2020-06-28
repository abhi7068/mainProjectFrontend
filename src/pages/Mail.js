import React, { Component } from 'react';

import { Card, CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

const styles = {
  root: {
    margin: '7% auto',
    maxWidth: 700,
  },
};

class index extends Component {
  render() {
    return (
      <div>
        <Card
          classes={{
            root: this.props.classes.root,
          }}
        >
          <h2 style={{ color: 'red' }}>Support</h2>
          <CardContent>
            <h4
              data-testid="mail1"
              style={{ textAlign: 'left', color: 'orange' }}
            >
              Gentle Remainder
            </h4>
            <br />
            <Typography
              variant="body2"
              color="red"
              component="p"
              style={{ textAlign: 'left' }}
            >
              We are always there to support our customers..never hesitate to
              contact us..If you have any queries please feel free to contact us
              at
            </Typography>
            <br />
            <div style={{ textAlign: 'left' }}>
              <EmailIcon color="primary" />{' '}
              <p
                data-testid="mail2"
                style={{
                  display: 'inline',
                  color: 'green',
                  marginLeft: '5px',
                }}
              >
                {' '}
                giftyoyo008@gmail.com
              </p>
              <br />
              <br />
              <div style={{ marginRight: '60px' }}>
                <PhoneIcon color="primary" />{' '}
                <p
                  data-testid="mail3"
                  style={{ display: 'inline', color: 'green' }}
                >
                  {' '}
                  +91-9705065342
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}
index.propTypes = {
  classes: PropTypes.object,
  root: PropTypes.object,
  display: PropTypes.object,
};

export default withStyles(styles)(index);
